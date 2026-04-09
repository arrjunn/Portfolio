"use client";

import { motion } from "framer-motion";
import { frameworks, projects } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";

export default function FrameworkLibrary() {
  return (
    <SectionWrapper
      eyebrow="Playbook"
      title="PM Frameworks I Use"
      description="The mental models and frameworks that shape how I prioritize, build, and measure."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {frameworks.map((fw, i) => {
          const related = fw.relatedProject ? projects.find((p) => p.slug === fw.relatedProject) : null;
          return (
            <motion.div
              key={fw.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="p-5 rounded-2xl bg-bg-secondary border border-border-subtle hover:border-accent-primary/40 transition-all duration-300"
            >
              <h3 className="text-base font-display font-bold text-text-primary mb-1">{fw.name}</h3>
              <p className="text-xs text-text-secondary leading-relaxed mb-3">{fw.description}</p>

              <div className="p-2.5 rounded-lg bg-bg-tertiary/50 border border-border-subtle mb-3">
                <p className="text-[10px] font-mono text-accent-primary mb-1">When to use</p>
                <p className="text-xs text-text-secondary">{fw.whenToUse}</p>
              </div>

              {fw.steps && (
                <ol className="space-y-1 mb-3">
                  {fw.steps.map((step, j) => (
                    <li key={j} className="text-[11px] text-text-tertiary flex items-start gap-2">
                      <span className="text-accent-primary font-mono flex-shrink-0">{j + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ol>
              )}

              {related && (
                <p className="text-[10px] font-mono text-text-tertiary">
                  Applied in: <span className="text-accent-primary">{related.title}</span>
                </p>
              )}
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
