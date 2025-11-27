"use client";

import { Container } from "@/components/container";
import { Link } from "@/components/link";
import { SocialLinks } from "@/components/social-links";
import { Separator } from "@/components/ui/separator";
import { mainNav } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Fragment } from "react";

type Props = {
  className?: string;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

export function MobileMenu({ isOpen, setIsOpen, className }: Props) {
  const ToggleIcon = isOpen ? X : Menu;
  const toggleLabel = isOpen ? "Close menu" : "Open menu";

  return (
    <Container
      disableGutters={!isOpen}
      className={cn(
        {
          "fixed w-full h-screen inset-0 bg-background text-foreground": isOpen,
        },
        className
      )}
    >
      <div className={cn(isOpen && "flex w-full h-full flex-col items-center")}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 self-end"
          aria-label={toggleLabel}
        >
          <ToggleIcon className="size-10" />
        </button>
        {/* Navigation Items */}
        <nav className={cn(!isOpen && "hidden", isOpen && "w-full max-w-xs")}>
          {mainNav.map((page, index) => (
            <Fragment key={page.label}>
              <Link
                href={page.href}
                variant="h6"
                underline="none"
                className="block text-center py-4"
                onClick={() => setIsOpen(false)}
              >
                {page.label}
              </Link>
              {index < mainNav.length - 1 && (
                <Separator className="bg-current" />
              )}
            </Fragment>
          ))}
        </nav>
        {/* Social Icons */}
        <SocialLinks className={cn(!isOpen && "hidden", isOpen && "mt-auto")} />
      </div>
    </Container>
  );
}
