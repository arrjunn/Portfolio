"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useCountUp } from "@/hooks/useCountUp";
import { impactMetrics, projects } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";

function MetricCard({ metric, index }: { metric: typeof impactMetrics[0]; index: number }) {
  const { count, ref } = useCountUp(metric.value);
  const project = projects.find((p) => p.slug === metric.project);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="p-5 rounded-2xl bg-bg-secondary border border-border-subtle hover:border-accent-primary/40 transition-all duration-300"
    >
      <p className="text-3xl md:text-4xl font-display font-bold text-accent-primary mb-2">
        {metric.prefix || ""}{count}{metric.suffix || ""}
      </p>
      <p className="text-sm font-medium text-text-primary mb-1">{metric.label}</p>
      {project && (
        <p className="text-[10px] font-mono text-text-tertiary">{project.title}</p>
      )}
    </motion.div>
  );
}

export default function ImpactDashboard() {
  const [filter, setFilter] = useState<string>("all");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const categories = ["all", ...new Set(impactMetrics.map((m) => m.category))];
  const filtered = filter === "all" ? impactMetrics : impactMetrics.filter((m) => m.category === filter);

  return (
    <SectionWrapper
      eyebrow="Impact"
      title="Numbers That Matter"
      description="Quantified outcomes from real product work."
    >
      <div ref={ref}>
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium capitalize transition-all duration-200 border ${
                filter === cat
                  ? "bg-accent-primary text-bg-primary border-accent-primary"
                  : "bg-bg-secondary text-text-secondary border-border-subtle hover:border-border-hover"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {filtered.map((metric, i) => (
            <MetricCard key={metric.label} metric={metric} index={i} />
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
