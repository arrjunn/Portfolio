"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from "./icons";
import { siteConfig } from "@/lib/data";
import SpotifyNowPlaying from "./SpotifyNowPlaying";

const socialLinks = [
  { icon: GithubIcon, href: siteConfig.socials.github, label: "GitHub", hoverColor: "hover:text-[#f0f0f0]" },
  { icon: LinkedinIcon, href: siteConfig.socials.linkedin, label: "LinkedIn", hoverColor: "hover:text-[#0A66C2]" },
  { icon: TwitterIcon, href: siteConfig.socials.twitter, label: "Twitter", hoverColor: "hover:text-[#f0f0f0]" },
  { icon: InstagramIcon, href: siteConfig.socials.instagram, label: "Instagram", hoverColor: "hover:text-[#E4405F]" },
];

export default function WhoAmI() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 p-6 md:p-8 rounded-2xl bg-bg-secondary border border-border-subtle"
        >
          {/* Left — Photo & Quick Links */}
          <div className="flex flex-col items-center md:items-start gap-5">
            {/* Profile Photo Placeholder */}
            <div className="w-40 h-40 md:w-full md:h-auto md:aspect-square rounded-2xl bg-bg-tertiary border border-border-subtle overflow-hidden flex items-center justify-center text-6xl">
              <span className="text-text-tertiary select-none">👤</span>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex gap-3 w-full">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-bg-tertiary border border-border-subtle text-sm text-text-secondary hover:text-text-primary hover:border-border-hover transition-all duration-200"
              >
                <Mail size={14} />
                Email
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-bg-tertiary border border-border-subtle text-sm text-text-secondary hover:text-text-primary hover:border-border-hover transition-all duration-200"
              >
                <LinkedinIcon size={14} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right — Info */}
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-primary">
                {siteConfig.name}
              </h2>
              <p className="text-text-secondary font-medium mt-1">
                {siteConfig.title}
              </p>
            </div>

            {/* Meta */}
            <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-text-tertiary" />
                {siteConfig.location}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green" />
                </span>
                {siteConfig.status}
              </span>
            </div>

            {/* Micro Intro */}
            <p className="text-text-secondary leading-relaxed text-[15px]">
              {siteConfig.microIntro}
            </p>

            {/* Spotify Now Playing */}
            <SpotifyNowPlaying />

            {/* Social Links */}
            <div className="flex gap-3 mt-1">
              {socialLinks.map(({ icon: Icon, href, label, hoverColor }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`p-2.5 rounded-lg bg-bg-tertiary/50 border border-border-subtle text-text-tertiary ${hoverColor} hover:border-border-hover hover:scale-110 transition-all duration-200`}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
