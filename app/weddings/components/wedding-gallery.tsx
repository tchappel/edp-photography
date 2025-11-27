"use client";

import { weddingGallery } from "@/lib/wedding-gallery";
import Image from "next/image";

import {
  RenderImageContext,
  RenderImageProps,
  RowsPhotoAlbum,
} from "react-photo-album";
import "react-photo-album/rows.css";

function renderNextImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height, index }: RenderImageContext
) {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <Image
        fill
        src={photo}
        alt={alt}
        title={title}
        sizes={sizes}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
        priority={index < 3}
      />
    </div>
  );
}

export function WeddingGallery() {
  const photos = weddingGallery.map((image) => ({
    src: image.url,
    width: image.width,
    height: image.height,
    alt: image.title,
    title: image.title,
  }));

  return (
    <>
      <RowsPhotoAlbum
        photos={photos}
        render={{ image: renderNextImage }}
        spacing={0}
        padding={0}
        targetRowHeight={(containerWidth) => {
          return containerWidth < 640
            ? containerWidth / 0.75
            : containerWidth / 2.25;
        }}
        rowConstraints={(containerWidth) => {
          return containerWidth < 640
            ? {
                maxPhotos: 1,
                minPhotos: 1,
              }
            : { maxPhotos: 3, minPhotos: 1 };
        }}
      />
    </>
  );
}
