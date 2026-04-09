"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface WorkCardProps {
  project: {
    slug: string;
    title: string;
    description: string;
    tags: string[];
    year: string;
  };
}

export default function WorkCard({ project }: WorkCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group h-full block p-5 md:p-6 rounded-2xl bg-bg-secondary border border-border-subtle hover:border-accent-primary/40 transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="text-base font-semibold text-text-primary group-hover:text-accent-primary transition-colors duration-200 leading-snug">
          {project.title}
        </h3>
        <ArrowRight
          size={14}
          className="text-text-tertiary group-hover:text-accent-primary group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 mt-1"
        />
      </div>

      <p className="text-sm text-text-secondary leading-relaxed mb-4">
        {project.description}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[10px] font-mono rounded bg-bg-tertiary text-text-tertiary border border-border-subtle"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="text-[10px] font-mono text-text-tertiary">
          {project.year}
        </span>
      </div>
    </Link>
  );
}
