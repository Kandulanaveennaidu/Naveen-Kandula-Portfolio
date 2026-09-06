"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full px-4 sm:px-6 lg:px-8",
          isScrolled ? "py-3 bg-bg-primary/85 backdrop-blur-md border-b border-border-subtle" : "py-5 sm:py-7 bg-transparent"
        )}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Left: Brand Identity */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-3 group focus:outline-none min-h-[44px]"
            aria-label="Naveen Kandula Homepage"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-border-strong group-hover:border-accent-primary transition-colors shrink-0 bg-bg-card">
              <Image
                src="/images/naveen-profile.jpg"
                alt="Naveen Kandula"
                fill
                sizes="32px"
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold tracking-tight text-sm sm:text-base text-text-primary group-hover:text-white transition-colors">
                NAVEEN KANDULA
              </span>
              <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider hidden sm:block">
                Software Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Center/Right Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-wider" aria-label="Primary Navigation">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-text-secondary hover:text-text-primary transition-colors py-2"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-text-primary text-bg-primary hover:bg-white text-xs font-mono font-medium uppercase tracking-wider transition-all duration-200 shadow-sm"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button (min 48px touch target) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-12 h-12 rounded-xl text-text-primary hover:bg-white/[0.05] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Clean Full-Screen Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-40 md:hidden bg-bg-primary/98 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6 overflow-y-auto"
        >
          <div className="flex flex-col gap-6 my-auto max-w-sm w-full mx-auto">
            <div className="text-[11px] font-mono uppercase tracking-widest text-text-muted">
              Navigation
            </div>

            <nav className="flex flex-col gap-3" aria-label="Mobile Menu Links">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary hover:text-accent-cyan transition-colors py-2 flex items-center justify-between border-b border-border-subtle"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-5 h-5 text-text-muted" />
                </Link>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-border-subtle flex flex-col gap-3 max-w-sm w-full mx-auto pb-safe">
            <Link
              href="/#contact"
              onClick={closeMobileMenu}
              className="w-full py-4 rounded-xl bg-text-primary text-bg-primary hover:bg-white font-semibold text-center text-sm uppercase tracking-wider transition-all min-h-[48px] flex items-center justify-center gap-2"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/919705627977"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="w-full py-3.5 rounded-xl border border-border-strong text-text-secondary hover:text-text-primary text-center text-xs font-mono uppercase tracking-wider transition-colors min-h-[44px] flex items-center justify-center gap-2"
            >
              <span>Message on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
