"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { teardowns } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";

export default function ProductTeardowns() {
  return (
    <SectionWrapper
      eyebrow="Teardowns"
      title="Products I've Analyzed"
      description="Critical analysis of real products — strengths, weaknesses, and strategic opportunities."
    >
      <div className="space-y-4 max-w-3xl">
        {teardowns.map((td, i) => (
          <motion.div
            key={td.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <Link
              href={`/projects/${td.slug}`}
              className="group block p-5 md:p-6 rounded-2xl bg-bg-secondary border border-border-subtle hover:border-accent-primary/40 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-base font-semibold text-text-primary group-hover:text-accent-primary transition-colors">
                      {td.product}
                    </h3>
                    <span className="text-xs text-text-tertiary font-mono">• {td.tagline}</span>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed mb-3">
                    {td.verdict}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {td.sections.map((s) => (
                      <span
                        key={s.title}
                        className={`px-2 py-0.5 text-[10px] font-mono rounded border ${
                          s.type === "strength" ? "text-accent-green border-accent-green/20 bg-accent-green/5" :
                          s.type === "weakness" ? "text-accent-red border-accent-red/20 bg-accent-red/5" :
                          s.type === "opportunity" ? "text-accent-secondary border-accent-secondary/20 bg-accent-secondary/5" :
                          s.type === "recommendation" ? "text-accent-primary border-accent-primary/20 bg-accent-primary/5" :
                          "text-text-tertiary border-border-subtle"
                        }`}
                      >
                        {s.title}
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowRight size={16} className="text-text-tertiary group-hover:text-accent-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
