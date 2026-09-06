"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Code2, Sparkles, MessageSquare } from "lucide-react";
import Button from "./Button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  // Scroll detection for navbar elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open to prevent background scrolling
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [mobileMenuOpen]);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Close menu on pathname change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 lg:px-8",
          isScrolled ? "py-2 sm:py-3" : "py-3 sm:py-5"
        )}
      >
        <div
          className={cn(
            "max-w-6xl mx-auto flex items-center justify-between px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-2xl transition-all duration-300",
            isScrolled || mobileMenuOpen
              ? "bg-bg-card/90 backdrop-blur-xl border border-border-subtle shadow-xl shadow-black/50"
              : "bg-transparent border border-transparent"
          )}
        >
          {/* Brand Logo with Profile Avatar */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-2.5 group focus:outline-none min-h-[44px] py-1"
            aria-label="Naveen Kandula Home"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-accent-primary/40 shadow-sm group-hover:border-accent-cyan transition-all duration-300 shrink-0 bg-bg-elevated">
              <Image
                src="/images/naveen-profile.jpg"
                alt="Naveen Kandula"
                fill
                sizes="32px"
                className="object-cover object-top"
              />
            </div>
            <span className="font-bold tracking-tight text-base sm:text-lg text-text-primary group-hover:text-white transition-colors">
              NAVEEN<span className="text-accent-primary">.</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Desktop Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-2 rounded-lg text-xs font-medium transition-all duration-200",
                    isActive
                      ? "text-text-primary bg-white/[0.08] font-semibold"
                      : "text-text-secondary hover:text-text-primary hover:bg-white/[0.04]"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              size="sm"
              href="/contact"
              variant="primary"
              icon={<ArrowUpRight className="w-3.5 h-3.5" />}
            >
              Start a Project
            </Button>
          </div>

          {/* Mobile Menu Toggle (Minimum 48px Touch Target) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-12 h-12 rounded-xl text-text-secondary hover:text-text-primary hover:bg-white/[0.06] border border-border-subtle focus:outline-none active:scale-95 transition-all"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-accent-cyan" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-40 md:hidden bg-bg-primary/95 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6 overflow-y-auto animate-in fade-in duration-200"
        >
          {/* Navigation Links */}
          <div className="flex flex-col gap-2 my-auto max-w-sm w-full mx-auto">
            {/* Founder Profile Card inside Mobile Drawer */}
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/[0.08] mb-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-accent-primary/40 shrink-0 bg-bg-elevated shadow-md">
                <Image
                  src="/images/naveen-profile.jpg"
                  alt="Naveen Kandula"
                  fill
                  sizes="48px"
                  className="object-cover object-top"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-bold text-text-primary truncate">Naveen Kandula</div>
                <div className="text-[11px] font-mono text-accent-cyan truncate">Full Stack & AI Engineer</div>
              </div>
              <span className="w-2 h-2 rounded-full bg-accent-success shrink-0 animate-pulse" title="Available for hire" />
            </div>

            <div className="text-[11px] font-mono uppercase tracking-widest text-accent-cyan mb-1">
              Navigation Menu
            </div>

            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={cn(
                    "flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-semibold transition-all min-h-[52px]",
                    isActive
                      ? "bg-accent-primary/15 text-white border border-accent-primary/30"
                      : "text-text-secondary hover:text-white hover:bg-white/[0.04] border border-transparent"
                  )}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </Link>
              );
            })}
          </div>

          {/* Bottom Actions inside Mobile Drawer */}
          <div className="pt-6 border-t border-border-subtle flex flex-col gap-3 max-w-sm w-full mx-auto pb-safe">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full justify-center min-h-[48px] text-sm font-semibold"
              onClick={closeMobileMenu}
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              Start a Project
            </Button>

            <a
              href="https://wa.me/919705627977"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-xs font-mono text-accent-cyan transition-colors min-h-[44px]"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Chat on WhatsApp Directly</span>
            </a>

            <div className="text-center text-[11px] font-mono text-text-muted mt-1">
              Available for freelance contracts
            </div>
          </div>
        </div>
      )}
    </>
  );
}
