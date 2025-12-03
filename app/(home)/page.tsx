import { HeroGallery } from "@/components/hero-gallery";
import { PhotoGallery } from "@/components/photo-gallery";
import { homeGallery } from "@/lib/home-gallery";
import { homeHeroGallery } from "@/lib/home-hero-gallery";

export default function Home() {
  return (
    <>
      <HeroGallery photos={homeHeroGallery} />
      <PhotoGallery photos={homeGallery} />
    </>
  );
}
