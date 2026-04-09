"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, BookOpen } from "lucide-react";
import { bookshelf } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";

export default function Bookshelf() {
  const [hoveredBook, setHoveredBook] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper
      eyebrow="Bookshelf"
      title="What Shapes My Thinking"
      description="Books that have changed how I see products, people, and the world."
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 md:gap-6"
      >
        {bookshelf.map((book, i) => (
          <motion.div
            key={book.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            onMouseEnter={() => setHoveredBook(book.title)}
            onMouseLeave={() => setHoveredBook(null)}
            onFocus={() => setHoveredBook(book.title)}
            onBlur={() => setHoveredBook(null)}
            tabIndex={0}
            role="article"
            aria-label={`${book.title} by ${book.author}`}
            className="group relative"
          >
            {/* Book Cover */}
            <div className="aspect-[2/3] rounded-xl bg-bg-secondary border border-border-subtle overflow-hidden relative hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer">
              {/* Placeholder cover */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-gradient-to-b from-bg-tertiary to-bg-secondary">
                <BookOpen
                  size={24}
                  className="text-text-tertiary mb-3 opacity-40"
                />
                <p className="text-xs font-semibold text-text-secondary leading-tight">
                  {book.title}
                </p>
                <p className="text-[10px] text-text-tertiary mt-1">
                  {book.author}
                </p>
              </div>

              {/* Currently Reading Badge */}
              {book.currentlyReading && (
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-accent-green/20 text-accent-green text-[9px] font-mono font-medium">
                  Reading
                </div>
              )}

              {/* Hover Overlay */}
              <div
                className={`absolute inset-0 bg-bg-primary/90 backdrop-blur-sm p-4 flex flex-col justify-end transition-opacity duration-200 ${
                  hoveredBook === book.title ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="text-xs font-semibold text-text-primary mb-1">
                  {book.title}
                </p>
                <p className="text-[10px] text-text-tertiary mb-2">
                  {book.author}
                </p>
                <p className="text-[11px] text-text-secondary leading-relaxed mb-2">
                  {book.review}
                </p>
                <div className="flex gap-0.5" aria-label={`${book.rating} out of 5 stars`} role="img">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      size={10}
                      className={
                        j < book.rating
                          ? "text-accent-primary fill-accent-primary"
                          : "text-text-tertiary"
                      }
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Category tag */}
            <p className="text-[10px] font-mono text-text-tertiary mt-2 text-center">
              {book.category}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
