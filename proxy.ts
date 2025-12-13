import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { env } from "./config/env";

// This function can be marked `async` if using `await` inside
export function proxy(_request: NextRequest) {
  const response = NextResponse.next();

  // Allow Strapi admin to embed your site in an iframe
  // Set frame-ancestors to allow Strapi to embed the preview
  response.headers.set(
    "Content-Security-Policy",
    `frame-ancestors 'self' ${env.NEXT_PUBLIC_STRAPI_API_URL}`
  );

  return response;
}

export const config = {
  matcher: [
    // Apply to all routes except static files
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
