import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={cn(className)}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path d="M20 20 V 80 H 30 V 55 L 50 80 H 60 L 30 50 L 60 20 H 50 L 30 45 V 20 H 20 Z" />
      <path d="M60 20 V 80 H 70 V 30 L 90 80 H 100 V 20 H 90 V 70 L 70 20 H 60 Z" />
    </svg>
  );
}
