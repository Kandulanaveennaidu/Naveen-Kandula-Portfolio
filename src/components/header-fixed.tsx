"use client";

import { useState, useEffect } from "react";
import { Menu, X, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import Logo from "./logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "#summary", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const getNavUrl = (href: string) => {
    if (isHomePage) {
      return href;
    } else {
      // If we're on any other page and the link is a hash link,
      // return to the homepage with the hash
      if (href.startsWith("#")) {
        return `/${href}`;
      }
      return href;
    }
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
          <Logo className="h-8 w-8 text-primary" />
          <span className="font-headline text-xl font-bold">
            Kandula Naveen
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={getNavUrl(item.href)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link href={getNavUrl("#contact")} className="hidden md:inline-flex">
            <Button variant="outline" size="sm">
              Let's Talk
            </Button>
          </Link>

          <Link href="/schedule-meeting" className="hidden md:inline-flex ml-2">
            <Button variant="outline" size="sm" className="flex items-center">
              <Video className="h-4 w-4 mr-1" />
              Meet
            </Button>
          </Link>

          <ThemeToggle />

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-screen border-t border-border" : "max-h-0"
        )}
      >
        <div className="bg-background/95 backdrop-blur-lg">
          <nav className="flex flex-col items-center gap-4 p-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={getNavUrl(item.href)}
                className="text-lg font-medium text-foreground hover:text-primary"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={getNavUrl("#contact")}
              onClick={closeMenu}
              className="w-full mt-4"
            >
              <Button variant="default" className="w-full">
                Let's Talk
              </Button>
            </Link>
            <Link
              href="/schedule-meeting"
              onClick={closeMenu}
              className="w-full mt-2"
            >
              <Button
                variant="outline"
                className="w-full flex items-center justify-center"
              >
                <Video className="h-4 w-4 mr-1" />
                Schedule a Meeting
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
