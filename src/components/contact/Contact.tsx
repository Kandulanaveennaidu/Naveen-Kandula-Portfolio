"use client";

import React, { useState } from "react";
import SectionHeader from "@/components/common/SectionHeader";
import ContactForm from "./ContactForm";
import ProfessionalProfiles from "@/components/common/ProfessionalProfiles";
import { profileData } from "@/data/profile";
import { 
  Mail, 
  Copy, 
  Check, 
  Github, 
  Linkedin, 
  MessageSquare, 
  Clock, 
  ShieldCheck, 
  Sparkles 
} from "lucide-react";
import Badge from "@/components/common/Badge";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative bg-bg-primary w-full" aria-label="Contact & Project Inquiry">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-accent-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="09 // CLIENT LEAD ENGINE"
          title="Let's Build Something Useful"
          description="Have a product idea, an existing application, or a business process that needs better software? Tell me what you're building and I'll review the requirements."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Column: Direct Info & Guarantees */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-bg-card border border-border-subtle shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="success" dot={true}>
                  {profileData.availability.badgeText}
                </Badge>
              </div>

              <h3 className="text-xl font-bold text-text-primary tracking-tight mb-2">
                Direct Communication
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                Whether you need a complete web application built from scratch, high-impact AI capabilities integrated, or a technical consultation, I&apos;m here to help.
              </p>

              {/* Copy Email Box */}
              <div className="p-3.5 rounded-xl bg-bg-elevated border border-border-subtle flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-accent-cyan shrink-0" />
                  <span className="text-xs font-mono text-text-primary truncate">
                    {profileData.contact.email}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-xs font-mono text-text-secondary hover:text-white transition-all flex items-center gap-1.5 shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-accent-success" />
                      <span className="text-accent-success">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Guarantees */}
              <div className="space-y-3 text-xs text-text-secondary">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-accent-primary shrink-0" />
                  <span>Prompt response within 24 hours.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-accent-cyan shrink-0" />
                  <span>Strict NDA and confidential treatment of your ideas.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-accent-success shrink-0" />
                  <span>Actionable scoping discussion, not a high-pressure sales pitch.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Real Project Inquiry Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>

        {/* Professional Profiles 4 Cards Section */}
        <div className="pt-8 border-t border-border-subtle">
          <ProfessionalProfiles />
        </div>
      </div>
    </section>
  );
}
