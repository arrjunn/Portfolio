"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { changelog } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";

export default function Changelog() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper
      eyebrow="Currently Building"
      title="What I'm Working On"
      description="A living changelog of what I'm building, learning, and shipping."
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="relative pl-8 border-l-2 border-border-subtle max-w-2xl"
      >
        {changelog.map((entry, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              delay: i * 0.1,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mb-8 last:mb-0"
          >
            {/* Dot */}
            <div className="absolute -left-[calc(2rem+5px)] top-1.5">
              {entry.active ? (
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-green" />
                </span>
              ) : (
                <span className="inline-flex rounded-full h-3 w-3 bg-border-default" />
              )}
            </div>

            {/* Content */}
            <p className="text-xs font-mono text-text-tertiary mb-1">
              {entry.date}
            </p>
            <p className="text-[15px] text-text-secondary leading-relaxed">
              &ldquo;{entry.text}&rdquo;
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {entry.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[11px] font-mono rounded bg-bg-tertiary text-text-tertiary border border-border-subtle"
                >
                  {tag}
                </span>
              ))}
            </div>
            {entry.link && (
              <Link
                href={entry.link}
                className="inline-flex items-center gap-1 text-xs text-accent-secondary hover:underline mt-2"
              >
                View <ArrowRight size={10} />
              </Link>
            )}
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-10">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-accent-primary transition-colors duration-200"
        >
          View Full Changelog
          <ArrowRight size={14} />
        </Link>
      </div>
    </SectionWrapper>
  );
}
