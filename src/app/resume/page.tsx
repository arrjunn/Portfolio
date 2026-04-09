import type { Metadata } from "next";
import Resume from "@/components/Resume";
import Education from "@/components/Education";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Resume — Arjun Varshney",
  description:
    "AI-annotated resume with director's commentary. Click the brain icons for personal context behind each experience.",
};

export default function ResumePage() {
  return (
    <main className="pt-20">
      <SectionWrapper
        eyebrow="Resume"
        title="The Director's Cut"
        description="My resume, but alive. Click the 🧠 icons for behind-the-scenes commentary on each bullet point."
      >
        <Resume />
      </SectionWrapper>
      <Education />
    </main>
  );
}
