import type { Metadata } from "next";
import AboutMe from "@/components/AboutMe";
import Adventures from "@/components/Adventures";
import Bookshelf from "@/components/Bookshelf";
import Colophon from "@/components/Colophon";

export const metadata: Metadata = {
  title: "Context — Arjun Varshney",
  description:
    "The person behind the pixels. My story, adventures, what I read, and how I built this.",
};

export default function AboutPage() {
  return (
    <main className="pt-20">
      <AboutMe />
      <Adventures />
      <Bookshelf />
      <Colophon />
    </main>
  );
}
