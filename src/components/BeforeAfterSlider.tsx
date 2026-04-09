"use client";

import { useRef, useState, useCallback } from "react";

interface BeforeAfterSliderProps {
  beforeLabel: string;
  beforeValue: string;
  afterLabel: string;
  afterValue: string;
  beforeColor?: string;
  afterColor?: string;
}

export default function BeforeAfterSlider({
  beforeLabel,
  beforeValue,
  afterLabel,
  afterValue,
  beforeColor = "var(--accent-red)",
  afterColor = "var(--accent-green)",
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    setDragging(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  }, [updatePosition]);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragging) return;
    updatePosition(e.clientX);
  }, [dragging, updatePosition]);

  const onPointerUp = useCallback(() => {
    setDragging(false);
  }, []);

  return (
    <div
      ref={containerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      className="relative h-28 rounded-xl overflow-hidden cursor-col-resize select-none touch-none border border-border-subtle"
    >
      {/* Before side */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <p className="text-xs font-mono uppercase tracking-wider mb-1" style={{ color: beforeColor, opacity: 0.7 }}>
          {beforeLabel}
        </p>
        <p className="text-2xl font-display font-bold" style={{ color: beforeColor }}>
          {beforeValue}
        </p>
      </div>

      {/* After side (clipped) */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{
          backgroundColor: "var(--bg-tertiary)",
          clipPath: `inset(0 ${100 - position}% 0 0)`,
        }}
      >
        <p className="text-xs font-mono uppercase tracking-wider mb-1" style={{ color: afterColor, opacity: 0.7 }}>
          {afterLabel}
        </p>
        <p className="text-2xl font-display font-bold" style={{ color: afterColor }}>
          {afterValue}
        </p>
      </div>

      {/* Divider */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-accent-primary z-10"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-accent-primary flex items-center justify-center">
          <span className="text-bg-primary text-xs font-bold">⇔</span>
        </div>
      </div>
    </div>
  );
}
