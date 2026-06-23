import { createSupabaseServerClient } from "@/lib/supabase/server-client";
import { type NextRequest, NextResponse } from "next/server";

export default async function proxy(request: NextRequest) {
  const response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { pathname } = request.nextUrl;

  const isAuthPage = pathname === "/";

  // Redirect non-authenticated users To Login Page In tHe Start
  if (!user && isAuthPage) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Redirect non-authenticated users To Login Page In tHe Start
  if (user && !isAuthPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return response;
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
