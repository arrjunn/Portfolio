import type { Metadata } from "next";
import Projects from "@/components/Projects";
import ImpactDashboard from "@/components/ImpactDashboard";
import ProductTeardowns from "@/components/ProductTeardowns";
import Skills from "@/components/Skills";

export const metadata: Metadata = {
  title: "Shipped — Arjun Varshney",
  description:
    "Projects, impact metrics, and everything I've built as an aspiring AI Product Manager.",
};

export default function WorkPage() {
  return (
    <main className="pt-20">
      <Projects showAll />
      <ImpactDashboard />
      <ProductTeardowns />
      <Skills />
    </main>
  );
}
