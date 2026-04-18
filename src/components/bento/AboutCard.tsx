"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from "../icons";
import { siteConfig } from "@/lib/data";

const socialLinks = [
  { icon: GithubIcon, href: siteConfig.socials.github, label: "GitHub", hoverColor: "hover:text-[#f0f0f0]" },
  { icon: LinkedinIcon, href: siteConfig.socials.linkedin, label: "LinkedIn", hoverColor: "hover:text-[#0A66C2]" },
  { icon: TwitterIcon, href: siteConfig.socials.twitter, label: "Twitter", hoverColor: "hover:text-[#f0f0f0]" },
  { icon: InstagramIcon, href: siteConfig.socials.instagram, label: "Instagram", hoverColor: "hover:text-[#E4405F]" },
];

const exploreLinks = [
  { label: "See my work", href: "/work", description: "Projects & impact" },
  { label: "How I think", href: "/mind", description: "Principles & decisions" },
  { label: "My experiments", href: "/lab", description: "Ideas in progress" },
  { label: "My story", href: "/about", description: "The human side" },
];

export default function AboutCard() {
  return (
    <div className="h-full p-5 md:p-6 rounded-2xl bg-bg-secondary border border-border-subtle hover:border-accent-primary/40 transition-all duration-300">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left — Intro */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-border-subtle flex-shrink-0">
              <Image
                src="/arjun.jpg"
                alt="Arjun Varshney"
                width={48}
                height={48}
                className="w-full h-full object-cover"
                style={{ objectPosition: "50% 25%" }}
              />
            </div>
            <div>
              <h3 className="text-base font-semibold text-text-primary">{siteConfig.name}</h3>
              <p className="text-xs text-text-secondary">{siteConfig.title}</p>
            </div>
          </div>
          <p className="text-xs text-text-tertiary leading-relaxed mb-4 max-w-sm">
            {siteConfig.microIntro}
          </p>
          <div className="flex gap-2">
            {socialLinks.map(({ icon: Icon, href, label, hoverColor }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`p-2 rounded-lg bg-bg-tertiary/50 border border-border-subtle text-text-tertiary ${hoverColor} hover:border-border-hover hover:scale-110 transition-all duration-200`}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Right — Explore links */}
        <div className="flex-1 grid grid-cols-2 gap-2">
          {exploreLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group p-3 rounded-xl bg-bg-tertiary/30 border border-border-subtle hover:border-accent-primary/40 hover:bg-bg-tertiary/60 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-1">
                <p className="text-xs font-medium text-text-primary group-hover:text-accent-primary transition-colors">
                  {link.label}
                </p>
                <ArrowRight size={10} className="text-text-tertiary group-hover:text-accent-primary group-hover:translate-x-0.5 transition-all" />
              </div>
              <p className="text-[10px] text-text-tertiary">{link.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
