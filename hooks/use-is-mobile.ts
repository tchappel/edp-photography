import { useEffect, useState } from "react";

// --- Tailwind v4 default breakpoints ---
const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

// --- Generic media query hook ---
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia(query);
    const handler = () => setMatches(media.matches);

    // Subscribe first
    media.addEventListener("change", handler);

    // Initialize state *after* subscribing
    handler();

    return () => {
      media.removeEventListener("change", handler);
    };
  }, [query]);

  return matches;
}

// --- Tailwind breakpoint hook ---
function useBreakpoint(bp: keyof typeof breakpoints) {
  return useMediaQuery(`(min-width: ${breakpoints[bp]})`);
}

// --- Public hook: is mobile (< md) ---
export function useIsMobile() {
  return !useBreakpoint("md");
}
