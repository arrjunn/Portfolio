"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { funFacts } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";

export default function AboutMe() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper
      eyebrow="About"
      title="The Person Behind the Pixels"
      description="A little more about who I am, what drives me, and why I do what I do."
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-8 md:gap-12"
      >
        {/* Photo */}
        <div className="aspect-[4/5] rounded-2xl bg-bg-secondary border border-border-subtle overflow-hidden">
          <img
            src="/arjun.jpg"
            alt="Arjun Varshney"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center">
          <div className="prose-width space-y-4 text-[15px] text-text-secondary leading-relaxed">
            <p>
              I&apos;m a pre-final year CSE undergrad at IIIT Nagpur who fell in love
              with the &ldquo;why&rdquo; behind products. My journey started with
              graphic design at our university&apos;s design club, but the moment I
              sat in a room with 40 restaurant owners during my RapidRasoi internship
              and heard their real pain points — that&apos;s when product thinking clicked.
            </p>
            <p>
              Since then, I&apos;ve gone from writing my first PRD to owning product
              roadmaps at a stealth startup, building AI-powered SaaS tools deployed
              across 48 instances, and winning hackathons at IIT Kharagpur and IIT
              Roorkee. I was selected as a Reliance Foundation Scholar from 60,000+
              students and represented India at Harvard&apos;s HPAIR conference in Boston.
            </p>
            <p>
              Outside of product work, you&apos;ll find me leading DevTalks at
              GDG IIIT Nagpur, picking up Japanese, dissecting retention funnels
              of apps I use daily, and hunting for the perfect cup of chai.
            </p>
            <p className="text-text-primary font-medium">
              What&apos;s next? A PM internship where I can bring my blend of user
              research, AI building, and strategic thinking to a team that ships
              products people genuinely need.
            </p>
          </div>

          {/* Fun Facts */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8">
            {funFacts.map((fact, i) => (
              <motion.div
                key={fact.text}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
                className="p-3 rounded-xl bg-bg-secondary border border-border-subtle hover:border-border-hover hover:-translate-y-0.5 transition-all duration-200"
              >
                <span className="text-xs text-text-secondary leading-snug">
                  {fact.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
