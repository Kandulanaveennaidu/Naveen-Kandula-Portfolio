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

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit inquiry.");
      }

      setInquiryId(result.inquiryId || null);
      setSubmitted(true);
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected error occurred while saving your inquiry. Please try again or reach out on WhatsApp directly.");
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
      <div className="p-6 sm:p-10 md:p-12 rounded-3xl bg-bg-card border border-accent-success/30 shadow-2xl text-center flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-300">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-accent-success/15 border border-accent-success/30 flex items-center justify-center text-accent-success mb-4 sm:mb-5 shadow-lg">
          <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight mb-2">
          Your project inquiry is on its way.
        </h3>
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-md mb-4 px-2">
          Thanks for sharing the details. Your inquiry has been stored in PostgreSQL and a notification has been sent to Naveen. You will receive a direct reply at <span className="text-text-primary font-medium">{formData.email}</span> within 24 hours.
        </p>
        {inquiryId && (
          <div className="text-[11px] font-mono text-text-muted bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/[0.06] mb-6">
            Inquiry Reference: {inquiryId}
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full sm:w-auto">
          <button
            type="button"
            onClick={resetForm}
            className="inline-flex items-center justify-center gap-2 text-xs font-mono text-text-muted hover:text-text-primary transition-colors py-3 px-4 rounded-xl border border-border-subtle min-h-[44px]"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Send Another Inquiry</span>
          </button>
          <a
            href="https://wa.me/919705627977"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-xs font-mono text-accent-cyan hover:underline py-3 px-4 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 min-h-[44px]"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Message on WhatsApp Directly</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-5 sm:p-8 rounded-3xl bg-bg-card border border-border-subtle shadow-2xl flex flex-col gap-4 sm:gap-5 w-full"
    >
      {/* Hidden honeypot field to drop spam bots quietly */}
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

      {/* Field: Name */}
      <div className="w-full">
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
          className="w-full px-4 py-3 rounded-xl bg-bg-elevated border border-border-subtle focus:border-accent-primary text-base sm:text-sm text-text-primary placeholder:text-text-muted/60 focus:outline-none min-h-[48px] transition-colors"
        />
      </div>

      {/* Field: Email */}
      <div className="w-full">
        <label htmlFor="email" className="block text-xs font-mono text-text-muted uppercase mb-1.5">
          Email Address <span className="text-accent-primary">*</span>
        </label>
        <input
          id="email"
          type="email"
          required
          autoComplete="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="alex@company.com"
          className="w-full px-4 py-3 rounded-xl bg-bg-elevated border border-border-subtle focus:border-accent-primary text-base sm:text-sm text-text-primary placeholder:text-text-muted/60 focus:outline-none min-h-[48px] transition-colors"
        />
      </div>

      {/* Field: Company */}
      <div className="w-full">
        <label htmlFor="company" className="block text-xs font-mono text-text-muted uppercase mb-1.5">
          Company or Product Name <span className="text-text-muted font-normal">(Optional)</span>
        </label>
        <input
          id="company"
          type="text"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          placeholder="e.g. Acme Tech or Early Stage Startup"
          className="w-full px-4 py-3 rounded-xl bg-bg-elevated border border-border-subtle focus:border-accent-primary text-base sm:text-sm text-text-primary placeholder:text-text-muted/60 focus:outline-none min-h-[48px] transition-colors"
        />
      </div>

      {/* Field: Phone / WhatsApp */}
      <div className="w-full">
        <label htmlFor="phone" className="block text-xs font-mono text-text-muted uppercase mb-1.5">
          Phone / WhatsApp <span className="text-text-muted font-normal">(Optional)</span>
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="+1 (555) 000-0000"
          className="w-full px-4 py-3 rounded-xl bg-bg-elevated border border-border-subtle focus:border-accent-primary text-base sm:text-sm text-text-primary placeholder:text-text-muted/60 focus:outline-none min-h-[48px] transition-colors"
        />
      </div>

      {/* Field: Project Type */}
      <div className="w-full">
        <label htmlFor="projectType" className="block text-xs font-mono text-text-muted uppercase mb-1.5">
          Project Category <span className="text-accent-primary">*</span>
        </label>
        <select
          id="projectType"
          value={formData.projectType}
          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-bg-elevated border border-border-subtle focus:border-accent-primary text-base sm:text-sm text-text-primary focus:outline-none min-h-[48px] transition-colors cursor-pointer"
        >
          {PROJECT_TYPES.map((type) => (
            <option key={type} value={type} className="bg-bg-card text-text-primary">
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Field: Preferred Contact Method */}
      <div className="w-full">
        <label htmlFor="preferredContact" className="block text-xs font-mono text-text-muted uppercase mb-1.5">
          Preferred Contact Method
        </label>
        <select
          id="preferredContact"
          value={formData.preferredContact}
          onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-bg-elevated border border-border-subtle focus:border-accent-primary text-base sm:text-sm text-text-primary focus:outline-none min-h-[48px] transition-colors cursor-pointer"
        >
          {PREFERRED_CONTACT_METHODS.map((method) => (
            <option key={method} value={method} className="bg-bg-card text-text-primary">
              {method}
            </option>
          ))}
        </select>
      </div>

      {/* Field: Budget Range */}
      <div className="w-full">
        <label htmlFor="budget" className="block text-xs font-mono text-text-muted uppercase mb-1.5">
          Budget Range <span className="text-text-muted font-normal">(Optional)</span>
        </label>
        <select
          id="budget"
          value={formData.budget}
          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-bg-elevated border border-border-subtle focus:border-accent-primary text-base sm:text-sm text-text-primary focus:outline-none min-h-[48px] transition-colors cursor-pointer"
        >
          {BUDGET_RANGES.map((b) => (
            <option key={b} value={b} className="bg-bg-card text-text-primary">
              {b}
            </option>
          ))}
        </select>
      </div>

      {/* Field: Timeline */}
      <div className="w-full">
        <label htmlFor="timeline" className="block text-xs font-mono text-text-muted uppercase mb-1.5">
          Target Timeline <span className="text-text-muted font-normal">(Optional)</span>
        </label>
        <select
          id="timeline"
          value={formData.timeline}
          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-bg-elevated border border-border-subtle focus:border-accent-primary text-base sm:text-sm text-text-primary focus:outline-none min-h-[48px] transition-colors cursor-pointer"
        >
          {TIMELINE_OPTIONS.map((t) => (
            <option key={t} value={t} className="bg-bg-card text-text-primary">
              {t}
            </option>
          ))}
        </select>
      </div>

      {/* Field: Project Description */}
      <div className="w-full">
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
          className="w-full px-4 py-3 rounded-xl bg-bg-elevated border border-border-subtle focus:border-accent-primary text-base sm:text-sm text-text-primary placeholder:text-text-muted/60 focus:outline-none min-h-[110px] transition-colors resize-y leading-relaxed"
        />
      </div>

      {/* Submit Action: Full-Width 48px+ on Mobile */}
      <Button
        type="submit"
        disabled={loading}
        variant="primary"
        size="lg"
        className="w-full justify-center mt-2 font-semibold min-h-[50px] text-sm"
        icon={loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
      >
        {loading ? "Submitting Inquiry..." : "Send Project Inquiry"}
      </Button>

      <p className="text-[11px] font-mono text-text-muted text-center leading-normal">
        Guaranteed 24-hour response • Confidential & protected under NDA
      </p>
    </form>
  );
}
