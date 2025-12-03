import { Link } from "@/components/link";
import { SocialLinks } from "@/components/social-links";
import { routes } from "@/lib/routes";

export function Footer() {
  return (
    <footer className="container-fluid mx-auto grid grid-cols-1 md:grid-cols-3 justify-items-center items-center gap-2 py-4">
      <SocialLinks className="md:order-2" />
      <Link
        href={routes.contact}
        underline="none"
        variant="h6"
        className="
            md:order-3 md:justify-self-end md:-mr-2 p-2
            font-bold
          "
      >
        CONTACT
      </Link>

      <Link
        href={routes.home}
        underline="none"
        variant="h6"
        className="
          md:order-1 md:justify-self-start md:-ml-2 p-2
          font-bold
        "
      >
        © EMANUEL DELLA PIA
      </Link>
    </footer>
  );
}
