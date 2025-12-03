"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/images/hero-gallery/1.jpg",
  "/images/hero-gallery/2.jpg",
  "/images/hero-gallery/3.jpg",
] as const;

const plugins = [
  Fade(),
  Autoplay({
    delay: 6000,
    stopOnInteraction: true,
  }),
];

export function HeroGallery({
  className,
  ...props
}: Omit<React.ComponentProps<"section">, "children">) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap());
    };

    updateCurrent();
    api.on("select", updateCurrent);

    return () => {
      api.off("select", updateCurrent);
    };
  }, [api]);

  return (
    <section className={cn("relative", className)} {...props}>
      <Carousel
        className="w-full h-screen"
        opts={{ loop: true }}
        plugins={plugins}
        setApi={setApi}
      >
        <CarouselContent className="ml-0">
          {images.map((src, index) => (
            <CarouselItem key={index} className="h-screen basis-full pl-0">
              <div className="relative w-full h-full">
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  preload={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute inset-0 overlay-neutral-y pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 max-md:hidden">
        <div className="container-fluid mx-auto relative flex justify-end items-center h-15">
          <ChevronDown
            className={cn(
              "size-18 text-white motion-safe:animate-bounce-fade",
              "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            )}
            strokeWidth={0.5}
            aria-hidden
          />
          <div className="flex gap-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "w-2 h-2 rounded-full border border-white transition-colors",
                  current === index ? "bg-white" : "bg-transparent"
                )}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
