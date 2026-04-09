"use client";

import { useState, useEffect, useCallback } from "react";

export function usePresentationMode(totalSlides: number) {
  const [isActive, setIsActive] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggle = useCallback(() => setIsActive((prev) => !prev), []);
  const next = useCallback(() => setCurrentSlide((s) => Math.min(s + 1, totalSlides - 1)), [totalSlides]);
  const prev = useCallback(() => setCurrentSlide((s) => Math.max(s - 1, 0)), []);

  useEffect(() => {
    if (!isActive) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setIsActive(false);
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isActive, next, prev]);

  return { isActive, currentSlide, totalSlides, toggle, next, prev };
}
