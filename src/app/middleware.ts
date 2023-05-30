import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value

  if (!token) {
    return NextResponse.redirect(
      `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`,
      {
        headers: {
          'Set-Cookie': `redirectTo=${req.url}; Path=/; max-age=20; HttpOnly;`,
        },
      },
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/memories/:path*', // any route with /memories
}
