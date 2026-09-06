"use client";

import React, { useState } from "react";
import Button from "@/components/common/Button";
import { CheckCircle2, Send, Loader2, RefreshCw, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const PROJECT_TYPES = [
  "Full-Stack Web App",
  "AI Integration / LLM Feature",
  "Backend & API Development",
  "Existing Product Enhancement",
  "Custom Business Tool / CRM",
  "Architecture Consultation"
];

const PREFERRED_CONTACT_METHODS = ["Email", "WhatsApp", "Phone Call"];

const BUDGET_RANGES = [
  "Flexible / Scoped on Brief",
  "< $5,000",
  "$5,000 - $15,000",
  "$15,000 - $30,000",
  "$30,000+"
];

const TIMELINE_OPTIONS = [
  "Immediately (< 2 weeks)",
  "Within 1 month",
  "Within 2 - 3 months",
  "Flexible / Long-term"
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: PROJECT_TYPES[0],
    preferredContact: PREFERRED_CONTACT_METHODS[0],
    budget: BUDGET_RANGES[0],
    timeline: TIMELINE_OPTIONS[0],
    message: "",
    honeypot: "", // Spam prevention field (hidden from users)
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

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit inquiry.");
      }

      setInquiryId(result.inquiryId || null);
      setSubmitted(true);
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected error occurred. Please try again or reach out on WhatsApp directly.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      projectType: PROJECT_TYPES[0],
      preferredContact: PREFERRED_CONTACT_METHODS[0],
      budget: BUDGET_RANGES[0],
      timeline: TIMELINE_OPTIONS[0],
      message: "",
      honeypot: "",
    });
    setSubmitted(false);
    setErrorMessage(null);
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-12 rounded-3xl bg-bg-card border border-accent-success/30 shadow-2xl text-center flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-2xl bg-accent-success/15 border border-accent-success/30 flex items-center justify-center text-accent-success mb-5 shadow-lg">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-text-primary tracking-tight mb-2">
          Project Inquiry Received
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed max-w-md mb-4">
          Thanks — your project inquiry has been received and stored in the database. Naveen will review your specifications and reply to <span className="text-text-primary font-medium">{formData.email}</span> within 24 hours.
        </p>
        {inquiryId && (
          <div className="text-[11px] font-mono text-text-muted bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/[0.06] mb-6">
            Reference ID: {inquiryId}
          </div>
        )}

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={resetForm}
            className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-text-primary transition-colors py-2 px-3 rounded-lg border border-border-subtle"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Send Another Inquiry</span>
          </button>
          <a
            href="https://wa.me/919705627977"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-accent-cyan hover:underline py-2 px-3"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp directly</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-8 rounded-3xl bg-bg-card border border-border-subtle shadow-2xl flex flex-col gap-5"
    >
      {/* Hidden honeypot field to trap spam bots */}
      <input
        type="text"
        name="company_website_url_hp"
        value={formData.honeypot}
        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {errorMessage && (
        <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono">
          {errorMessage}
        </div>
      )}

      {/* Row 1: Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs font-mono text-text-muted uppercase mb-1.5">
            Full Name <span className="text-accent-primary">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Alex Rivera"
            className="w-full px-4 py-2.5 rounded-xl bg-bg-elevated border border-border-subtle focus:border-accent-primary/60 text-sm text-text-primary placeholder:text-text-muted/60 focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-mono text-text-muted uppercase mb-1.5">
            Email Address <span className="text-accent-primary">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="alex@company.com"
            className="w-full px-4 py-2.5 rounded-xl bg-bg-elevated border border-border-subtle focus:border-accent-primary/60 text-sm text-text-primary placeholder:text-text-muted/60 focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Row 2: Company & Phone / WhatsApp */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="company" className="block text-xs font-mono text-text-muted uppercase mb-1.5">
            Company / Business <span className="text-text-muted font-normal">(Optional)</span>
          </label>
          <input
            id="company"
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="e.g. Acme Tech or Early Stage Startup"
            className="w-full px-4 py-2.5 rounded-xl bg-bg-elevated border border-border-subtle focus:border-accent-primary/60 text-sm text-text-primary placeholder:text-text-muted/60 focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-mono text-text-muted uppercase mb-1.5">
            Phone / WhatsApp <span className="text-text-muted font-normal">(Optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+1 (555) 000-0000"
            className="w-full px-4 py-2.5 rounded-xl bg-bg-elevated border border-border-subtle focus:border-accent-primary/60 text-sm text-text-primary placeholder:text-text-muted/60 focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Row 3: Project Type & Preferred Contact Method */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="projectType" className="block text-xs font-mono text-text-muted uppercase mb-1.5">
            Project Type <span className="text-accent-primary">*</span>
          </label>
          <select
            id="projectType"
            value={formData.projectType}
            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-bg-elevated border border-border-subtle focus:border-accent-primary/60 text-sm text-text-primary focus:outline-none transition-colors cursor-pointer"
          >
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type} className="bg-bg-card text-text-primary">
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="preferredContact" className="block text-xs font-mono text-text-muted uppercase mb-1.5">
            Preferred Contact Method
          </label>
          <select
            id="preferredContact"
            value={formData.preferredContact}
            onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-bg-elevated border border-border-subtle focus:border-accent-primary/60 text-sm text-text-primary focus:outline-none transition-colors cursor-pointer"
          >
            {PREFERRED_CONTACT_METHODS.map((method) => (
              <option key={method} value={method} className="bg-bg-card text-text-primary">
                {method}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 4: Budget & Timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="budget" className="block text-xs font-mono text-text-muted uppercase mb-1.5">
            Budget Range <span className="text-text-muted font-normal">(Optional)</span>
          </label>
          <select
            id="budget"
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-bg-elevated border border-border-subtle focus:border-accent-primary/60 text-sm text-text-primary focus:outline-none transition-colors cursor-pointer"
          >
            {BUDGET_RANGES.map((b) => (
              <option key={b} value={b} className="bg-bg-card text-text-primary">
                {b}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="timeline" className="block text-xs font-mono text-text-muted uppercase mb-1.5">
            Target Timeline <span className="text-text-muted font-normal">(Optional)</span>
          </label>
          <select
            id="timeline"
            value={formData.timeline}
            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-bg-elevated border border-border-subtle focus:border-accent-primary/60 text-sm text-text-primary focus:outline-none transition-colors cursor-pointer"
          >
            {TIMELINE_OPTIONS.map((t) => (
              <option key={t} value={t} className="bg-bg-card text-text-primary">
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 5: Project Description */}
      <div>
        <label htmlFor="message" className="block text-xs font-mono text-text-muted uppercase mb-1.5">
          Project Brief & Objectives <span className="text-accent-primary">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Describe what you are building, the current state of the product, technical constraints, and primary goals..."
          className="w-full px-4 py-3 rounded-xl bg-bg-elevated border border-border-subtle focus:border-accent-primary/60 text-sm text-text-primary placeholder:text-text-muted/60 focus:outline-none transition-colors resize-y leading-relaxed"
        />
      </div>

      {/* Submit Action */}
      <Button
        type="submit"
        disabled={loading}
        variant="primary"
        size="lg"
        className="w-full justify-center mt-2 font-semibold"
        icon={loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
      >
        {loading ? "Submitting Inquiry..." : "Send Project Inquiry"}
      </Button>

      <p className="text-[11px] font-mono text-text-muted text-center">
        Guaranteed 24-hour response • Confidential & protected under NDA
      </p>
    </form>
  );
}
