import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Match case exactly so the published uppercase canonical never redirects to itself.
  if (request.nextUrl.pathname === "/blog/navines-beacon") {
    const destination = request.nextUrl.clone();
    destination.pathname = "/blog/Navines-beacon";
    return NextResponse.redirect(destination, 308);
  }
  return NextResponse.next();
}

export const config = { matcher: ["/blog/:path*"] };
