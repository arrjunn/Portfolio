"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { changedMindItems } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";

function ChangedMindCard({
  item,
  index,
}: {
  item: (typeof changedMindItems)[0];
  index: number;
}) {
  const [showWhy, setShowWhy] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="p-5 md:p-6 rounded-2xl bg-bg-secondary border border-border-subtle"
    >
      {/* Before */}
      <div className="mb-3">
        <span className="text-[11px] font-mono text-text-tertiary uppercase tracking-wider">
          Before
        </span>
        <p className="text-text-tertiary line-through text-sm mt-1">
          &ldquo;{item.before}&rdquo;
        </p>
      </div>

      {/* Arrow */}
      <div className="flex items-center gap-3 my-3">
        <div className="flex-1 h-px bg-border-subtle" />
        <ArrowRight size={14} className="text-accent-primary" />
        <div className="flex-1 h-px bg-border-subtle" />
      </div>

      {/* After */}
      <div className="mb-3">
        <span className="text-[11px] font-mono text-accent-primary uppercase tracking-wider">
          After
        </span>
        <p className="text-text-primary font-medium text-sm mt-1">
          &ldquo;{item.after}&rdquo;
        </p>
      </div>

      {/* Why (collapsible) */}
      <button
        onClick={() => setShowWhy(!showWhy)}
        aria-expanded={showWhy}
        className="text-xs text-text-tertiary hover:text-text-secondary transition-colors mt-2 underline underline-offset-2"
      >
        {showWhy ? "Hide why" : "Why I changed my mind"}
      </button>
      <AnimatePresence>
        {showWhy && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="text-xs text-text-secondary mt-2 leading-relaxed bg-bg-tertiary/50 p-3 rounded-lg overflow-hidden"
          >
            {item.why}
          </motion.p>
        )}
      </AnimatePresence>

      <p className="text-[10px] font-mono text-text-tertiary mt-3">
        Changed: {item.date}
      </p>
    </motion.div>
  );
}

export default function ChangedMind() {
  return (
    <SectionWrapper
      eyebrow="Growth"
      title="Things I've Changed My Mind About"
      description="Intellectual honesty means updating your beliefs when the evidence changes."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        {changedMindItems.map((item, i) => (
          <ChangedMindCard key={i} item={item} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
