"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useVisitProgress } from "@/hooks/useVisitProgress";
import confetti from "canvas-confetti";

const routeToKey: Record<string, string> = {
  "/": "home",
  "/work": "work",
  "/mind": "mind",
  "/lab": "lab",
  "/about": "about",
  "/resume": "resume",
};

export default function VisitProgressWidget() {
  const pathname = usePathname();
  const { visited, totalPages, progress, allVisited, markVisited } = useVisitProgress();
  const [expanded, setExpanded] = useState(false);
  const [mounted] = useState(typeof window !== "undefined");

  useEffect(() => {
    const key = routeToKey[pathname];
    if (key) markVisited(key);
    if (pathname.startsWith("/projects/")) markVisited("case-study");
  }, [pathname, markVisited]);

  // Auto-collapse after 3s
  useEffect(() => {
    if (!expanded) return;
    const timer = setTimeout(() => setExpanded(false), 4000);
    return () => clearTimeout(timer);
  }, [expanded]);

  // Confetti on completion
  const hasConfettied = useRef(false);
  useEffect(() => {
    if (allVisited && !hasConfettied.current) {
      hasConfettied.current = true;
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { x: 0.9, y: 0.9 },
        disableForReducedMotion: true,
      });
    }
  }, [allVisited]);

  if (!mounted) return null;

  const visitCount = visited.size;
  const circumference = 2 * Math.PI * 18;
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <motion.button
        onClick={() => setExpanded(!expanded)}
        onMouseEnter={() => setExpanded(true)}
        className="relative flex items-center gap-2 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Progress ring */}
        <div className="relative w-10 h-10">
          <svg width="40" height="40" viewBox="0 0 40 40" className="-rotate-90">
            <circle cx="20" cy="20" r="18" fill="none" stroke="var(--border-subtle)" strokeWidth="2" />
            <motion.circle
              cx="20" cy="20" r="18" fill="none"
              stroke="var(--accent-primary)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={circumference}
              animate={{ strokeDashoffset }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-[10px] font-mono font-bold text-text-primary">
            {visitCount}
          </span>
        </div>

        {/* Expanded text */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, width: 0, x: -5 }}
              animate={{ opacity: 1, width: "auto", x: 0 }}
              exit={{ opacity: 0, width: 0, x: -5 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden whitespace-nowrap"
            >
              <div className="px-3 py-2 rounded-lg bg-bg-secondary border border-border-subtle text-xs">
                {allVisited ? (
                  <span className="text-accent-primary font-medium">
                    You&apos;ve seen everything!
                  </span>
                ) : (
                  <span className="text-text-secondary">
                    {visitCount}/{totalPages} explored
                  </span>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
