import React from "react";
import type { Metadata } from "next";
import Services from "@/components/services/Services";
import Engagement from "@/components/engagement/Engagement";
import { profileData } from "@/data/profile";

export const metadata: Metadata = {
  title: `Freelance Services & Capabilities | ${profileData.name}`,
  description: `Explore full-stack web development, AI integration, backend architecture, and custom business software services by Naveen Kandula.`,
};

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-20 w-full">
      <Services />
      <Engagement />
    </div>
  );
}
