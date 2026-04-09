import type { Metadata } from "next";
import TheLab from "@/components/TheLab";

export const metadata: Metadata = {
  title: "The Lab — Arjun Varshney",
  description:
    "Experiments, hypotheses, and half-baked ideas. Where I tinker with AI, product, and code.",
};

export default function LabPage() {
  return (
    <main className="pt-20">
      <TheLab />
    </main>
  );
}
