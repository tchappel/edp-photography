import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";

type ButtonProps = React.ComponentPropsWithoutRef<typeof Button>;
type LinkProps = React.ComponentPropsWithoutRef<typeof Link>;

type AppLinkProps = Omit<ButtonProps, "asChild" | "variant"> &
  Pick<LinkProps, "href"> & {
    external?: boolean;
  };

export function AppLink({
  external,
  children,
  href,
  className,
  ...buttonProps
}: AppLinkProps) {
  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Button
      variant="link"
      asChild
      className={cn("hover:no-underline", className)}
      {...buttonProps}
    >
      <Link href={href} {...linkProps}>
        {children}
      </Link>
    </Button>
  );
}
