"use client";

import React, { useState } from "react";
import { CheckCircle2, Send, Loader2, ArrowUpRight, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const PROJECT_TYPES = [
  "Full-Stack Web App",
  "AI Integration & LLM Pipeline",
  "Backend & API Architecture",
  "Product Modernization / Scaling",
  "Custom Business Tool",
  "Technical Consultation"
];

const BUDGET_RANGES = [
  "Flexible / Scoped on Requirements",
  "< $5,000",
  "$5,000 - $15,000",
  "$15,000 - $30,000",
  "$30,000+"
];

const TIMELINE_OPTIONS = [
  "Urgent (< 2 weeks)",
  "Within 1 month",
  "Within 2 - 3 months",
  "Flexible"
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: PROJECT_TYPES[0],
    preferredContact: "Email",
    budget: BUDGET_RANGES[0],
    timeline: TIMELINE_OPTIONS[0],
    message: "",
    honeypot: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit project inquiry.");
      }

      setSubmitted(true);
      setInquiryId(data.inquiryId);
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected error occurred. Please contact me directly via WhatsApp or email.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-12 rounded-2xl border border-border-strong bg-bg-card text-left space-y-6">
        <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
          <CheckCircle2 className="w-6 h-6" />
        </div>

        <div>
          <h3 className="text-2xl font-bold tracking-tight text-text-primary mb-2">
            Project Brief Received
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed font-normal">
            Thank you for reaching out. Your inquiry has been stored directly in PostgreSQL and dispatched to my inbox. I will review your requirements and respond within 24 hours.
          </p>
        </div>

        {inquiryId && (
          <div className="p-3.5 rounded-xl bg-black/40 border border-border-subtle font-mono text-xs text-text-muted">
            <span>Reference ID: </span>
            <strong className="text-text-primary font-normal">{inquiryId}</strong>
          </div>
        )}

        <div className="pt-4 border-t border-border-subtle flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <a
            href="https://wa.me/919705627977"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-wider transition-all min-h-[44px]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Quick Chat on WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                email: "",
                company: "",
                phone: "",
                projectType: PROJECT_TYPES[0],
                preferredContact: "Email",
                budget: BUDGET_RANGES[0],
                timeline: TIMELINE_OPTIONS[0],
                message: "",
                honeypot: "",
              });
            }}
            className="px-4 py-3 rounded-xl border border-border-subtle text-text-muted hover:text-text-primary text-xs font-mono uppercase tracking-wider transition-colors min-h-[44px]"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 sm:p-10 rounded-2xl border border-border-strong bg-bg-card/50 space-y-5">
      {/* Honeypot Spam Trap (Hidden) */}
      <input
        type="text"
        name="company_website_url_hp"
        value={formData.honeypot}
        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      {errorMessage && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-300">
          {errorMessage}
        </div>
      )}

      {/* Row 1: Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono uppercase text-text-muted mb-1.5">
            Your Name <span className="text-accent-primary">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Alex Miller"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-border-strong text-text-primary text-sm focus:border-accent-primary focus:outline-none min-h-[48px]"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase text-text-muted mb-1.5">
            Work Email <span className="text-accent-primary">*</span>
          </label>
          <input
            type="email"
            required
            placeholder="alex@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-border-strong text-text-primary text-sm focus:border-accent-primary focus:outline-none min-h-[48px]"
          />
        </div>
      </div>

      {/* Row 2: Company & Phone/WhatsApp */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono uppercase text-text-muted mb-1.5">
            Company / Organization
          </label>
          <input
            type="text"
            placeholder="e.g. Acme Corp / Stealth"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-border-strong text-text-primary text-sm focus:border-accent-primary focus:outline-none min-h-[48px]"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase text-text-muted mb-1.5">
            Phone / WhatsApp
          </label>
          <input
            type="tel"
            placeholder="+1 (555) 000-0000"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-border-strong text-text-primary text-sm focus:border-accent-primary focus:outline-none min-h-[48px]"
          />
        </div>
      </div>

      {/* Row 3: Project Type */}
      <div>
        <label className="block text-xs font-mono uppercase text-text-muted mb-1.5">
          Project Type <span className="text-accent-primary">*</span>
        </label>
        <select
          value={formData.projectType}
          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-black/40 border border-border-strong text-text-primary text-sm focus:border-accent-primary focus:outline-none min-h-[48px]"
        >
          {PROJECT_TYPES.map((pt) => (
            <option key={pt} value={pt} className="bg-bg-card text-text-primary">
              {pt}
            </option>
          ))}
        </select>
      </div>

      {/* Row 4: Budget & Timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono uppercase text-text-muted mb-1.5">
            Budget Range
          </label>
          <select
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-border-strong text-text-primary text-sm focus:border-accent-primary focus:outline-none min-h-[48px]"
          >
            {BUDGET_RANGES.map((b) => (
              <option key={b} value={b} className="bg-bg-card text-text-primary">
                {b}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-mono uppercase text-text-muted mb-1.5">
            Target Timeline
          </label>
          <select
            value={formData.timeline}
            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-border-strong text-text-primary text-sm focus:border-accent-primary focus:outline-none min-h-[48px]"
          >
            {TIMELINE_OPTIONS.map((t) => (
              <option key={t} value={t} className="bg-bg-card text-text-primary">
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 5: Project Brief */}
      <div>
        <label className="block text-xs font-mono uppercase text-text-muted mb-1.5">
          Project Scope &amp; Requirements <span className="text-accent-primary">*</span>
        </label>
        <textarea
          required
          rows={4}
          placeholder="Briefly describe what you want to build, existing systems, or key technical challenges..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-black/40 border border-border-strong text-text-primary text-sm focus:border-accent-primary focus:outline-none resize-y min-h-[120px]"
        />
      </div>

      {/* Submit Action */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 rounded-xl bg-text-primary text-bg-primary hover:bg-white font-semibold text-sm uppercase tracking-wider transition-all min-h-[50px] flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Transmitting Inquiry...</span>
            </>
          ) : (
            <>
              <span>Send Project Inquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </>
          )}
        </button>

        <p className="text-[11px] font-mono text-text-muted text-center mt-3">
          Guaranteed response within 24 hours. Strict confidentiality &amp; mutual NDA protected.
        </p>
      </div>
    </form>
  );
}
