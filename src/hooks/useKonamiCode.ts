"use client";

import { useEffect, useState, useRef } from "react";

export function useKonamiCode() {
  const [triggered, setTriggered] = useState(false);
  const clickCount = useRef(0);
  const clickTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function onClick() {
      clickCount.current++;

      if (clickTimer.current) clearTimeout(clickTimer.current);

      if (clickCount.current >= 3) {
        clickCount.current = 0;
        setTriggered(true);
        setTimeout(() => setTriggered(false), 100);
      } else {
        clickTimer.current = setTimeout(() => {
          clickCount.current = 0;
        }, 400);
      }
    }

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      if (clickTimer.current) clearTimeout(clickTimer.current);
    };
  }, []);

  return triggered;
}
