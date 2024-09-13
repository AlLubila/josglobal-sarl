import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const adminToken = request.cookies.get('admin_token')?.value;

  // If there's no token, redirect to the unauthorized page
  if (!adminToken) {
    return NextResponse.redirect(new URL('/unauthorized', request.url));
  }

  // Proceed to the requested page if authenticated
  return NextResponse.next();
}

// Apply the middleware only to the /admin/dashboard route
export const config = {
  matcher: ['/admin/dashboard/:path*'],
};
