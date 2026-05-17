import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from './lib/auth/verifyToken';

export async function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value;
    const { pathname } = request.nextUrl;


    if (pathname.startsWith('/login')) {
        if (token) {
            const verified = await verifyToken(token);
            if (verified) {
                return NextResponse.redirect(new URL('/dashboard', request.url));
            }
        }
        return NextResponse.next();
    }


    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    const verified = await verifyToken(token);

    if (!verified) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*', '/login'],
};
