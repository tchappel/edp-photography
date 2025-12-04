import NextLink from "next/link";
import { AnchorHTMLAttributes } from "react";

type NextLinkProps = React.ComponentProps<typeof NextLink>;
type ExternalLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "target" | "rel"
>;

type LinkProps =
  | ({ external: true } & ExternalLinkProps)
  | ({ external?: false } & NextLinkProps);

export function Link({ external, ...props }: LinkProps) {
  if (external) {
    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        {...(props as ExternalLinkProps)}
      />
    );
  }

  return <NextLink {...(props as NextLinkProps)} />;
}
