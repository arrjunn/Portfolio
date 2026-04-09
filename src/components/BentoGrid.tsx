"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import NowCard from "./bento/NowCard";
import ThoughtCard from "./bento/ThoughtCard";
import AchievementCard from "./bento/AchievementCard";
import WorkCard from "./bento/WorkCard";
import AboutCard from "./bento/AboutCard";
import { projects } from "@/lib/data";

const cardVariant = (direction: "left" | "right" | "up", index: number) => ({
  initial: {
    opacity: 0,
    x: direction === "left" ? -20 : direction === "right" ? 20 : 0,
    y: direction === "up" ? 20 : 0,
  },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: index * 0.07,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

export default function BentoGrid() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const cards = [
    { component: <NowCard />, span: "md:col-span-2", dir: "left" as const },
    { component: <AchievementCard />, span: "", dir: "up" as const },
    { component: <ThoughtCard />, span: "", dir: "right" as const },
    { component: <WorkCard project={projects[0]} />, span: "md:col-span-2", dir: "left" as const },
    { component: <WorkCard project={projects[3]} />, span: "md:col-span-2", dir: "right" as const },
    { component: <AboutCard />, span: "md:col-span-4", dir: "up" as const },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {cards.map((card, i) => {
            const v = cardVariant(card.dir, i);
            return (
              <motion.div
                key={i}
                initial={v.initial}
                animate={isInView ? v.animate : v.initial}
                className={card.span}
              >
                {card.component}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
