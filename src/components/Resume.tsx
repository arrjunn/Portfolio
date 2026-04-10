"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Download, ChevronRight } from "lucide-react";
import {
  siteConfig,
  workExperience,
  resumeSummary,
  education,
  skills,
  achievements,
  resumeAsSpec,
} from "@/lib/data";

function AnnotationBubble({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      className="mt-2 ml-4 p-3 rounded-lg bg-accent-purple/10 border border-accent-purple/20 text-sm text-text-secondary leading-relaxed"
    >
      <span className="text-text-tertiary font-mono">// </span>
      {text}
    </motion.div>
  );
}

function BulletItem({
  text,
  annotation,
}: {
  text: string;
  annotation: string;
}) {
  const [showAnnotation, setShowAnnotation] = useState(false);

  return (
    <li className="flex items-start gap-2 group">
      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-text-tertiary flex-shrink-0" />
      <div className="flex-1">
        <div className="flex items-start gap-2">
          <span className="text-sm text-text-secondary leading-relaxed">
            {text}
          </span>
          <button
            onClick={() => setShowAnnotation(!showAnnotation)}
            className="flex-shrink-0 mt-0.5 p-1 rounded-md hover:bg-accent-purple/10 text-text-tertiary hover:text-accent-purple transition-colors duration-200"
            aria-label="Show annotation"
          >
            <ChevronRight size={14} />
          </button>
        </div>
        {showAnnotation && <AnnotationBubble text={annotation} />}
      </div>
    </li>
  );
}

export default function Resume() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [specMode, setSpecMode] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-3xl mx-auto"
    >
      {/* View Toggle */}
      <div className="flex items-center gap-2 mb-6">
        <button
          onClick={() => setSpecMode(false)}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${!specMode ? "bg-accent-primary text-bg-primary" : "text-text-tertiary hover:text-text-primary"}`}
        >
          Classic View
        </button>
        <button
          onClick={() => setSpecMode(true)}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${specMode ? "bg-accent-primary text-bg-primary" : "text-text-tertiary hover:text-text-primary"}`}
        >
          Product Spec View
        </button>
      </div>

      {/* User Stories (spec mode only) */}
      {specMode && (
        <div className="mb-8">
          <h2 className="text-xs font-mono font-medium text-accent-primary uppercase tracking-wider mb-4">
            User Stories
          </h2>
          <div className="space-y-3">
            {resumeAsSpec.userStories.map((story, i) => (
              <div key={i} className="p-4 rounded-xl bg-bg-secondary border border-border-subtle">
                <p className="text-sm text-text-secondary leading-relaxed">
                  As a <span className="text-accent-primary font-medium">{story.persona}</span>, I need{" "}
                  <span className="text-text-primary font-medium">{story.need}</span>, so that{" "}
                  <span className="text-text-secondary">{story.benefit}</span>.
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex items-start justify-between mb-8 pb-6 border-b border-border-subtle">
        <div>
          <h1 className="text-3xl font-display font-bold tracking-tight text-text-primary mb-1">
            {specMode ? resumeAsSpec.productName : siteConfig.name}
          </h1>
          <p className="text-text-secondary font-medium">{siteConfig.title}</p>
          <p className="text-sm text-text-tertiary mt-1">
            {siteConfig.location} · {siteConfig.email}
          </p>
        </div>
        <a href="/ArjunV_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-bg-secondary border border-border-subtle text-sm text-text-secondary hover:text-text-primary hover:border-border-hover transition-all duration-200">
          <Download size={14} />
          PDF
        </a>
      </div>

      {/* Annotation hint */}
      <div className="mb-10 p-4 rounded-xl bg-bg-secondary border border-border-subtle text-sm text-text-secondary">
        Click the arrow icons next to each bullet for my personal commentary — the thinking behind the outcomes.
      </div>

      {/* Summary */}
      <div className="mb-10 pb-8 border-b border-border-subtle">
        <h2 className="text-xs font-mono font-medium text-accent-primary uppercase tracking-wider mb-4">
          {specMode ? "Product Vision" : "Summary"}
        </h2>
        <p className="text-[15px] text-text-secondary leading-relaxed">
          {resumeSummary}
        </p>
      </div>

      {/* Experience */}
      <div className="mb-10 pb-8 border-b border-border-subtle">
        <h2 className="text-xs font-mono font-medium text-accent-primary uppercase tracking-wider mb-6">
          {specMode ? "Release Notes" : "Experience"}
        </h2>
        <div className="space-y-6">
          {workExperience.map((job, i) => (
            <div key={i} className="pb-6 border-b border-border-subtle last:border-0">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-base font-semibold text-text-primary">
                    {job.role}
                  </h3>
                  <p className="text-sm text-text-secondary">{job.company}</p>
                </div>
                <span className="text-xs font-mono text-text-tertiary">
                  {job.period}
                </span>
              </div>
              <ul className="space-y-3">
                {job.bullets.map((bullet, j) => (
                  <BulletItem
                    key={j}
                    text={bullet.text}
                    annotation={bullet.annotation}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mb-8">
        <h2 className="text-xs font-mono font-medium text-accent-primary uppercase tracking-wider mb-4">
          Education
        </h2>
        {education.map((edu, i) => (
          <div key={i} className="mb-3">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-base font-semibold text-text-primary">
                {edu.institution}
              </h3>
              <span className="text-xs font-mono text-text-tertiary">
                {edu.year}
              </span>
            </div>
            <p className="text-sm text-text-secondary">{edu.degree}</p>
            <p className="text-xs text-text-tertiary mt-1">{edu.details}</p>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="mb-10 pb-8 border-b border-border-subtle">
        <h2 className="text-xs font-mono font-medium text-accent-primary uppercase tracking-wider mb-4">
          Skills & Tools
        </h2>
        <div className="flex flex-wrap gap-2">
          {[...skills.skills, ...skills.tools].map((s) => (
            <span
              key={s}
              className="px-2.5 py-1 text-xs font-mono rounded-md bg-bg-secondary text-text-secondary border border-border-subtle"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div className="mb-10 pb-8 border-b border-border-subtle">
        <h2 className="text-xs font-mono font-medium text-accent-primary uppercase tracking-wider mb-4">
          Languages
        </h2>
        <div className="flex flex-wrap gap-4">
          {skills.languages.map((lang) => (
            <div key={lang.name} className="text-sm text-text-secondary">
              <span className="font-medium text-text-primary">
                {lang.name}
              </span>{" "}
              <span className="text-text-tertiary text-xs">({lang.level}%)</span>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div>
        <h2 className="text-xs font-mono font-medium text-accent-primary uppercase tracking-wider mb-4">
          Achievements
        </h2>
        <div className="space-y-2.5">
          {achievements.map((a) => (
            <div
              key={a}
              className="flex items-start gap-3 p-3 rounded-lg bg-bg-secondary/50 border border-border-subtle text-sm text-text-secondary"
            >
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent-primary flex-shrink-0" />
              {a}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
