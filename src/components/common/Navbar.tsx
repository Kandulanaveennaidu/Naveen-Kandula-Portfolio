"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Code2 } from "lucide-react";
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-4",
        isScrolled ? "py-3" : "py-5"
      )}
    >
      <div
        className={cn(
          "max-w-6xl mx-auto flex items-center justify-between px-5 py-2.5 rounded-2xl transition-all duration-300",
          isScrolled
            ? "bg-bg-card/85 backdrop-blur-md border border-border-subtle shadow-xl shadow-black/40"
            : "bg-transparent border border-transparent"
        )}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group focus:outline-none"
          aria-label="Naveen Kandula Portfolio Home"
        >
          <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-border-subtle flex items-center justify-center text-accent-primary group-hover:border-accent-primary/40 group-hover:bg-accent-primary/10 transition-all duration-300">
            <Code2 className="w-4 h-4" />
          </div>
          <span className="font-bold tracking-tight text-lg text-text-primary group-hover:text-white transition-colors">
            NAVEEN<span className="text-accent-primary">.</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200",
                  isActive
                    ? "text-text-primary bg-white/[0.06] font-semibold"
                    : "text-text-secondary hover:text-text-primary hover:bg-white/[0.03]"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Button */}
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

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/[0.05] border border-transparent focus:outline-none focus:border-border-subtle"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 rounded-2xl bg-bg-card/95 backdrop-blur-xl border border-border-subtle shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1 mb-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMobileMenu}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-white/[0.05] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-3 border-t border-border-subtle">
            <Button
              href="/contact"
              variant="primary"
              className="w-full justify-center"
              onClick={closeMobileMenu}
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              Start a Project
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
