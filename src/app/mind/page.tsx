import type { Metadata } from "next";
import Principles from "@/components/Principles";
import FrameworkLibrary from "@/components/FrameworkLibrary";
import DecisionLog from "@/components/DecisionLog";
import ChangedMind from "@/components/ChangedMind";
import KnowledgeGraph from "@/components/KnowledgeGraph";

export const metadata: Metadata = {
  title: "Thinking — Arjun Varshney",
  description:
    "How I think about products, AI, and the world. Principles, frameworks, decisions, and things I've changed my mind about.",
};

export default function MindPage() {
  return (
    <main className="pt-20">
      <Principles />
      <FrameworkLibrary />
      <DecisionLog />
      <ChangedMind />
      <KnowledgeGraph />
    </main>
  );
}
