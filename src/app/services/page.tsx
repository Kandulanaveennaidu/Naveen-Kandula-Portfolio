import React from "react";
import type { Metadata } from "next";
import Capabilities from "@/components/services/Capabilities";
import EngineeringStack from "@/components/tech/EngineeringStack";
import HowIWork from "@/components/process/HowIWork";
import { profileData } from "@/data/profile";

export const metadata: Metadata = {
  title: `Capabilities & Services | ${profileData.name}`,
  description: `Explore full-stack web development, AI integration, backend architecture, and custom business software capabilities by Naveen Kandula.`,
};

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-20 w-full">
      <Capabilities />
      <EngineeringStack />
      <HowIWork />
    </div>
  );
}
