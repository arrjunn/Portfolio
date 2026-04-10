"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

const statusConfig = {
  hypothesis: { emoji: "?", label: "Hypothesis", color: "text-accent-purple" },
  experimenting: { emoji: "~", label: "Experimenting", color: "text-accent-primary" },
  "in-progress": { emoji: ">", label: "In Progress", color: "text-accent-secondary" },
  concluded: { emoji: "+", label: "Concluded", color: "text-accent-green" },
  failed: { emoji: "x", label: "Failed", color: "text-accent-red" },
} as const;

interface LabCardProps {
  entry: {
    slug: string;
    title: string;
    status: keyof typeof statusConfig;
    date: string;
    excerpt: string;
    tags: string[];
  };
}

export default function LabCard({ entry }: LabCardProps) {
  const status = statusConfig[entry.status];

  return (
    <Link
      href="/lab"
      className="group h-full block p-5 md:p-6 rounded-2xl bg-bg-secondary border border-border-subtle hover:border-accent-primary/40 transition-all duration-300"
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg">{status.emoji}</span>
        <span className="text-[10px] font-mono text-accent-primary uppercase tracking-wider">
          Lab
        </span>
        <span className="text-text-tertiary text-[10px]">·</span>
        <span className={`text-[10px] font-mono font-medium ${status.color}`}>
          {status.label}
        </span>
      </div>

      <h3 className="text-sm font-semibold text-text-primary group-hover:text-accent-primary transition-colors duration-200 mb-2 leading-snug">
        {entry.title}
      </h3>

      <p className="text-xs text-text-secondary leading-relaxed mb-3">
        {entry.excerpt}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {entry.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[10px] font-mono rounded bg-bg-tertiary text-text-tertiary border border-border-subtle"
            >
              {tag}
            </span>
          ))}
        </div>
        <ArrowRight
          size={12}
          className="text-text-tertiary group-hover:text-accent-primary transition-colors"
        />
      </div>
    </Link>
  );
}
