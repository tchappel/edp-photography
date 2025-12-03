"use client";

import { Link } from "@/components/link";
import { SocialLinks } from "@/components/social-links";
import { Separator } from "@/components/ui/separator";
import { useFocusTrap } from "@/hooks/use-focus-trap";
import { useScrollLock } from "@/hooks/use-scroll-lock";
import { mainNav } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export function MobileMenu({
  open,
  setOpen,
  className,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  className?: string;
}) {
  useScrollLock(open);
  const trapRef = useFocusTrap<HTMLDivElement>(open);
  const pathname = usePathname();

  return (
    <div
      ref={trapRef}
      className={cn(
        open
          ? "fixed inset-0 flex flex-col bg-background text-foreground h-screen"
          : "hidden",
        className
      )}
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobileNavigationLabel"
      id="mobileNavigation"
    >
      <h2 id="mobileNavigationLabel" className="sr-only">
        Mobile Navigation
      </h2>
      <div className="container-fluid flex justify-end items-center h-14">
        <button
          onClick={() => setOpen(false)}
          className="p-2 -mr-2"
          aria-label="Close Mobile Navigation"
          aria-expanded={open}
          aria-controls="mobileNavigation"
        >
          <X className="size-8" strokeWidth={1} />
        </button>
      </div>

      <ul className="container-fluid flex-1 flex flex-col justify-center items-center overflow-y-auto">
        {mainNav.map((page, index) => {
          const isActivePage = page.href === pathname;
          return (
            <li key={page.label} className="w-full max-w-xs">
              <Link
                href={page.href}
                variant="h6"
                underline="none"
                className={cn(
                  "block text-center py-4",
                  isActivePage && "font-extrabold pointer-events-none"
                )}
                onClick={() => setOpen(false)}
                aria-current={isActivePage ? "page" : undefined}
              >
                {page.label}
              </Link>
              {index < mainNav.length - 1 && (
                <Separator className="bg-current" />
              )}
            </li>
          );
        })}
      </ul>
      <SocialLinks className="self-center py-4" />
    </div>
  );
}

export function MobileMenuTrigger({
  open,
  setOpen,
  className,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  className?: string;
}) {
  return (
    <button
      onClick={() => setOpen(true)}
      className={cn("inline-block p-2", className)}
      aria-label="Open Navigation Menu"
      aria-expanded={open}
      aria-controls="mobileNavigation"
    >
      <Menu className="size-8" strokeWidth={1} />
    </button>
  );
}
