"use client";

import { Link } from "@/components/link";
import { Typography } from "@/components/typohraphy";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { mainNav } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

type DesktopMenuProps = React.ComponentProps<typeof Collapsible> & {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

export function DesktopMenu({
  isOpen,
  setIsOpen,
  className,
}: DesktopMenuProps) {
  const pathname = usePathname();

  const activePage = useMemo(() => {
    return mainNav.find((page) => page.href === pathname) ?? mainNav[0];
  }, [pathname]);

  const inactivePages = useMemo(() => {
    return mainNav.filter((page) => page.href !== pathname);
  }, [pathname]);

  return (
    <div className={cn("flex flex-col items-end", className)}>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="cursor-pointer group py-4">
          <div className="flex items-center gap-2 border-b border-current">
            <Typography
              variant="h6"
              component="h2"
              className="font-bold"
              disableGutters
            >
              {activePage.label}
            </Typography>
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform duration-200",
                isOpen && "rotate-180"
              )}
            />
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="flex flex-col items-end pb-8 space-y-4">
          {inactivePages.map((page) => (
            <Link
              key={page.label}
              href={page.href}
              variant="h6"
              className="font-bold"
              underline="none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {page.label}
            </Link>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
