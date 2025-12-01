"use client";

import { useKeyPress } from "@/hooks/use-key-press";
import { useCallback, useState } from "react";

export function useNavbar() {
  const [open, setOpen] = useState(false);

  const handleEscape = useCallback(
    (pressed: boolean) => {
      if (pressed && open) {
        setOpen(false);
      }
    },
    [open]
  );

  useKeyPress({ key: "Escape", callback: handleEscape });

  return { open, setOpen };
}
