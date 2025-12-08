import { Link } from "@/components/link";
import { cn } from "@/lib/utils";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const socials = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/emanueldellapiafotograf",
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/emanuel.dellapia",
    icon: FaFacebookF,
  },
];

export function SocialLinks({
  className,
  ...props
}: Omit<React.HTMLAttributes<HTMLUListElement>, "children">) {
  return (
    <ul className={cn("flex gap-1", className)} {...props}>
      {socials.map((social) => {
        const Icon = social.icon;
        return (
          <li key={social.name}>
            <Link
              external
              href={social.url}
              className="inline-block p-2 no-underline"
              aria-label={social.name}
            >
              <Icon className="size-6" />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
