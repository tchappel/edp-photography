"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollThreshold({
  threshold,
  enabled = true,
}: {
  threshold?: number;
  enabled?: boolean;
}) {
  const [isBelowThreshold, setIsBelowThreshold] = useState<boolean>();
  const prevBelowRef = useRef<boolean | undefined>(undefined);

  useEffect(() => {
    if (!enabled || threshold === undefined) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const isBelow = scrollY > threshold;

          // Only update state if crossing threshold boundary
          if (isBelow !== prevBelowRef.current) {
            prevBelowRef.current = isBelow;
            setIsBelowThreshold(isBelow);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    // Check initial position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold, enabled]);

  return isBelowThreshold;
}
