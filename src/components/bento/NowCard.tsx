"use client";

import { MapPin } from "lucide-react";
import { siteConfig, changelog } from "@/lib/data";

export default function NowCard() {
  const current = changelog[0];

  return (
    <div className="h-full p-5 md:p-6 rounded-2xl bg-bg-secondary border border-border-subtle hover:border-accent-primary/40 transition-all duration-300 border-l-2 border-l-accent-primary">
      <div className="flex items-center gap-2 mb-4">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green" />
        </span>
        <span className="text-xs font-mono text-accent-primary uppercase tracking-wider">
          Now
        </span>
      </div>

      <p className="text-sm text-text-secondary leading-relaxed mb-4">
        {current.text}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {current.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-[10px] font-mono rounded bg-bg-tertiary text-text-tertiary border border-border-subtle"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-1.5 text-xs text-text-tertiary pt-3 border-t border-border-subtle">
        <MapPin size={12} />
        {siteConfig.location}
      </div>
    </div>
  );
}
