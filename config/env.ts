import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_STRAPI_API_URL: z.url(),
  NEXT_PUBLIC_STRAPI_MEDIA_URL: z.url(),
});

export const env = envSchema.parse({
  NEXT_PUBLIC_STRAPI_API_URL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  NEXT_PUBLIC_STRAPI_MEDIA_URL: process.env.NEXT_PUBLIC_STRAPI_MEDIA_URL,
});
