"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootLines = [
  "Arjun.OS v1.0 — Initializing...",
  "Loading product frameworks...",
  "Mounting side projects [4 found]...",
  "Establishing user research pipeline...",
  "Compiling strategy modules...",
  "Launching environment...",
];

const LINE_DELAY = 420;
const TOTAL_DURATION = bootLines.length * LINE_DELAY + 800;

export default function BootScreen() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    if (sessionStorage.getItem("booted")) return false;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      sessionStorage.setItem("booted", "1");
      return false;
    }
    return true;
  });
  const [currentLine, setCurrentLine] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showSkip, setShowSkip] = useState(false);
  const [exiting, setExiting] = useState(false);
  const intervalsRef = useRef<ReturnType<typeof setInterval>[]>([]);

  const skip = useCallback(() => {
    if (exiting) return;
    setExiting(true);
    intervalsRef.current.forEach(clearInterval);
    sessionStorage.setItem("booted", "1");
    setTimeout(() => setVisible(false), 350);
  }, [exiting]);

  useEffect(() => {
    if (!visible) return;

    // Line progression
    const lineInterval = setInterval(() => {
      setCurrentLine((prev) => {
        if (prev >= bootLines.length - 1) {
          clearInterval(lineInterval);
          return prev;
        }
        return prev + 1;
      });
    }, LINE_DELAY);
    intervalsRef.current.push(lineInterval);

    // Progress bar
    const startTime = Date.now();
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const p = Math.min((elapsed / TOTAL_DURATION) * 100, 100);
      setProgress(p);
      if (p >= 100) {
        clearInterval(progressInterval);
        setTimeout(skip, 400);
      }
    }, 30);
    intervalsRef.current.push(progressInterval);

    // Show skip hint after 1s
    const skipTimer = setTimeout(() => setShowSkip(true), 1000);

    // Keyboard skip
    const onKeyDown = () => skip();
    document.addEventListener("keydown", onKeyDown);

    const currentIntervals = intervalsRef.current;
    return () => {
      currentIntervals.forEach(clearInterval);
      clearTimeout(skipTimer);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [skip]);

  if (!visible) return null;

  return (
    <AnimatePresence>
      {!exiting ? (
        <motion.div
          key="boot"
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          onClick={skip}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center cursor-pointer select-none"
          style={{ background: "#121214" }}
        >
          <div className="w-full max-w-md px-6">
            {/* Boot lines */}
            <div className="space-y-2 mb-8">
              {bootLines.slice(0, currentLine + 1).map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="font-mono text-sm flex items-center gap-2"
                  style={{ color: "#6C9CFC" }}
                >
                  <span style={{ color: "#6C9CFC", opacity: 0.6 }}>►</span>
                  <span>{line}</span>
                </motion.p>
              ))}
            </div>

            {/* Progress bar */}
            <div className="mb-6">
              <div
                className="h-2.5 rounded-sm overflow-hidden"
                style={{ background: "#1A1A1E" }}
              >
                <motion.div
                  className="h-full rounded-sm"
                  style={{
                    background: "#6C9CFC",
                    width: `${progress}%`,
                  }}
                />
              </div>
              <p
                className="font-mono text-xs mt-2 text-right"
                style={{ color: "#71717A" }}
              >
                {Math.round(progress)}%
              </p>
            </div>

            {/* Skip hint */}
            {showSkip && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="font-mono text-xs text-center"
                style={{ color: "#3F3F48" }}
              >
                press any key or tap to skip
              </motion.p>
            )}
          </div>
        </motion.div>
      ) : (
        /* Fade-out overlay to prevent flash */
        <motion.div
          key="fade"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[200] pointer-events-none"
          style={{ background: "#121214" }}
          onAnimationComplete={() => setVisible(false)}
        />
      )}
    </AnimatePresence>
  );
}
