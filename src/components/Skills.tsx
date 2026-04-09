"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";

function SkillCard({
  title,
  children,
  delay,
}: {
  title: string;
  children: React.ReactNode;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="p-5 md:p-6 rounded-2xl bg-bg-secondary border border-border-subtle"
    >
      <h3 className="text-xs font-mono font-medium text-accent-primary uppercase tracking-wider mb-4">
        {title}
      </h3>
      {children}
    </motion.div>
  );
}

export default function Skills() {
  return (
    <SectionWrapper
      eyebrow="Technical Stack"
      title="Skills & Tools"
      description="The skills, tools, and languages I use to bring ideas to life."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Skills */}
        <SkillCard title="Skills" delay={0}>
          <ul className="space-y-2.5">
            {skills.skills.map((skill, i) => (
              <motion.li
                key={skill}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="text-sm text-text-secondary flex items-center gap-2"
              >
                <span className="w-1 h-1 rounded-full bg-text-tertiary flex-shrink-0" />
                {skill}
              </motion.li>
            ))}
          </ul>
        </SkillCard>

        {/* Tools */}
        <SkillCard title="Tools" delay={0.1}>
          <ul className="space-y-2.5">
            {skills.tools.map((tool, i) => (
              <motion.li
                key={tool}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="text-sm text-text-secondary flex items-center gap-2"
              >
                <span className="w-1 h-1 rounded-full bg-text-tertiary flex-shrink-0" />
                {tool}
              </motion.li>
            ))}
          </ul>
        </SkillCard>

        {/* Languages */}
        <SkillCard title="Languages" delay={0.2}>
          <div className="space-y-4">
            {skills.languages.map((lang, i) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-text-secondary">{lang.name}</span>
                  <span className="text-text-tertiary font-mono text-xs">
                    {lang.level}%
                  </span>
                </div>
                <div
                  className="h-1.5 bg-bg-tertiary rounded-full overflow-hidden"
                  role="progressbar"
                  aria-valuenow={lang.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${lang.name} proficiency: ${lang.level}%`}
                >
                  <motion.div
                    className="h-full rounded-full bg-accent-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.3 + i * 0.1,
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </SkillCard>
      </div>
    </SectionWrapper>
  );
}
