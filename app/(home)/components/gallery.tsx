import { cn } from "@/lib/utils";
import Image from "next/image";
import { galleryImages } from "../data";

export function Gallery({
  className,
  ...props
}: Omit<React.ComponentProps<"section">, "children">) {
  return (
    <section className={cn("flex flex-wrap gap-0", className)} {...props}>
      {galleryImages.map((galleryImage, index) => (
        <div
          key={index}
          className={cn(
            "relative group cursor-pointer",
            galleryImage.type === "landscape"
              ? "basis-2/3 aspect-4/3"
              : "basis-1/3 aspect-3/4"
          )}
        >
          <Image
            src={galleryImage.src}
            alt={galleryImage.alt}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}
    </section>
  );
}
