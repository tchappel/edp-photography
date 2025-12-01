import { Container } from "@/components/container";
import { Link } from "@/components/link";
import { SocialLinks } from "@/components/social-links";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <Container
      component="footer"
      className={cn(
        "grid grid-cols-1 justify-items-center items-center gap-2 md:grid-cols-3",
        "py-4"
      )}
    >
      <SocialLinks className="md:order-2" />
      <div className={cn("md:order-3 md:justify-self-end md:-mr-2")}>
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
          "md:order-1 md:justify-self-start md:-ml-2"
        )}
      >
        © EMANUEL DELLA PIA
      </Link>
    </Container>
  );
}
