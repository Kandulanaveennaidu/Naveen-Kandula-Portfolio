import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "cyan" | "success" | "outline";
  size?: "sm" | "md";
  className?: string;
  dot?: boolean;
}

export default function Badge({
  children,
  variant = "default",
  size = "md",
  className,
  dot = false,
}: BadgeProps) {
  const variantStyles = {
    default: "bg-white/[0.04] text-text-secondary border-white/[0.08]",
    accent: "bg-accent-primary/10 text-accent-primary border-accent-primary/20",
    cyan: "bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20",
    success: "bg-accent-success/10 text-accent-success border-accent-success/20",
    outline: "bg-transparent text-text-muted border-white/[0.1]",
  };

  const dotColors = {
    default: "bg-text-muted",
    accent: "bg-accent-primary",
    cyan: "bg-accent-cyan",
    success: "bg-accent-success animate-pulse",
    outline: "bg-text-muted",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 rounded-full font-mono font-medium",
    md: "text-xs px-3 py-1 rounded-full font-mono font-medium",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border backdrop-blur-sm transition-all duration-200",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {dot && <span className={cn("w-1.5 h-1.5 rounded-full", dotColors[variant])} />}
      {children}
    </span>
  );
}
