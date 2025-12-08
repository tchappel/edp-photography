import { Link } from "@/components/link";
import { getGlobal } from "@/data/global";
import { cn } from "@/lib/utils";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export async function SocialLinks({
  className,
  ...props
}: Omit<React.HTMLAttributes<HTMLUListElement>, "children">) {
  const { data: globalData } = await getGlobal();

  const socials = [
    { name: "Instagram", url: globalData.instagram, icon: FaInstagram },
    { name: "Facebook", url: globalData.facebook, icon: FaFacebookF },
  ];

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
