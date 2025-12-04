import { Link } from "@/components/link";
import { SocialLinks } from "@/components/social-links";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";
import { typography } from "@/lib/variants/typography";

export function Footer() {
  return (
    <footer className="container-fluid mx-auto grid grid-cols-1 md:grid-cols-3 justify-items-center items-center gap-2 py-4">
      <SocialLinks className="md:order-2" />
      <Link
        href={routes.contact}
        className={cn(
          "md:order-3 md:justify-self-end md:-mr-2 p-2",
          typography({ variant: "h6" }),
          "font-bold no-underline"
        )}
      >
        CONTACT
      </Link>

      <Link
        href={routes.home}
        className={cn(
          "md:order-1 md:justify-self-start md:-ml-2 p-2",
          typography({ variant: "h6" }),
          "font-bold no-underline"
        )}
      >
        © EMANUEL DELLA PIA
      </Link>
    </footer>
  );
}
