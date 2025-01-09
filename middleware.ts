import { NextRequest, NextResponse } from "next/server";
// import { redirectSystemRoutes } from "./lib/appConfig";
import Cookies from "js-cookie";
import { USER_ROLE } from "@/utils/navigation";

const redirectSystemRoutes: { [key: string]: string } = {
  admin: "/dashboard",
  agent: "/dashboard",
};

export function middleware(request: NextRequest) {
  const userRole = Cookies.get("role");
  const redirectPath = redirectSystemRoutes[userRole as string];

  const url = request.nextUrl.clone();

  console.log("the user role is ", userRole);
  console.log("the redirect path is ", redirectPath);
  console.log("the url is ", url);

  if (!userRole && url.pathname === "/") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (userRole && url.pathname === "/") {
    return NextResponse.redirect(new URL(redirectPath, request.url));
  }

  if (userRole && url.pathname === "/dashboard") {
    return NextResponse.redirect(new URL(redirectPath, request.url));
  }

  if (userRole && url.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL(redirectPath, request.url));
  }

  if (!userRole && url.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.\\.svg$).)"],
};
