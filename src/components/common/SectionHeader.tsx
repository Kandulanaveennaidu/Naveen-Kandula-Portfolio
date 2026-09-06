import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-2xl",
        className
      )}
    >
      <div
        className={cn(
          "inline-flex items-center gap-2 mb-3 text-xs font-mono tracking-wider uppercase text-accent-cyan",
          align === "center" && "justify-center"
        )}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary leading-[1.15] mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-text-secondary text-base sm:text-lg leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
