import React from "react";
import Hero from "@/components/hero/Hero";
import SelectedWork from "@/components/projects/SelectedWork";
import ProductIntelligence from "@/components/ai/ProductIntelligence";
import Capabilities from "@/components/services/Capabilities";
import EngineeringStack from "@/components/tech/EngineeringStack";
import HowIWork from "@/components/process/HowIWork";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      {/* 1. Large Visual Moment: Hero with Interactive Product Canvas */}
      <Hero />

      {/* 2. Selected Work: Immersive Editorial Project Showcases */}
      <SelectedWork />

      {/* 3. Product Intelligence: Real Software Application AI Pipeline */}
      <ProductIntelligence />

      {/* 4. Capabilities: 4 Core Disciplines (What I Build) */}
      <Capabilities />

      {/* 5. Engineering Stack: Typographic Metadata by Category */}
      <EngineeringStack />

      {/* 6. How I Work: Disciplined 01-05 Software Execution Lifecycle */}
      <HowIWork />

      {/* 7. About: Editorial Portrait & Product-Minded Philosophy */}
      <About />

      {/* 8. Conversion Engine: Real Project Inquiry & Direct Channels */}
      <Contact />
    </main>
  );
}
