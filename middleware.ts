import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const token = await getToken({ req });
  const publicPaths = ["/", "/login"];

  console.log("Current path:", path);
  console.log("Token:", token);

  // Allow access to public paths
  if (publicPaths.includes(path)) {
    if (token) {
      console.log("User is logged in, redirecting to /rooms");
      return NextResponse.redirect(new URL("/rooms", req.nextUrl));
    }
    return NextResponse.next();
  }

  // Require authentication for non-public paths
  if (!token) {
    console.log("No token, redirecting to /login");
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // Special handling for /create route
  if (path === "/create") {
    if (token.role !== "ADMIN" && token.role !== "HOTEL_OWNER") {
      console.log("Unauthorized role, redirecting to /protected");
      return NextResponse.redirect(new URL("/protected", req.nextUrl));
    }
  }

//   // Allow access to all other routes for authenticated users
//   console.log("Proceeding to next middleware or page");
//   return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login", "/rooms", "/protected", "/create"],
};
