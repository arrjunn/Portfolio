"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { showerThoughts } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";

export default function ShowerThoughtsGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper
      eyebrow="Shower Thoughts"
      title="Quick-Hit Opinions"
      description="Things I believe, hot takes, and observations from the shower."
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
      >
        {showerThoughts.map((thought, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.06, duration: 0.4 }}
            className="break-inside-avoid p-5 rounded-xl bg-bg-secondary border border-border-subtle hover:border-border-hover transition-all duration-200"
          >
            <p className="text-[15px] text-text-secondary font-serif-accent italic leading-relaxed mb-4">
              &ldquo;{thought.text}&rdquo;
            </p>
            <div className="flex items-center justify-between text-[11px] text-text-tertiary">
              <span className="font-mono px-2 py-0.5 rounded bg-bg-tertiary">
                {thought.tag}
              </span>
              <span className="font-mono">{thought.date}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
