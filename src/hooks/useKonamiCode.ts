"use client";

import { useEffect, useState } from "react";

export function useKonamiCode() {
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      // Ctrl + ` (backtick) to open terminal
      if ((e.ctrlKey || e.metaKey) && e.key === "`") {
        e.preventDefault();
        setTriggered(true);
        setTimeout(() => setTriggered(false), 100);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return triggered;
}
