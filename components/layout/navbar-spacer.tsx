"use client";
import { routes } from "@/lib/routes";
import { usePathname } from "next/navigation";

export function NavbarSpacer() {
  const pathname = usePathname();
  return pathname === routes.home ? null : <div className="h-14" />;
}
