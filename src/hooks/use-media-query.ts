"use client";

import { useEffect, useState } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Ensure this code only runs on the client
    if (typeof window !== "undefined") {
      const media = window.matchMedia(query);

      // Update the state initially
      setMatches(media.matches);

      // Define a callback for handling changes
      const listener = () => {
        setMatches(media.matches);
      };

      // Add the listener
      media.addEventListener("change", listener);

      // Clean up
      return () => {
        media.removeEventListener("change", listener);
      };
    }
  }, [query]);

  return matches;
}
