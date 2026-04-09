"use client";

import { useCountUp } from "@/hooks/useCountUp";

interface MetricCardProps {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
}

export default function MetricCard({ label, value, prefix, suffix }: MetricCardProps) {
  const { count, ref } = useCountUp(value);

  return (
    <div ref={ref} className="p-5 rounded-xl bg-bg-tertiary/50 border border-border-subtle text-center">
      <p className="text-3xl md:text-4xl font-display font-bold text-accent-primary mb-1">
        {prefix}{count}{suffix}
      </p>
      <p className="text-xs font-mono text-text-tertiary">{label}</p>
    </div>
  );
}
