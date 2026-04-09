"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";
import { education, certifications } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper eyebrow="Education" title="Where I Learned">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-6 max-w-3xl"
      >
        {/* Degrees */}
        {education.map((edu, i) => (
          <div
            key={i}
            className="p-5 md:p-6 rounded-2xl bg-bg-secondary border border-border-subtle flex gap-4"
          >
            <div className="p-3 rounded-xl bg-bg-tertiary border border-border-subtle h-fit">
              <GraduationCap size={20} className="text-accent-primary" />
            </div>
            <div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-base font-semibold text-text-primary">
                  {edu.institution}
                </h3>
                <span className="text-xs font-mono text-text-tertiary">
                  {edu.year}
                </span>
              </div>
              <p className="text-sm text-text-secondary mt-1">{edu.degree}</p>
              <p className="text-sm text-text-tertiary mt-1">{edu.details}</p>
            </div>
          </div>
        ))}

        {/* Certifications */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
              className="p-4 rounded-xl bg-bg-secondary border border-border-subtle flex items-start gap-3"
            >
              <Award
                size={14}
                className="text-accent-primary flex-shrink-0 mt-0.5"
              />
              <p className="text-xs text-text-secondary leading-relaxed">
                {cert}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
