import React from "react";
import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import ProfileImage from "@/components/common/ProfileImage";
import ProfessionalProfiles from "@/components/common/ProfessionalProfiles";
import { profileData } from "@/data/profile";
import Badge from "@/components/common/Badge";
import { Clock, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: `Start a Project | Contact ${profileData.name}`,
  description: `Submit a project brief, RFP, or software inquiry directly to Naveen Kandula. Fast response within 24 hours.`,
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24 min-h-screen bg-bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-wider text-accent-cyan">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
            <span>09 // CLIENT LEAD ENGINE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary mb-4 leading-tight">
            Let&apos;s Build Something Useful
          </h1>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
            Have a product idea, an existing application that needs improvement, or a business process ready for automation? Tell me what you&apos;re building and I&apos;ll review the requirements.
          </p>
        </div>

        {/* Two-Column Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Side: Professional Personality & Profile Image */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <ProfileImage priority={true} />

            <div className="p-6 rounded-2xl bg-bg-card border border-border-subtle space-y-3 text-xs text-text-secondary">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-accent-primary shrink-0" />
                <span>Prompt review & response within 24 hours.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-accent-cyan shrink-0" />
                <span>Strict confidentiality and mutual NDA protected.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-accent-success shrink-0" />
                <span>Pragmatic technical scoping discussion with zero sales pressure.</span>
              </div>
            </div>
          </div>

          {/* Right Side: Real Project Inquiry Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>

        {/* Bottom: Professional Profiles Section */}
        <div className="pt-12 border-t border-border-subtle">
          <ProfessionalProfiles
            title="Alternative Direct Channels"
            subtitle="Prefer connecting on social platforms or chatting on WhatsApp? Feel free to reach out directly."
          />
        </div>
      </div>
    </div>
  );
}
