"use client";

import { Calendar, ArrowUpRight, Copy } from "lucide-react";
import { toast } from "sonner";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./icons";
import { siteConfig } from "@/lib/data";

const footerLinks = [
  { icon: GithubIcon, href: siteConfig.socials.github, label: "GitHub", hoverColor: "hover:text-[#f0f0f0]" },
  { icon: LinkedinIcon, href: siteConfig.socials.linkedin, label: "LinkedIn", hoverColor: "hover:text-[#0A66C2]" },
  { icon: TwitterIcon, href: siteConfig.socials.twitter, label: "Twitter", hoverColor: "hover:text-[#f0f0f0]" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-secondary/50">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-16 py-16 md:py-20">
        {/* CTA */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-text-secondary max-w-md mx-auto mb-6">
            I&apos;m always open to interesting conversations, collaboration
            opportunities, and new challenges.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
          <a
            href={siteConfig.calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-accent-primary text-bg-primary font-semibold text-sm hover:scale-[1.02] hover:shadow-lg hover:shadow-accent-primary/20 transition-all duration-200"
          >
            <Calendar size={16} />
            Book a 30-Min Chat
            <ArrowUpRight size={14} />
          </a>
          <button
            onClick={() => {
              navigator.clipboard.writeText(siteConfig.email);
              toast.success("Email copied to clipboard!");
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border-default text-sm font-medium text-text-primary hover:border-border-hover hover:bg-bg-hover transition-all duration-200"
          >
            <Copy size={14} />
            Copy Email
          </button>
          </div>
        </div>

        {/* Links + Info */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border-subtle">
          <p className="text-sm text-text-tertiary">
            Designed & built by Arjun Varshney
          </p>

          <div className="flex items-center gap-4">
            {footerLinks.map(({ icon: Icon, href, label, hoverColor }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`p-2 rounded-lg text-text-tertiary ${hoverColor} hover:bg-bg-hover hover:scale-110 transition-all duration-200`}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          <p className="text-xs text-text-tertiary font-mono">
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
