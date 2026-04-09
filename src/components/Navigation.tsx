"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "Shipped", href: "/work" },
  { label: "Thinking", href: "/mind" },
  { label: "Tinkering", href: "/lab" },
  { label: "Context", href: "/about" },
  { label: "Resume", href: "/resume" },
];

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(!isHome);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-bg-primary/95 border-b border-border-subtle"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-16 flex items-center justify-between h-14">
          <Link
            href="/"
            className="text-text-primary font-display font-bold text-base tracking-tight hover:text-accent-primary transition-colors duration-200"
          >
            AV
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm px-3 py-2 rounded-lg transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-accent-primary font-semibold"
                    : "text-text-tertiary hover:text-text-primary hover:bg-bg-hover"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <span className="w-px h-4 bg-border-subtle" />

            {/* Text theme toggle */}
            <button
              onClick={toggleTheme}
              className="text-xs font-mono text-text-tertiary hover:text-text-primary transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "Light" : "Dark"}
            </button>

            {/* Cmd+K hint */}
            <button
              onClick={() =>
                document.dispatchEvent(
                  new KeyboardEvent("keydown", { key: "k", metaKey: true })
                )
              }
              className="hidden lg:flex items-center gap-1 text-[10px] font-mono text-text-tertiary/50 hover:text-text-tertiary transition-colors duration-200"
              aria-label="Open command palette"
            >
              <kbd className="px-1.5 py-0.5 rounded border border-border-subtle bg-bg-secondary text-[10px]">
                ⌘K
              </kbd>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-bg-hover transition-colors text-text-secondary"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-bg-primary/98 md:hidden flex flex-col items-start justify-center px-10 gap-6"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-3xl font-display font-bold tracking-tight transition-colors ${
                    pathname === link.href
                      ? "text-accent-primary"
                      : "text-text-primary hover:text-accent-primary"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4"
            >
              <button
                onClick={toggleTheme}
                className="text-sm font-mono text-text-tertiary"
                aria-label="Toggle theme"
              >
                Switch to {theme === "dark" ? "light" : "dark"} mode
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
