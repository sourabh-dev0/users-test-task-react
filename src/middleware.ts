import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if the request is for the base route
  if (request.nextUrl.pathname === '/') {
    // Redirect to /users
    return NextResponse.redirect(new URL('/users', request.url));
  }

  // Allow the request to proceed if it's not for the base route
  return NextResponse.next();
}

// Specify the routes that should use this middleware
export const config = {
  matcher: '/',
};
