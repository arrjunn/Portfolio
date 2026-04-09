"use client";

import { motion } from "framer-motion";
import { colophon } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";

export default function Colophon() {
  return (
    <SectionWrapper
      eyebrow="Meta"
      title={colophon.title}
      description={colophon.intro}
    >
      <div className="max-w-3xl space-y-8">
        {/* Stack */}
        <div>
          <h3 className="text-xs font-mono font-medium text-accent-primary uppercase tracking-wider mb-4">
            Stack
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {colophon.stack.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="p-4 rounded-xl bg-bg-secondary border border-border-subtle"
              >
                <p className="text-sm font-semibold text-text-primary mb-1">{item.name}</p>
                <p className="text-xs text-text-tertiary">{item.why}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tradeoffs */}
        <div>
          <h3 className="text-xs font-mono font-medium text-accent-primary uppercase tracking-wider mb-4">
            Design Tradeoffs
          </h3>
          <div className="space-y-3">
            {colophon.tradeoffs.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="p-4 rounded-xl bg-bg-secondary border border-border-subtle"
              >
                <p className="text-sm font-medium text-text-primary mb-1">{t.decision}</p>
                <p className="text-xs text-text-tertiary">{t.reasoning}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* What I'd Change */}
        <div>
          <h3 className="text-xs font-mono font-medium text-accent-primary uppercase tracking-wider mb-4">
            What I&apos;d Change Next
          </h3>
          <ul className="space-y-2">
            {colophon.wouldChange.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex items-start gap-3 text-sm text-text-secondary"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-primary flex-shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
