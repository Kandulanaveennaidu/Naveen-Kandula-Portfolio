import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "cyan";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  external = false,
  icon,
  iconPosition = "right",
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg cursor-pointer select-none group relative overflow-hidden active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";

  const variantStyles = {
    primary:
      "bg-accent-primary text-white hover:bg-accent-primary/90 shadow-[0_0_20px_rgba(124,92,255,0.3)] hover:shadow-[0_0_28px_rgba(124,92,255,0.5)] border border-accent-primary/40",
    secondary:
      "bg-bg-elevated text-text-primary hover:bg-white/[0.08] border border-border-subtle hover:border-white/20",
    outline:
      "bg-transparent text-text-secondary hover:text-text-primary border border-border-subtle hover:border-white/30 hover:bg-white/[0.03]",
    ghost:
      "bg-transparent text-text-secondary hover:text-text-primary hover:bg-white/[0.04]",
    cyan:
      "bg-accent-cyan/10 text-accent-cyan hover:bg-accent-cyan/20 border border-accent-cyan/30 shadow-[0_0_20px_rgba(34,211,238,0.2)]",
  };

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
  };

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="transition-transform duration-200 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="transition-transform duration-200 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {content}
    </button>
  );
}
