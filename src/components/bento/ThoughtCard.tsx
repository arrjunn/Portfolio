"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { showerThoughts } from "@/lib/data";

export default function ThoughtCard() {
  const [index, setIndex] = useState(0);
  const thought = showerThoughts[index];

  function next() {
    setIndex((i) => (i + 1) % showerThoughts.length);
  }

  return (
    <button
      onClick={next}
      className="h-full w-full text-left p-5 md:p-6 rounded-2xl bg-bg-secondary border border-border-subtle hover:border-accent-primary/40 transition-all duration-300 flex flex-col justify-between cursor-pointer"
    >
      <span className="text-[10px] font-mono text-text-tertiary uppercase tracking-wider mb-3 block">
        Thought #{index + 1}/{showerThoughts.length}
      </span>

      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.2 }}
          className="text-[15px] font-serif-accent italic text-text-secondary leading-relaxed flex-1"
        >
          &ldquo;{thought.text}&rdquo;
        </motion.p>
      </AnimatePresence>

      <span className="text-[10px] font-mono text-text-tertiary mt-3 block">
        {thought.tag} · {thought.date} · click to cycle
      </span>
    </button>
  );
}
