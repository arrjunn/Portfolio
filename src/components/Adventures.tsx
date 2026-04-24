"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Photo {
  src: string;
  caption: string;
  rotate: number;
  left: string;
  top: string;
}

// Hand-scattered layout — spread across the canvas so no two polaroids
// start stacked. Photo width ~20vw (clamped 160–250px), height ~ that + caption.
const photos: Photo[] = [
  {
    src: "/adventures/photo1.jpg",
    caption: "sand smiley at nit surathkal beach — the campus's unofficial stress-relief algorithm",
    rotate: -7,
    left: "2%",
    top: "4%",
  },
  {
    src: "/adventures/photo2.jpg",
    caption: "the taj in agra, grayscale — some things just don't need color to land",
    rotate: 5,
    left: "28%",
    top: "2%",
  },
  {
    src: "/adventures/photo3.jpg",
    caption: "snow-capped peaks in kashmir that make every laptop screen feel very, very small",
    rotate: -4,
    left: "54%",
    top: "6%",
  },
  {
    src: "/adventures/photo4.jpg",
    caption: "shikara on dal lake — a floating flower market, the og farmers' market served on water",
    rotate: 8,
    left: "77%",
    top: "3%",
  },
  {
    src: "/adventures/photo5.jpg",
    caption: "iit roorkee staircase leading into either class or a quiet existential crisis, tbd",
    rotate: -5,
    left: "6%",
    top: "48%",
  },
  {
    src: "/adventures/photo6.jpg",
    caption: "mumbai traffic doing its thing — the city never really pauses for anyone",
    rotate: 4,
    left: "32%",
    top: "52%",
  },
  {
    src: "/adventures/photo7.jpg",
    caption: "empty roads near iit hyderabad at an hour when the campus is still asleep",
    rotate: -6,
    left: "58%",
    top: "46%",
  },
  {
    src: "/adventures/photo8.jpg",
    caption: "'fearless, the derring-do' — border roads sign in kashmir, featuring one very cold me",
    rotate: 7,
    left: "80%",
    top: "50%",
  },
];

function Polaroid({
  photo,
  index,
  constraintsRef,
  zIndex,
  onBringToFront,
}: {
  photo: Photo;
  index: number;
  constraintsRef: React.RefObject<HTMLDivElement | null>;
  zIndex: number;
  onBringToFront: () => void;
}) {
  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      dragElastic={0.22}
      dragMomentum
      dragTransition={{
        power: 0.4,
        timeConstant: 380,
        bounceStiffness: 180,
        bounceDamping: 22,
      }}
      onDragStart={onBringToFront}
      onPointerDown={onBringToFront}
      whileDrag={{ scale: 1.08, rotate: 0, cursor: "grabbing" }}
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, rotate: photo.rotate }}
      animate={{ opacity: 1, rotate: photo.rotate }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="absolute cursor-grab active:cursor-grabbing select-none"
      style={{
        zIndex,
        left: photo.left,
        top: photo.top,
      }}
    >
      <div className="bg-[#F5F0E8] p-2.5 pb-0 shadow-xl rounded-sm" style={{ width: "clamp(160px, 20vw, 250px)" }}>
        {/* Photo */}
        <div
          className="relative w-full aspect-[4/3] rounded-sm overflow-hidden flex items-center justify-center text-3xl"
          style={{ backgroundColor: "#e8e0d0" }}
        >
          <Image
            src={photo.src}
            alt={photo.caption}
            fill
            sizes="250px"
            className="object-cover pointer-events-none"
            draggable={false}
          />
        </div>

        {/* Caption */}
        <p
          className="text-[10px] md:text-xs leading-relaxed text-center py-3 px-1"
          style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            color: "#5C5040",
          }}
        >
          {photo.caption}
        </p>
      </div>
    </motion.div>
  );
}

export default function Adventures() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [stack, setStack] = useState<number[]>(() => photos.map((_, i) => i));
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    const update = () => setIsTouch(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const bringToFront = (index: number) => {
    setStack((prev) => {
      if (prev[index] === photos.length - 1) return prev;
      const oldZ = prev[index];
      return prev.map((z) => {
        if (z === oldZ) return photos.length - 1;
        if (z > oldZ) return z - 1;
        return z;
      });
    });
  };

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-16">
        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-serif-accent tracking-tight text-text-primary">
            {"{ adventures }"}
          </h2>
          <p className="text-sm font-mono text-text-tertiary mt-2">
            aka touching grass
          </p>
        </div>

        {isTouch ? (
          /* Mobile: static masonry grid — drag would hijack scroll */
          <div className="grid grid-cols-2 gap-4 rounded-2xl border border-border-subtle p-4" style={{ background: "var(--bg-secondary)" }}>
            {photos.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: (i % 4) * 0.08, duration: 0.4 }}
                style={{ rotate: photo.rotate }}
                className="bg-[#F5F0E8] p-2 pb-0 shadow-xl rounded-sm"
              >
                <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden" style={{ backgroundColor: "#e8e0d0" }}>
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    sizes="(max-width: 768px) 50vw, 300px"
                    className="object-cover"
                    draggable={false}
                  />
                </div>
                <p
                  className="text-[9px] leading-snug text-center py-2 px-1"
                  style={{ fontFamily: "'Instrument Serif', Georgia, serif", color: "#5C5040" }}
                >
                  {photo.caption}
                </p>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Desktop: draggable polaroid canvas */
          <div
            ref={containerRef}
            className="relative w-full rounded-2xl border border-border-subtle overflow-hidden"
            style={{
              height: "clamp(400px, 50vw, 600px)",
              background: "var(--bg-secondary)",
            }}
          >
            {/* Subtle grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: "radial-gradient(circle, var(--text-tertiary) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            {/* Hint text */}
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-mono text-text-tertiary/40 select-none">
              drag the photos around — they bounce off the edges
            </p>

            {/* Photos — constrained to this container */}
            {photos.map((photo, i) => (
              <Polaroid
                key={i}
                photo={photo}
                index={i}
                constraintsRef={containerRef}
                zIndex={stack[i]}
                onBringToFront={() => bringToFront(i)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
