"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { principles, projects, showerThoughts, knowledgeEdges } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";

interface Node {
  id: string;
  label: string;
  type: "principle" | "project" | "thought" | "changed" | "framework";
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const TYPE_COLORS: Record<string, string> = {
  principle: "#A855F7",
  project: "#6C9CFC",
  thought: "#3B82F6",
  changed: "#22C55E",
  framework: "#EF4444",
};

function buildNodes(): Node[] {
  const nodes: Node[] = [];
  const w = 600, h = 400;

  principles.forEach((p) => {
    nodes.push({ id: `principle:${p.title.toLowerCase().replace(/\s+/g, "-")}`, label: p.title, type: "principle", x: 100 + Math.random() * (w - 200), y: 100 + Math.random() * (h - 200), vx: 0, vy: 0 });
  });
  projects.forEach((p) => {
    nodes.push({ id: `project:${p.slug}`, label: p.title, type: "project", x: 100 + Math.random() * (w - 200), y: 100 + Math.random() * (h - 200), vx: 0, vy: 0 });
  });
  showerThoughts.slice(0, 4).forEach((t, i) => {
    nodes.push({ id: `thought:${t.tag.replace("#", "")}${i}`, label: t.text.slice(0, 30) + "...", type: "thought", x: 100 + Math.random() * (w - 200), y: 100 + Math.random() * (h - 200), vx: 0, vy: 0 });
  });

  return nodes;
}

export default function KnowledgeGraph() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<string | null>(null);
  const nodesRef = useRef<Node[]>(buildNodes());
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    if (!isInView) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const nodes = nodesRef.current;
    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;
    canvas.width = w * window.devicePixelRatio;
    canvas.height = h * window.devicePixelRatio;
    ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);

    const edgeMap = knowledgeEdges.filter((e) =>
      nodes.some((n) => n.id === e.from) && nodes.some((n) => n.id === e.to)
    );

    function simulate() {
      // Repulsion
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy) || 1;
          const force = 800 / (d * d);
          const fx = (dx / d) * force;
          const fy = (dy / d) * force;
          nodes[i].vx += fx;
          nodes[i].vy += fy;
          nodes[j].vx -= fx;
          nodes[j].vy -= fy;
        }
      }

      // Attraction along edges
      for (const edge of edgeMap) {
        const a = nodes.find((n) => n.id === edge.from);
        const b = nodes.find((n) => n.id === edge.to);
        if (!a || !b) continue;
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const d = Math.sqrt(dx * dx + dy * dy) || 1;
        const force = (d - 120) * 0.005;
        a.vx += (dx / d) * force;
        a.vy += (dy / d) * force;
        b.vx -= (dx / d) * force;
        b.vy -= (dy / d) * force;
      }

      // Gravity toward center + damping + boundary
      for (const node of nodes) {
        node.vx += (w / 2 - node.x) * 0.001;
        node.vy += (h / 2 - node.y) * 0.001;
        node.vx *= 0.85;
        node.vy *= 0.85;
        node.x += node.vx;
        node.y += node.vy;
        node.x = Math.max(40, Math.min(w - 40, node.x));
        node.y = Math.max(40, Math.min(h - 40, node.y));
      }
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);

      // Edges
      for (const edge of edgeMap) {
        const a = nodes.find((n) => n.id === edge.from);
        const b = nodes.find((n) => n.id === edge.to);
        if (!a || !b) continue;
        const isHighlighted = hovered === a.id || hovered === b.id;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = isHighlighted ? "rgba(232, 197, 71, 0.4)" : "rgba(255,255,255,0.06)";
        ctx.lineWidth = isHighlighted ? 1.5 : 0.5;
        ctx.stroke();
      }

      // Nodes
      for (const node of nodes) {
        const color = TYPE_COLORS[node.type] || "#888";
        const isHighlighted = hovered === node.id;
        const r = isHighlighted ? 7 : 5;

        ctx.beginPath();
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = isHighlighted ? 1 : 0.6;
        ctx.fill();
        ctx.globalAlpha = 1;

        if (isHighlighted) {
          ctx.font = "11px Inter, sans-serif";
          ctx.fillStyle = "#FAFAFA";
          ctx.textAlign = "center";
          ctx.fillText(node.label, node.x, node.y - 12);
        }
      }

      simulate();
      animRef.current = requestAnimationFrame(draw);
    }

    animRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animRef.current);
  }, [isInView, hovered]);

  function handleMouseMove(e: React.MouseEvent<HTMLCanvasElement>) {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    const nodes = nodesRef.current;
    let found: string | null = null;
    for (const node of nodes) {
      const dx = mx - node.x;
      const dy = my - node.y;
      if (Math.sqrt(dx * dx + dy * dy) < 15) {
        found = node.id;
        break;
      }
    }
    setHovered(found);
  }

  return (
    <SectionWrapper
      eyebrow="Connections"
      title="How My Thinking Connects"
      description="An interactive map of how my principles, projects, and ideas relate to each other."
    >
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* Legend */}
        <div className="flex flex-wrap gap-4 mb-4">
          {Object.entries(TYPE_COLORS).map(([type, color]) => (
            <div key={type} className="flex items-center gap-1.5 text-[10px] font-mono text-text-tertiary capitalize">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
              {type}
            </div>
          ))}
        </div>

        {/* Canvas */}
        <div className="rounded-2xl border border-border-subtle overflow-hidden bg-bg-secondary" style={{ height: "400px" }}>
          <canvas
            ref={canvasRef}
            className="w-full h-full cursor-crosshair"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setHovered(null)}
          />
        </div>

        <p className="text-[10px] font-mono text-text-tertiary/40 mt-2 text-center">
          hover over nodes to explore connections
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
