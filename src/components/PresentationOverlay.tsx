"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { CaseStudySection } from "@/lib/data";

interface PresentationOverlayProps {
  sections: CaseStudySection[];
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  onClose: () => void;
}

export default function PresentationOverlay({
  sections,
  currentSlide,
  totalSlides,
  onNext,
  onPrev,
  onClose,
}: PresentationOverlayProps) {
  const section = sections[currentSlide];
  if (!section) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-bg-primary/98 flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-4 border-b border-border-subtle">
        <span className="text-xs font-mono text-text-tertiary">
          {currentSlide + 1} / {totalSlides}
        </span>
        <button
          onClick={onClose}
          className="p-2 rounded-lg hover:bg-bg-hover text-text-tertiary hover:text-text-primary transition-colors"
          aria-label="Exit presentation"
        >
          <X size={18} />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-8 md:px-16 lg:px-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl w-full"
          >
            <p className="eyebrow mb-3">{section.type}</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-text-primary mb-3">
              {section.title}
            </h2>
            {section.subtitle && (
              <p className="text-lg font-serif-accent italic text-text-secondary mb-6">
                {section.subtitle}
              </p>
            )}
            <p className="text-base text-text-secondary leading-relaxed mb-6">
              {section.content}
            </p>
            {section.bullets && (
              <ul className="space-y-2">
                {section.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-primary flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between px-8 py-4 border-t border-border-subtle">
        <button
          onClick={onPrev}
          disabled={currentSlide === 0}
          className="p-2 rounded-lg hover:bg-bg-hover text-text-tertiary hover:text-text-primary transition-colors disabled:opacity-20"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Progress dots */}
        <div className="flex gap-1.5">
          {sections.map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                i === currentSlide ? "bg-accent-primary" : "bg-border-default"
              }`}
            />
          ))}
        </div>

        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="p-2 rounded-lg hover:bg-bg-hover text-text-tertiary hover:text-text-primary transition-colors disabled:opacity-20"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <p className="text-center text-[10px] font-mono text-text-tertiary/30 pb-2">
        ← → to navigate · esc to exit
      </p>
    </motion.div>
  );
}
