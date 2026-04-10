"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";

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
        className="group block rounded-2xl overflow-hidden bg-bg-secondary border border-border-subtle hover:border-border-hover hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5 transition-all duration-200"
      >
        {/* Thumbnail */}
        <div className="aspect-video bg-bg-tertiary relative overflow-hidden">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary/90 via-bg-secondary/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-5 md:p-6">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent-primary transition-colors duration-200">
              {project.title}
            </h3>
            <ArrowRight
              size={16}
              className="text-text-tertiary group-hover:text-accent-primary group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 mt-1"
            />
          </div>
          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            {project.description}
          </p>
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
                  View Doc
                </a>
              )}
              <span className="text-xs text-text-tertiary font-mono">
                {project.year}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Projects({ limit, showAll }: { limit?: number; showAll?: boolean }) {
  const base = showAll ? projects : projects.filter((p) => p.featured);
  const displayed = limit ? base.slice(0, limit) : base;

  return (
    <SectionWrapper
      eyebrow="Work"
      title="Things I've Built"
      description="A selection of projects where I applied product thinking, AI, and code to solve real problems."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {displayed.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>

    </SectionWrapper>
  );
}
