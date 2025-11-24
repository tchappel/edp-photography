import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";
import NextLink from "next/link";
import { AnchorHTMLAttributes } from "react";
import { typographyVariants } from "./typohraphy";

type NextLinkProps = React.ComponentProps<typeof NextLink>;

type LinkProps = VariantProps<typeof typographyVariants> & {
  underline?: "none" | "hover" | "always";
} & (
    | ({ external: true } & AnchorHTMLAttributes<HTMLAnchorElement>)
    | ({ external?: false } & NextLinkProps)
  );

export function Link({
  external,
  variant,
  align,
  noWrap,
  underline = "always",
  className,
  ...props
}: LinkProps) {
  const linkClassName = cn(
    typographyVariants({ variant, align, noWrap }),
    {
      "no-underline": underline === "none",
      "hover:underline": underline === "hover",
      underline: underline === "always",
    },
    className
  );

  if (external) {
    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      />
    );
  }

  return <NextLink className={linkClassName} {...(props as NextLinkProps)} />;
}
