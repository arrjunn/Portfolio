"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { decisions } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";

function DecisionCard({ decision, index }: { decision: typeof decisions[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="rounded-2xl bg-bg-secondary border border-border-subtle overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full text-left p-5 md:p-6 flex items-start justify-between gap-4"
      >
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-accent-purple/10 text-accent-purple border border-accent-purple/20">
              {decision.framework}
            </span>
            <span className="text-[10px] font-mono text-text-tertiary">{decision.date}</span>
          </div>
          <h3 className="text-sm font-semibold text-text-primary leading-snug">{decision.title}</h3>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-text-tertiary flex-shrink-0 mt-1"
        >
          <ChevronDown size={16} />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6 space-y-4">
              <p className="text-xs text-text-secondary leading-relaxed">{decision.context}</p>

              {/* Options table */}
              <div className="space-y-3">
                {decision.options.map((opt, i) => (
                  <div
                    key={i}
                    className={`p-3 rounded-lg border text-xs ${
                      opt.name === decision.chosen
                        ? "bg-accent-primary/5 border-accent-primary/30"
                        : "bg-bg-tertiary/50 border-border-subtle"
                    }`}
                  >
                    <p className="font-medium text-text-primary mb-1.5">
                      {opt.name}
                      {opt.name === decision.chosen && (
                        <span className="ml-2 text-[9px] font-mono text-accent-primary">CHOSEN</span>
                      )}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <p className="text-[10px] font-mono text-accent-green mb-1">Pros</p>
                        <ul className="space-y-0.5">
                          {opt.pros.map((p, j) => (
                            <li key={j} className="text-text-secondary">+ {p}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-[10px] font-mono text-accent-red mb-1">Cons</p>
                        <ul className="space-y-0.5">
                          {opt.cons.map((c, j) => (
                            <li key={j} className="text-text-secondary">- {c}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-lg bg-bg-tertiary/50 border border-border-subtle">
                <p className="text-[10px] font-mono text-accent-primary mb-1">Outcome</p>
                <p className="text-xs text-text-secondary">{decision.outcome}</p>
              </div>

              <div className="p-3 rounded-lg bg-bg-tertiary/50 border border-border-subtle">
                <p className="text-[10px] font-mono text-accent-primary mb-1">What I Learned</p>
                <p className="text-xs text-text-secondary">{decision.learned}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function DecisionLog() {
  return (
    <SectionWrapper
      eyebrow="Decisions"
      title="How I Think Through Trade-offs"
      description="Real decisions with options, frameworks, and outcomes — not just the polished result."
    >
      <div className="space-y-4 max-w-3xl">
        {decisions.map((d, i) => (
          <DecisionCard key={d.id} decision={d} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
