"use client";

import { motion } from "framer-motion";

interface StickyNavProps {
  sections: { id: string; title: string }[];
  activeSection: string;
}

export default function StickyNav({ sections, activeSection }: StickyNavProps) {
  return (
    <nav className="hidden lg:flex flex-col gap-3 sticky top-24">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={`flex items-center gap-3 text-sm transition-all duration-200 ${
            activeSection === section.id
              ? "text-accent-primary font-medium"
              : "text-text-tertiary hover:text-text-secondary"
          }`}
        >
          <motion.div
            className="w-2 h-2 rounded-full flex-shrink-0"
            animate={{
              backgroundColor: activeSection === section.id ? "var(--accent-primary)" : "var(--border-default)",
              scale: activeSection === section.id ? 1.2 : 1,
            }}
            transition={{ duration: 0.2 }}
          />
          {section.title}
        </a>
      ))}
    </nav>
  );
}
