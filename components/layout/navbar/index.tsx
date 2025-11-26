"use client";

import { Container } from "@/components/container";
import { Link } from "@/components/link";
import { Typography } from "@/components/typohraphy";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { DesktopMenu } from "./desktop-menu";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  const scrollY = useScrollPosition();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  const isPastTransparentPoint =
    typeof window !== "undefined"
      ? scrollY > Math.round(window.innerHeight * 0.7)
      : false;

  const isTransparent =
    pathname === "/" && !isPastTransparentPoint && !isDropdownOpen;

  return (
    <Container
      component="nav"
      className={cn("flex justify-between items-center sm:items-baseline", {
        "overlay-white-y dark:text-background": isDropdownOpen,
        "bg-transparent text-background dark:text-foreground": isTransparent,
        "bg-background": !isDropdownOpen && !isTransparent,
      })}
    >
      {/* Logo/Name */}
      <Link href="/" className="py-2" underline="none">
        <Typography
          variant="h4"
          component="h1"
          disableGutters
          className="font-bold"
        >
          EMANUEL DELLA PIA
        </Typography>
      </Link>
      {/* Menu */}
      <DesktopMenu
        className="max-sm:hidden"
        isOpen={isDropdownOpen}
        setIsOpen={setIsDropdownOpen}
      />
      <MobileMenu
        className="sm:hidden"
        isOpen={isDropdownOpen}
        setIsOpen={setIsDropdownOpen}
      />
    </Container>
  );
}
