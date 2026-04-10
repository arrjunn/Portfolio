"use client";

import { useEffect, useState, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";

interface TextScrambleProps {
  text: string;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function TextScramble({
  text,
  delay = 200,
  duration = 800,
  className = "",
}: TextScrambleProps) {
  const [displayed, setDisplayed] = useState(text);
  const [started, setStarted] = useState(false);
  const prefersReducedMotion = useRef(false);
  const intervalsRef = useRef<ReturnType<typeof setInterval>[]>([]);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion.current) {
      setDisplayed(text);
      setStarted(true);
      return;
    }

    setDisplayed(
      text
        .split("")
        .map((c) => (c === " " ? " " : CHARS[Math.floor(Math.random() * CHARS.length)]))
        .join("")
    );

    const delayTimer = setTimeout(() => {
      setStarted(true);
      const totalChars = text.length;
      const resolveInterval = duration / totalChars;
      let resolved = 0;

      const interval = setInterval(() => {
        resolved++;
        setDisplayed(
          text
            .split("")
            .map((char, i) => {
              if (char === " ") return " ";
              if (i < resolved) return char;
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );

        if (resolved >= totalChars) {
          clearInterval(interval);
          clearInterval(scrambleInterval);
        }
      }, resolveInterval);

      const scrambleInterval = setInterval(() => {
        setDisplayed((prev) =>
          prev
            .split("")
            .map((char, i) => {
              if (text[i] === " ") return " ";
              if (i < resolved) return text[i];
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );
      }, 40);

      intervalsRef.current = [interval, scrambleInterval];
    }, delay);

    return () => {
      clearTimeout(delayTimer);
      intervalsRef.current.forEach(clearInterval);
    };
  }, [text, delay, duration]);

  return (
    <span
      className={className}
      style={{
        opacity: started || prefersReducedMotion.current ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
    >
      {displayed}
    </span>
  );
}
