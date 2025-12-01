import { useEffect, useState } from "react";

export function useWindowHeight({ enabled = true }) {
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    if (!enabled || typeof window === "undefined") return;

    const handleResize = () => setHeight(window.innerHeight);

    // Subscribe first
    window.addEventListener("resize", handleResize);

    // Initialize state *after* subscribing
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [enabled]);

  return height;
}
