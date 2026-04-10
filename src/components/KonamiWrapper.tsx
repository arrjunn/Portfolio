"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useKonamiCode } from "@/hooks/useKonamiCode";
import { siteConfig, projects, achievements, skills } from "@/lib/data";

const COMMANDS: Record<string, string[]> = {
  help: [
    "Available commands:",
    "  whoami       — about me",
    "  projects     — list all projects",
    "  skills       — my skill set",
    "  achievements — hackathon wins & awards",
    "  contact      — how to reach me",
    "  clear        — clear terminal",
    "  exit         — close terminal",
  ],
  whoami: [
    `${siteConfig.name}`,
    `${siteConfig.title}`,
    "",
    siteConfig.microIntro,
    "",
    `Location: ${siteConfig.location}`,
    `Status: ${siteConfig.status}`,
  ],
  projects: projects.map((p) => `  [${p.year}] ${p.title}`),
  skills: [
    "PM Skills:",
    ...skills.skills.map((s) => `  - ${s}`),
    "",
    "Tools:",
    ...skills.tools.map((t) => `  - ${t}`),
  ],
  achievements: achievements.map((a) => `  - ${a}`),
  contact: [
    `Email:    ${siteConfig.email}`,
    `GitHub:   ${siteConfig.socials.github}`,
    `LinkedIn: ${siteConfig.socials.linkedin}`,
    `Twitter:  ${siteConfig.socials.twitter}`,
  ],
};

export default function KonamiWrapper() {
  const triggered = useKonamiCode();
  const [open, setOpen] = useState(false);
  const [lines, setLines] = useState<{ type: "input" | "output"; text: string }[]>([]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const prevTriggered = useRef(false);
  useEffect(() => {
    if (triggered && !prevTriggered.current && !open) {
      prevTriggered.current = true;
      const id = requestAnimationFrame(() => {
        setOpen(true);
        setLines([
          { type: "output", text: "==================================" },
          { type: "output", text: `  ${siteConfig.name} Terminal v1.0` },
          { type: "output", text: "==================================" },
          { type: "output", text: "" },
          { type: "output", text: 'Type "help" for available commands.' },
          { type: "output", text: "" },
        ]);
      });
      return () => cancelAnimationFrame(id);
    }
    if (!triggered) prevTriggered.current = false;
  }, [triggered, open]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    const newLines = [...lines, { type: "input" as const, text: `> ${input}` }];

    if (cmd === "exit" || cmd === "quit") {
      setOpen(false);
      return;
    }

    if (cmd === "clear") {
      setLines([]);
      setInput("");
      return;
    }

    if (cmd === "" ) {
      setLines(newLines);
      setInput("");
      return;
    }

    const output = COMMANDS[cmd];
    if (output) {
      newLines.push(...output.map((text) => ({ type: "output" as const, text })));
      newLines.push({ type: "output", text: "" });
    } else {
      newLines.push({ type: "output", text: `command not found: ${cmd}` });
      newLines.push({ type: "output", text: 'Type "help" for available commands.' });
      newLines.push({ type: "output", text: "" });
    }

    setLines(newLines);
    setInput("");
  }

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm"
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="w-[90vw] max-w-[700px] h-[70vh] max-h-[500px] rounded-xl overflow-hidden border border-[#333] shadow-2xl flex flex-col"
          style={{ background: "#0C0C0C" }}
        >
          {/* Title bar */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#222]" style={{ background: "#161616" }}>
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <button onClick={() => setOpen(false)} className="w-3 h-3 rounded-full bg-[#FF5F57] hover:brightness-110" aria-label="Close terminal" />
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
              <span className="text-[11px] font-mono text-[#666] ml-2">arjun@portfolio ~ terminal</span>
            </div>
            <span className="text-[10px] font-mono text-[#444]">esc to close</span>
          </div>

          {/* Terminal content */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 font-mono text-sm leading-relaxed"
            onClick={() => inputRef.current?.focus()}
          >
            {lines.map((line, i) => (
              <div
                key={i}
                className={line.type === "input" ? "text-[#E5E5E5]" : "text-[#888]"}
              >
                {line.text || "\u00A0"}
              </div>
            ))}

            {/* Input line */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <span className="text-[#E5E5E5]">{">"}</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent text-[#E5E5E5] outline-none font-mono text-sm caret-[#E5E5E5]"
                spellCheck={false}
                autoComplete="off"
              />
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
