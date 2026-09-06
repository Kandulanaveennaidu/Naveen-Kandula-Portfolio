import React from "react";
import type { Metadata } from "next";
import SelectedWork from "@/components/projects/SelectedWork";
import { profileData } from "@/data/profile";

export const metadata: Metadata = {
  title: `Selected Work & Case Studies | ${profileData.name}`,
  description: `Browse in-depth case studies and reference architectures in full-stack web applications, AI integrations, and enterprise business systems built by Naveen Kandula.`,
};

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-20 w-full">
      <SelectedWork />
    </div>
  );
}
