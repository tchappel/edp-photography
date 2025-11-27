import { routes } from "./routes";

export type NavItem = {
  label: string;
  href: (typeof routes)[keyof typeof routes];
};

export const mainNav: readonly NavItem[] = [
  { label: "Home", href: routes.home },
  { label: "About", href: routes.about },
  { label: "Contact", href: routes.contact },
];
