"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { changedMindItems } from "@/lib/data";

export default function ChangedMindCard() {
  const [index, setIndex] = useState(0);
  const item = changedMindItems[index];

  function next() {
    setIndex((i) => (i + 1) % changedMindItems.length);
  }

  return (
    <button
      onClick={next}
      className="h-full w-full text-left p-5 md:p-6 rounded-2xl bg-bg-secondary border border-border-subtle hover:border-accent-primary/40 transition-all duration-300 flex flex-col justify-between cursor-pointer"
    >
      <span className="text-[10px] font-mono text-text-tertiary uppercase tracking-wider mb-3 block">
        Changed my mind
      </span>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.2 }}
          className="flex-1"
        >
          <p className="text-xs text-text-tertiary line-through mb-2">
            &ldquo;{item.before}&rdquo;
          </p>
          <div className="flex items-center gap-2 mb-2">
            <ArrowRight size={10} className="text-accent-primary" />
          </div>
          <p className="text-sm text-text-primary font-medium leading-snug">
            &ldquo;{item.after}&rdquo;
          </p>
        </motion.div>
      </AnimatePresence>

      <span className="text-[10px] font-mono text-text-tertiary mt-3 block">
        {item.date} · click to cycle
      </span>
    </button>
  );
}
