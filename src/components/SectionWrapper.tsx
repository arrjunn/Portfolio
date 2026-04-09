"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionWrapperProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
  dark?: boolean;
}

export default function SectionWrapper({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
  wide = false,
  dark = false,
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id={id}
      className={`py-24 md:py-32 ${dark ? "bg-bg-secondary" : ""} ${className}`}
    >
      <div
        className={`mx-auto px-5 md:px-10 lg:px-16 ${wide ? "max-w-[1440px]" : "max-w-[1280px]"}`}
      >
        {(eyebrow || title || description) && (
          <div className="mb-12 md:mb-16">
            {eyebrow && (
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="eyebrow mb-3"
              >
                {eyebrow}
              </motion.p>
            )}
            {title && (
              <motion.h2
                initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                animate={isInView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-text-primary leading-tight"
              >
                {title}
              </motion.h2>
            )}
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="mt-4 text-lg text-text-secondary max-w-[560px] leading-relaxed"
              >
                {description}
              </motion.p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
