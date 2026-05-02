"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects, type ProjectCategory } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";

type Filter = "all" | ProjectCategory;

const filterOptions: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "build", label: "AI & Code" },
  { id: "strategy", label: "Strategy & PM" },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group h-full flex flex-col rounded-2xl overflow-hidden bg-bg-secondary border border-border-subtle hover:border-border-hover hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5 transition-all duration-200"
      >
        {/* Thumbnail */}
        <div className="aspect-video bg-bg-tertiary relative overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary/90 via-bg-secondary/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-5 md:p-6 flex-1 flex flex-col">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent-primary transition-colors duration-200">
              {project.title}
            </h3>
            <ArrowRight
              size={16}
              className="text-text-tertiary group-hover:text-accent-primary group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 mt-1"
            />
          </div>
          <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>
          <div className="mt-auto">
          {"competition" in project && project.competition && (
            <p className="text-[10px] font-mono text-accent-primary mb-3">
              {project.competition}
            </p>
          )}
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-bg-tertiary text-text-tertiary border border-border-subtle"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3">
              {"documentUrl" in project && project.documentUrl && (
                <a
                  href={project.documentUrl as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-[10px] font-mono text-text-tertiary hover:text-text-primary underline underline-offset-2 transition-colors"
                >
                  {(project.documentUrl as string)?.includes("vercel.app") ? "Live Link" : "View Doc"}
                </a>
              )}
              <span className="text-xs text-text-tertiary font-mono">
                {project.year}
              </span>
            </div>
          </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Projects({ limit, showAll }: { limit?: number; showAll?: boolean }) {
  const [filter, setFilter] = useState<Filter>("all");
  const base = showAll ? projects : projects.filter((p) => p.featured);
  const filtered =
    showAll && filter !== "all" ? base.filter((p) => p.category === filter) : base;
  const displayed = limit ? filtered.slice(0, limit) : filtered;

  const counts: Record<Filter, number> = {
    all: base.length,
    build: base.filter((p) => p.category === "build").length,
    strategy: base.filter((p) => p.category === "strategy").length,
  };

  return (
    <SectionWrapper
      eyebrow="Work"
      title="Things I've Built"
      description="A selection of projects where I applied product thinking, AI, and code to solve real problems."
    >
      {showAll && (
        <div
          role="tablist"
          aria-label="Filter projects by category"
          className="flex flex-wrap gap-2 mb-8 md:mb-10"
        >
          {filterOptions.map((opt) => {
            const isActive = filter === opt.id;
            return (
              <button
                key={opt.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setFilter(opt.id)}
                className={`group inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                  isActive
                    ? "bg-text-primary text-bg-primary border-text-primary"
                    : "bg-bg-secondary text-text-secondary border-border-subtle hover:border-border-hover hover:text-text-primary"
                }`}
              >
                {opt.label}
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                    isActive
                      ? "bg-bg-primary/20 text-bg-primary"
                      : "bg-bg-tertiary text-text-tertiary"
                  }`}
                >
                  {counts[opt.id]}
                </span>
              </button>
            );
          })}
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {displayed.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  );
}
