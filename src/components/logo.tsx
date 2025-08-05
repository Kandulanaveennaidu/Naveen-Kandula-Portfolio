import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={cn(className)}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M25 25h12.5v50H25z" fill="currentColor" stroke="none" />
      <path d="M42.5 50L62.5 25" />
      <path d="M42.5 50l20 25" />
      <path d="M62.5 25h12.5v50H62.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
