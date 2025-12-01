import { Link } from "@/components/link";
import { Typography } from "@/components/typohraphy";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";

export function NavbarBrand({ className }: { className?: string }) {
  return (
    <Link href={routes.home} className={cn("p-2", className)} underline="none">
      <Typography
        variant="h4"
        component="h1"
        disableGutters
        className="font-bold"
      >
        EMANUEL DELLA PIA
      </Typography>
    </Link>
  );
}
