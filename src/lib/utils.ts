import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatUrl(url: string, placeholder: string = "#"): string {
  if (!url || url.includes("[ADD")) {
    return placeholder;
  }
  return url;
}
