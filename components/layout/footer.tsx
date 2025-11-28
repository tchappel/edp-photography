import { Container } from "@/components/container";
import { Link } from "@/components/link";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";
import { SocialLinks } from "../social-links";

export function Footer() {
  return (
    <Container
      component="footer"
      className={cn(
        "grid grid-cols-1 justify-items-center items-center gap-2 sm:grid-cols-3",
        "py-4"
      )}
    >
      <SocialLinks className="sm:order-2" />
      <div className={cn("sm:order-3 sm:justify-self-end")}>
        <Link
          href={routes.contact}
          underline="none"
          variant="h6"
          className={cn("font-bold", "inline-block p-2")}
        >
          CONTACT
        </Link>
      </div>

      <Link
        href={routes.home}
        underline="none"
        variant="h6"
        className={cn(
          "font-bold",
          "inline-block p-2",
          "sm:order-1 sm:justify-self-start"
        )}
      >
        © EMANUEL DELLA PIA
      </Link>
    </Container>
  );
}
