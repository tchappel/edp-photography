"use client";

import { useEffect } from "react";

type UseKeyPressParams = {
  key: KeyboardEvent["key"];
  callback: (pressed: boolean, event: KeyboardEvent) => void;
};

export function useKeyPress({ key, callback }: UseKeyPressParams) {
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      const pressed = e.key === key;
      callback(pressed, e);
    };
    window.addEventListener("keydown", listener);
    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, [key, callback]);

  return key;
}
