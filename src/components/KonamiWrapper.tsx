"use client";

import { useKonamiCode } from "@/hooks/useKonamiCode";

export default function KonamiWrapper() {
  const triggered = useKonamiCode();

  if (!triggered) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] pointer-events-none"
      style={{
        backdropFilter: "invert(1)",
        WebkitBackdropFilter: "invert(1)",
        animation: "konamiFlash 600ms ease-out forwards",
      }}
    />
  );
}
