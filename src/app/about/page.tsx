import React from "react";
import type { Metadata } from "next";
import About from "@/components/about/About";
import ProfessionalProfiles from "@/components/common/ProfessionalProfiles";
import { profileData } from "@/data/profile";

export const metadata: Metadata = {
  title: `About ${profileData.name} | Full Stack Developer & AI Integration Engineer`,
  description: `Learn about Naveen Kandula's engineering background (~4+ years experience), full-stack product approach, and AI integration philosophy.`,
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 w-full">
      <About />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <ProfessionalProfiles
          title="Direct Channels"
          subtitle="Reach out via any preferred network to discuss client projects or consultations."
        />
      </div>
    </div>
  );
}
