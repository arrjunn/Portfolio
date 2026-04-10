"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";
import { contentIConsume } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";

export default function Bookshelf() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper
      eyebrow="Content I Consume"
      title="What Shapes My Thinking"
      description="YouTube channels I regularly watch to stay sharp on product, AI, and strategy."
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {contentIConsume.map((channel, i) => (
          <motion.a
            key={channel.name}
            href={channel.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="group flex items-start gap-4 p-4 rounded-2xl bg-bg-secondary border border-border-subtle hover:border-accent-primary/40 transition-all duration-300"
          >
            {/* Avatar */}
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-bg-tertiary border border-border-subtle">
              <img
                src={channel.avatar}
                alt={channel.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-sm font-semibold text-text-primary group-hover:text-accent-primary transition-colors truncate">
                  {channel.name}
                </h3>
                <Play size={10} className="text-accent-red flex-shrink-0" />
              </div>
              <p className="text-xs text-text-tertiary leading-relaxed line-clamp-2 mb-2">
                {channel.description}
              </p>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-bg-tertiary text-text-tertiary border border-border-subtle">
                  {channel.category}
                </span>
                <span className="text-[10px] font-mono text-text-tertiary">
                  {channel.subs} subs
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
