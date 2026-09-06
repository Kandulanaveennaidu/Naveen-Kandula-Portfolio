import React from "react";
import Hero from "@/components/hero/Hero";
import CapabilityStrip from "@/components/capability/CapabilityStrip";
import About from "@/components/about/About";
import Services from "@/components/services/Services";
import TechStack from "@/components/tech/TechStack";
import ProjectGrid from "@/components/projects/ProjectGrid";
import AIEngineering from "@/components/ai/AIEngineering";
import Process from "@/components/process/Process";
import WhyWorkWithMe from "@/components/trust/WhyWorkWithMe";
import Engagement from "@/components/engagement/Engagement";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* 1. Hero Section with Interactive System Topology */}
      <Hero />

      {/* 2. Capability / Trust Strip */}
      <CapabilityStrip />

      {/* 3. About & Engineering Philosophy */}
      <About />

      {/* 4. Core Services & Deliverables */}
      <Services />

      {/* 5. Technical Stack Mastery */}
      <TechStack />

      {/* 6. Featured Case Studies & Reference Work */}
      <ProjectGrid />

      {/* 7. AI Engineering & Interactive Pipeline */}
      <AIEngineering />

      {/* 8. 5-Step Execution Process */}
      <Process />

      {/* 9. Why Work With Me (Value Propositions) */}
      <WhyWorkWithMe />

      {/* 10. Freelance Engagement Models */}
      <Engagement />

      {/* 11. Conversion Lead Capture & Contact */}
      <Contact />
    </div>
  );
}
