"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import TextScramble from "./TextScramble";
import MagneticLink from "./MagneticLink";
import { useCurrentTime } from "@/hooks/useCurrentTime";
import { siteConfig } from "@/lib/data";

export default function Hero() {
  const time = useCurrentTime();

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero introduction"
    >
      {/* Content — left-aligned, editorial */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 py-32">
        {/* Contextual status bar */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-xs font-mono text-text-tertiary mb-8 tracking-wide"
        >
          {siteConfig.location} · {time || "—"} · Building products
        </motion.p>

        {/* Name — text scramble */}
        <h1 className="text-[clamp(3rem,9vw,8rem)] font-display font-bold tracking-tighter leading-[0.9] mb-4 text-gradient">
          <TextScramble
            text={siteConfig.name}
            delay={300}
            duration={800}
          />
        </h1>

        {/* Role — word-by-word stagger */}
        <div className="flex flex-wrap gap-x-2 text-xl md:text-2xl font-serif-accent italic text-text-secondary mb-6">
          {"Product Manager & Builder".split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 1.1 + i * 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg text-text-tertiary max-w-[480px] leading-relaxed mb-10"
        >
          {siteConfig.tagline}
        </motion.p>

        {/* CTA — magnetic link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <MagneticLink
            href="/work"
            className="inline-flex items-center gap-2 text-base font-medium text-text-primary hover:text-accent-primary link-animated transition-colors duration-200"
          >
            See what I&apos;ve shipped
            <ArrowRight size={16} />
          </MagneticLink>
        </motion.div>

        {/* Status badge — subtle, bottom-left */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.5 }}
          className="mt-16 inline-flex items-center gap-2 text-xs font-mono text-text-tertiary"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent-green" />
          </span>
          {siteConfig.status}
        </motion.div>
      </div>
    </section>
  );
}
