"use client";

import { useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";
import Link from "next/link";

interface MagneticLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export default function MagneticLink({
  href,
  children,
  className = "",
  strength = 0.3,
}: MagneticLinkProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isTouch] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(hover: none)").matches
      : false
  );

  const x = useSpring(0, { stiffness: 200, damping: 20 });
  const y = useSpring(0, { stiffness: 200, damping: 20 });

  function handleMouseMove(e: React.MouseEvent) {
    if (isTouch || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className="inline-block"
    >
      <Link href={href} className={className}>
        {children}
      </Link>
    </motion.div>
  );
}
