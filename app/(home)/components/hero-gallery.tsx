"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import Image from "next/image";

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

export function HeroGallery() {
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
    <section className="relative">
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
        <div className="absolute bottom-10 right-40 z-10 flex gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-2 h-2 rounded-full border border-white transition-colors ${
                current === index ? "bg-white" : "bg-transparent"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
      {/* Gradient overlays */}
      {/* Scroll Hint */}
      <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-black/60 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black/60 to-transparent pointer-events-none" />
      <ChevronDown
        className="absolute bottom-4 left-1/2 h-18 w-18 text-white motion-safe:animate-bounce-fade"
        strokeWidth={0.5}
        aria-hidden
      />
    </section>
  );
}
