"use client";

import { Zap } from "lucide-react";
import Link from "next/link";
import { recentAchievement } from "@/lib/data";

export default function AchievementCard() {
  return (
    <Link
      href={recentAchievement.link}
      className="h-full block p-5 md:p-6 rounded-2xl bg-glow-yellow border border-accent-primary/25 hover:border-accent-primary/50 transition-all duration-300"
    >
      <div className="flex items-center gap-2 mb-3">
        <Zap size={14} className="text-accent-primary" />
        <span className="text-[10px] font-mono text-accent-primary uppercase tracking-wider">
          Latest Win
        </span>
      </div>

      <h3 className="text-sm font-semibold text-text-primary mb-1.5 leading-snug">
        {recentAchievement.title}
      </h3>

      <p className="text-xs text-text-secondary leading-relaxed">
        {recentAchievement.description}
      </p>

      <p className="text-[10px] font-mono text-text-tertiary mt-3">
        {recentAchievement.date}
      </p>
    </Link>
  );
}
