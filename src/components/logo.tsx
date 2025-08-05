import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={cn(className)}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <g>
        <path d="M 20,80 L 20,20 L 25,20 L 45,45 L 45,20 L 50,20 L 50,80 L 45,80 L 25,55 L 25,80 L 20,80 Z" />
        <path d="M 55,80 L 55,20 L 80,20 L 80,25 L 60,25 L 60,75 L 80,75 L 80,80 L 55,80 Z" />
      </g>
    </svg>
  );
}
