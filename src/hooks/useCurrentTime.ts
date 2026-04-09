"use client";

import { useState, useEffect } from "react";

export function useCurrentTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    function update() {
      const now = new Date();
      const ist = new Date(
        now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
      );
      setTime(
        ist.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }) + " IST"
      );
    }
    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  return time;
}
