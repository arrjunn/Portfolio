"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { principles } from "@/lib/data";

export default function Principles() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 bg-bg-secondary border-y border-border-subtle"
    >
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 md:mb-16 text-center"
        >
          <p className="eyebrow mb-3">Principles</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary">
            My Operating System
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-md mx-auto font-serif-accent italic">
            &ldquo;The rules I run on&rdquo;
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-10">
          {principles.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.2 + i * 0.1,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex gap-6 items-start"
            >
              <span className="text-4xl md:text-5xl font-bold text-border-default font-mono leading-none flex-shrink-0">
                {p.number}
              </span>
              <div>
                <h3 className="text-sm font-bold tracking-wider text-text-primary uppercase mb-1.5">
                  {p.title}
                </h3>
                <p className="text-text-secondary font-serif-accent italic text-[15px] leading-relaxed">
                  &ldquo;{p.description}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
