import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, caseStudies } from "@/lib/data";
import CaseStudyView from "@/components/CaseStudyView";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const project = projects.find((p) => p.slug === slug);
    return {
      title: project ? `${project.title} — Arjun Varshney` : "Project — Arjun Varshney",
      description: project?.description || "",
    };
  });
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const caseStudy = caseStudies.find((cs) => cs.slug === slug);

  // Full case study view
  if (caseStudy) {
    return (
      <main>
        <CaseStudyView study={caseStudy} />
      </main>
    );
  }

  // Simple project detail fallback
  return (
    <main className="pt-20">
      <SectionWrapper>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm text-text-tertiary hover:text-text-primary transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          Back to work
        </Link>
        <p className="eyebrow mb-3">Project</p>
        <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-text-primary mb-4">
          {project.title}
        </h1>
        <p className="text-lg text-text-secondary leading-relaxed mb-6 prose-width">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 text-xs font-mono rounded-md bg-bg-tertiary text-text-tertiary border border-border-subtle">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-sm font-mono text-text-tertiary mb-6">{project.year}</p>
        {"documentUrl" in project && project.documentUrl && (
          <a
            href={project.documentUrl as string}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-bg-secondary border border-border-subtle text-sm font-medium text-text-primary hover:border-border-hover hover:bg-bg-hover transition-all duration-200"
          >
            {(project as { documentUrl?: string }).documentUrl?.includes("vercel.app") ? "View Live" : "View Document"}
            <ArrowUpRight size={14} />
          </a>
        )}
      </SectionWrapper>
    </main>
  );
}
