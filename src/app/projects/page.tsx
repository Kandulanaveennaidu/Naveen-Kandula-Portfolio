import React from "react";
import type { Metadata } from "next";
import ProjectGrid from "@/components/projects/ProjectGrid";
import { profileData } from "@/data/profile";

export const metadata: Metadata = {
  title: `Featured Projects & Case Studies | ${profileData.name}`,
  description: `Browse case studies and reference architectures in full-stack web applications, AI integrations, and enterprise business systems built by Naveen Kandula.`,
};

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-20 w-full">
      <ProjectGrid />
    </div>
  );
}
