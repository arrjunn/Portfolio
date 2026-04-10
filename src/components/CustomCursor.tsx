"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 250, damping: 25 });
  const springY = useSpring(cursorY, { stiffness: 250, damping: 25 });

  useEffect(() => {
    // Only show cursor on devices with hover (no touch)
    if (window.matchMedia("(hover: none)").matches) return;
    const rafId = requestAnimationFrame(() => setMounted(true));

    function onMouseMove(e: MouseEvent) {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setVisible(true);
    }

    function onMouseLeave() {
      setVisible(false);
    }

    function onMouseOver(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest("a, button, [role='button'], input, textarea, [tabindex]");
      setHovered(!!isInteractive);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseover", onMouseOver);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseover", onMouseOver);
    };
  }, [cursorX, cursorY]);

  // Don't render on server or on touch devices
  if (!mounted) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: hovered ? 48 : 14,
        height: hovered ? 48 : 14,
        opacity: visible ? 1 : 0,
      }}
      transition={{ width: { duration: 0.2 }, height: { duration: 0.2 }, opacity: { duration: 0.15 } }}
    >
      <div
        className="w-full h-full rounded-full border-2"
        style={{
          borderColor: "var(--text-tertiary)",
          backgroundColor: hovered ? "rgba(163, 163, 163, 0.08)" : "transparent",
        }}
      />
    </motion.div>
  );
}
