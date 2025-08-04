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
        <path d="M 20,80 L 20,20 L 50,20 L 50,35 L 35,35 L 35,45 L 50,45 L 50,65 L 35,65 L 35,80 L 20,80 Z" />
        <path d="M 55,80 L 55,20 L 70,20 L 80,40 L 80,20 L 95,20 L 95,80 L 80,80 L 80,55 L 70,35 L 70,80 L 55,80 Z" />
      </g>
    </svg>
  );
}
