"use client";

import { useState, useCallback } from "react";

const PAGE_KEYS = ["home", "work", "mind", "lab", "about", "resume", "case-study"] as const;
const STORAGE_KEY = "visited-pages";

export function useVisitProgress() {
  const [visited, setVisited] = useState<Set<string>>(() => {
    if (typeof window === "undefined") return new Set();
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? new Set(JSON.parse(stored)) : new Set();
  });

  const markVisited = useCallback((key: string) => {
    setVisited((prev) => {
      if (prev.has(key)) return prev;
      const next = new Set(prev);
      next.add(key);
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
      return next;
    });
  }, []);

  return {
    visited,
    totalPages: PAGE_KEYS.length,
    progress: visited.size / PAGE_KEYS.length,
    allVisited: visited.size >= PAGE_KEYS.length,
    markVisited,
  };
}
