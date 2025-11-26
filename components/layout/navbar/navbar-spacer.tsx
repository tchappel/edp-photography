"use client";
import { NAVBAR_HEIGTH } from "@/constants/layout";
import { usePathname } from "next/navigation";

export function NavbarSpacer() {
  const pathname = usePathname();
  return pathname === "/" ? null : (
    <div style={{ height: `${NAVBAR_HEIGTH}px` }} />
  );
}
