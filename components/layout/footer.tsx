import { Container } from "@/components/container";
import { Link } from "@/components/link";
import { routes } from "@/lib/routes";
import { SocialLinks } from "../social-links";

export function Footer() {
  return (
    <Container
      component="footer"
      className="flex w-full py-4 flex-col items-center gap-4 sm:grid sm:grid-cols-3"
    >
      <Link
        href={routes.home}
        underline="none"
        variant="h6"
        className="font-bold p-2 order-3 sm:order-1"
      >
        © EMANUEL DELLA PIA
      </Link>
      <SocialLinks className="order-1 sm:order-2" />
      <Link
        href={routes.contact}
        underline="none"
        variant="h6"
        className="font-bold p-2 order-3 sm:order-3 sm:justify-self-end"
      >
        CONTACT
      </Link>
    </Container>
  );
}
