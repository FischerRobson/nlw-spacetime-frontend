import { api } from '@/app/lib/api'
import { NextRequest, NextResponse } from 'next/server'

const COOKIE_MAX_AGE = 60 * 60 * 24 * 30

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)

  const redirectTo = req.cookies.get('redirectTo')?.value

  const code = searchParams.get('code')

  const registerResponse = await api.post('/register', { code })

  const { token } = registerResponse.data

  const redirectUrl = redirectTo ?? new URL('/', req.url)

  return NextResponse.redirect(redirectUrl, {
    headers: {
      'Set-Cookie': `token=${token}; Path=/; max-age=${COOKIE_MAX_AGE}`,
    },
  })
}
