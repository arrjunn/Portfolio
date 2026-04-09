"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { labEntries } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";

const statusConfig = {
  hypothesis: { emoji: "💡", label: "Hypothesis", color: "text-accent-purple" },
  experimenting: { emoji: "🧪", label: "Experimenting", color: "text-accent-primary" },
  "in-progress": { emoji: "🔬", label: "In Progress", color: "text-accent-secondary" },
  concluded: { emoji: "✅", label: "Concluded", color: "text-accent-green" },
  failed: { emoji: "💀", label: "Failed", color: "text-accent-red" },
} as const;

type FilterStatus = "all" | keyof typeof statusConfig;

export default function TheLab() {
  const [filter, setFilter] = useState<FilterStatus>("all");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const filtered =
    filter === "all"
      ? labEntries
      : labEntries.filter((e) => e.status === filter);

  const filters: { value: FilterStatus; label: string }[] = [
    { value: "all", label: "All" },
    { value: "experimenting", label: "Experimenting" },
    { value: "hypothesis", label: "Hypothesis" },
    { value: "in-progress", label: "In Progress" },
    { value: "failed", label: "Failed" },
  ];

  return (
    <SectionWrapper
      eyebrow="The Lab"
      title="Where Half-Baked Ideas Come to Cook"
      description="Experiments, hypotheses, and things I'm tinkering with. Not everything works — and that's the point."
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              aria-pressed={filter === f.value}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border ${
                filter === f.value
                  ? "bg-accent-primary text-bg-primary border-accent-primary"
                  : "bg-bg-secondary text-text-secondary border-border-subtle hover:border-border-hover"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Entries */}
        <div className="space-y-4">
          {filtered.map((entry, i) => {
            const status = statusConfig[entry.status];
            return (
              <motion.div
                key={entry.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="group p-5 md:p-6 rounded-2xl bg-bg-secondary border border-border-subtle hover:border-border-hover transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-lg">{status.emoji}</span>
                      <h3 className="text-base font-semibold text-text-primary">
                        {entry.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-text-tertiary mb-3">
                      <span className={`font-medium ${status.color}`}>
                        {status.label}
                      </span>
                      <span>•</span>
                      <span className="font-mono">{entry.date}</span>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {entry.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {entry.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[11px] font-mono rounded bg-bg-tertiary text-text-tertiary border border-border-subtle"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-text-tertiary group-hover:text-accent-primary group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 mt-2"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
