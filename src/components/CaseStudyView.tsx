"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { CaseStudy } from "@/lib/data";
import SectionRenderer from "./case-study/SectionRenderer";
import StickyNav from "./case-study/StickyNav";

export default function CaseStudyView({ study }: { study: CaseStudy }) {
  const [activeSection, setActiveSection] = useState(study.sections[0]?.id || "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -50% 0px" }
    );

    study.sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [study.sections]);

  return (
    <article className="pt-24 pb-16">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-16">
        {/* Back link */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm text-text-tertiary hover:text-text-primary transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          Back to work
        </Link>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="eyebrow mb-3">Case Study</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-text-primary mb-3">
            {study.heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-text-secondary font-serif-accent italic mb-6">
            {study.heroSubtitle}
          </p>

          {/* Meta */}
          <div className="flex flex-wrap gap-6 text-sm text-text-tertiary font-mono mb-8">
            <span>Role: {study.role}</span>
            <span>Timeline: {study.timeline}</span>
            <span>Team: {study.team}</span>
          </div>

          {/* TLDR */}
          <div className="p-5 rounded-xl bg-bg-secondary border border-border-subtle max-w-2xl">
            <p className="text-xs font-mono text-accent-primary uppercase tracking-wider mb-2">TL;DR</p>
            <p className="text-sm text-text-secondary leading-relaxed">{study.tldr}</p>
          </div>
        </motion.div>

        {/* Content with sticky nav */}
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12">
          <StickyNav
            sections={study.sections.map((s) => ({ id: s.id, title: s.title }))}
            activeSection={activeSection}
          />
          <div>
            {study.sections.map((section) => (
              <SectionRenderer key={section.id} section={section} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
