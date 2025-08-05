import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={cn(className)}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path d="M20 20 V 80 H 30 V 55 L 50 80 H 60 L 37.5 50 L 60 20 H 50 L 30 45 V 20 H 20 Z" />
      <path d="M60 20 L 60 80 H 70 V 45 L 85 80 H 95 L 75 40 L 95 20 H 85 L 70 40 V 20 H 60 Z" />
    </svg>
  );
}
