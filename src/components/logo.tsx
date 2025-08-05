import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={cn(className)}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path d="M25 20 V 80 H 35 V 55 L 55 80 H 67 L 45 50 L 67 20 H 55 L 35 45 V 20 H 25 Z" />
      <path d="M65 20 V 80 H 75 V 20 H 65 Z" />
    </svg>
  );
}
