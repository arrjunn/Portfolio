"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useTheme } from "./ThemeProvider";
import { useMetaKeyLabel } from "@/hooks/usePlatform";
import { siteConfig } from "@/lib/data";

interface Action {
  id: string;
  label: string;
  shortcut?: string;
  action: () => void;
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { toggleTheme } = useTheme();
  const { symbol: metaSymbol } = useMetaKeyLabel();

  const actions: Action[] = [
    { id: "home", label: "Go to Home", action: () => router.push("/") },
    { id: "work", label: "Go to Shipped (Work)", action: () => router.push("/work") },
    { id: "mind", label: "Go to Thinking (Mind)", action: () => router.push("/mind") },
    { id: "lab", label: "Go to Tinkering (Lab)", action: () => router.push("/lab") },
    { id: "about", label: "Go to Context (About)", action: () => router.push("/about") },
    { id: "resume", label: "Go to Resume", action: () => router.push("/resume") },
    { id: "theme", label: "Toggle theme", shortcut: "T", action: toggleTheme },
    {
      id: "email",
      label: "Copy email to clipboard",
      action: () => navigator.clipboard.writeText(siteConfig.email),
    },
    {
      id: "github",
      label: "Open GitHub",
      action: () => window.open(siteConfig.socials.github, "_blank"),
    },
    {
      id: "linkedin",
      label: "Open LinkedIn",
      action: () => window.open(siteConfig.socials.linkedin, "_blank"),
    },
  ];

  const filtered = actions.filter((a) =>
    a.label.toLowerCase().includes(query.toLowerCase())
  );

  const execute = useCallback(
    (action: Action) => {
      action.action();
      setOpen(false);
      setQuery("");
      setSelected(0);
    },
    []
  );

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
        setQuery("");
        setSelected(0);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  // Reset selection when query changes — handled in onChange below

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelected((s) => Math.min(s + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelected((s) => Math.max(s - 1, 0));
    } else if (e.key === "Enter" && filtered[selected]) {
      execute(filtered[selected]);
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[100] bg-bg-primary/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.15 }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 z-[101] w-[90vw] max-w-[520px] rounded-xl bg-bg-secondary border border-border-default shadow-2xl overflow-hidden"
          >
            {/* Input */}
            <div className="flex items-center gap-3 px-4 border-b border-border-subtle">
              <span className="text-text-tertiary text-sm">{metaSymbol}</span>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => { setQuery(e.target.value); setSelected(0); }}
                onKeyDown={handleKeyDown}
                placeholder="Type a command..."
                className="flex-1 py-3.5 bg-transparent text-sm text-text-primary placeholder:text-text-tertiary outline-none"
              />
              <kbd className="text-[10px] font-mono text-text-tertiary px-1.5 py-0.5 rounded border border-border-subtle">
                esc
              </kbd>
            </div>

            {/* Actions */}
            <div className="max-h-[300px] overflow-y-auto py-2">
              {filtered.length === 0 && (
                <p className="px-4 py-6 text-sm text-text-tertiary text-center">
                  No results found.
                </p>
              )}
              {filtered.map((action, i) => (
                <button
                  key={action.id}
                  onClick={() => execute(action)}
                  onMouseEnter={() => setSelected(i)}
                  className={`w-full text-left px-4 py-2.5 text-sm flex items-center justify-between transition-colors ${
                    i === selected
                      ? "bg-bg-hover text-text-primary"
                      : "text-text-secondary"
                  }`}
                >
                  {action.label}
                  {action.shortcut && (
                    <kbd className="text-[10px] font-mono text-text-tertiary px-1.5 py-0.5 rounded border border-border-subtle">
                      {action.shortcut}
                    </kbd>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
