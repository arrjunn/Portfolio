"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isTouch] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(hover: none)").matches : true
  );

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 250, damping: 25 });
  const springY = useSpring(cursorY, { stiffness: 250, damping: 25 });

  useEffect(() => {
    if (isTouch) return;

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
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseover", onMouseOver);
    };
  }, [cursorX, cursorY, isTouch]);

  if (isTouch) return null;

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
          borderColor: "var(--accent-primary)",
          backgroundColor: hovered ? "rgba(108, 156, 252, 0.1)" : "transparent",
        }}
      />
    </motion.div>
  );
}
