"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { CaseStudySection } from "@/lib/data";

export default function SectionRenderer({ section }: { section: CaseStudySection }) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id={section.id} className="scroll-mt-24 mb-16 md:mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Section label */}
        <p className="eyebrow mb-2">{section.type}</p>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-text-primary mb-2">
          {section.title}
        </h2>

        {/* Subtitle */}
        {section.subtitle && (
          <p className="text-base text-text-secondary font-serif-accent italic mb-6">
            {section.subtitle}
          </p>
        )}

        {/* Content */}
        <p className="text-[15px] text-text-secondary leading-relaxed mb-6 prose-width">
          {section.content}
        </p>

        {/* Bullets */}
        {section.bullets && section.bullets.length > 0 && (
          <ul className="space-y-2 mb-6">
            {section.bullets.map((bullet, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
                className="flex items-start gap-3 text-sm text-text-secondary"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-primary flex-shrink-0" />
                {bullet}
              </motion.li>
            ))}
          </ul>
        )}

        {/* Metrics */}
        {section.metrics && section.metrics.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {section.metrics.map((m) => (
              <div key={m.label} className="p-5 rounded-xl bg-bg-tertiary/50 border border-border-subtle text-center">
                <p className="text-2xl md:text-3xl font-display font-bold text-accent-primary mb-1">
                  {m.value}
                </p>
                <p className="text-xs font-mono text-text-tertiary">{m.label}</p>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}
