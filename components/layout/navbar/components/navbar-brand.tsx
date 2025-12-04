import { Link } from "@/components/link";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";
import { typography } from "@/lib/variants/typography";

export function NavbarBrand({ className }: { className?: string }) {
  return (
    <Link
      href={routes.home}
      className={cn("inline-block p-2 no-underline", className)}
    >
      <h1
        className={cn(
          typography({ variant: "h4", disableGutters: true }),
          "font-bold"
        )}
      >
        EMANUEL DELLA PIA
      </h1>
    </Link>
  );
}
