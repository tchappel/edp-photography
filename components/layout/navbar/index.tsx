"use client";

import { Headroom, HeadroomProps } from "@/components/headroom";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { useScrollThreshold } from "@/hooks/use-scroll-threshold";
import { useWindowHeight } from "@/hooks/use-window-height";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { DesktopMenu, DesktopMenuTrigger } from "./components/desktop-menu";
import { MobileMenu, MobileMenuTrigger } from "./components/mobile-menu";
import { NavbarBrand } from "./components/navbar-brand";
import { useNavbar } from "./hooks/use-navbar";

export function Navbar() {
  const isMobile = useIsMobile();
  const { open, setOpen } = useNavbar();
  const pathname = usePathname();
  const isHomepage = pathname === routes.home;
  const windowHeight = useWindowHeight({ enabled: isHomepage });
  const opacityTreshold = windowHeight && windowHeight * 0.75;
  const isBelowOpacityThreshold = useScrollThreshold({
    enabled: isHomepage,
    threshold: opacityTreshold,
  });

  const isTransparent = isHomepage && !open && !isBelowOpacityThreshold;

  const headroomOptions = useMemo<HeadroomProps["options"]>(
    () => ({
      offset: {
        up: 100,
        down: 50,
      },
      tolerance: {
        up: 5,
        down: 0,
      },
      onUnpin: () => setOpen(false),
    }),
    [setOpen]
  );

  return (
    <Headroom options={headroomOptions}>
      <Collapsible open={open} onOpenChange={setOpen} asChild>
        <nav
          className={cn(
            "bg-background text-foreground",
            isTransparent &&
              "bg-transparent text-background dark:text-foreground",
            !isMobile && open && "overlay-white-y dark:text-background"
          )}
        >
          <div
            className={cn(
              "container-fluid h-14",
              "flex justify-between items-center"
            )}
          >
            <NavbarBrand className="-ml-2" />
            {isMobile ? (
              <MobileMenuTrigger
                open={open}
                setOpen={setOpen}
                className="-mr-2"
              />
            ) : (
              <CollapsibleTrigger asChild>
                <DesktopMenuTrigger open={open} className="-mr-2" />
              </CollapsibleTrigger>
            )}
          </div>
          {!isMobile && (
            <CollapsibleContent
              className={cn("container-fluid flex justify-end pb-10")}
            >
              <DesktopMenu setOpen={setOpen} className="-mr-2 w-34" />
            </CollapsibleContent>
          )}
        </nav>
      </Collapsible>
      {isMobile && <MobileMenu open={open} setOpen={setOpen} />}
    </Headroom>
  );
}
