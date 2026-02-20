import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const VALID_PATHS = new Set(["/", "/~offline"]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!VALID_PATHS.has(pathname)) {
    return NextResponse.redirect(new URL("/", request.url), { status: 301 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon|icons|og-image|sw\\.js|manifest\\.webmanifest|robots\\.txt|sitemap\\.xml).*)",
  ],
};
