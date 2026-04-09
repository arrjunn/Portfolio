"use client";

import { useEffect, useState, useRef } from "react";

const KONAMI = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

export function useKonamiCode() {
  const [triggered, setTriggered] = useState(false);
  const indexRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === KONAMI[indexRef.current]) {
        indexRef.current++;
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
          indexRef.current = 0;
        }, 3000);

        if (indexRef.current === KONAMI.length) {
          setTriggered(true);
          indexRef.current = 0;
          setTimeout(() => setTriggered(false), 600);
        }
      } else {
        indexRef.current = 0;
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return triggered;
}
