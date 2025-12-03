import { cn } from "@/lib/utils";
import { typography } from "@/lib/variants/typography";
import Image from "next/image";

type HeroImageProps = Pick<
  React.ComponentProps<typeof Image>,
  "alt" | "blurDataURL" | "priority" | "src"
> & {
  title?: string;
  description?: string;
};

export function HeroImage({
  title,
  description,
  alt,
  blurDataURL,
  priority,
  src,
}: HeroImageProps) {
  return (
    <figure className="group relative w-screen h-screen overlay-neutral-y">
      {/* Image */}
      <Image
        fill
        placeholder={blurDataURL ? "blur" : "empty"}
        className="object-cover"
        blurDataURL={blurDataURL}
        priority={priority}
        src={src}
        alt={alt}
      />
      <div className="absolute inset-0 overlay-neutral-y" />
      <figcaption className="absolute inset-x-0 bottom-0">
        <div className="container-fluid mx-auto py-6 text-background dark:text-foreground max-md:text-center min-h-40">
          <h3
            className={cn(
              typography({ variant: "h5", disableGutters: true }),
              "font-bold"
            )}
          >
            {title}
          </h3>
          <p
            className={cn(typography({ variant: "h6", disableGutters: true }))}
          >
            {description}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
