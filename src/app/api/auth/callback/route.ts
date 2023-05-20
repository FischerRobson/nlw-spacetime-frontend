import { api } from '@/app/lib/api'
import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)

  const code = searchParams.get('code')

  const registerResponse = await api.post('/register', { code })

  const { token } = registerResponse.data
}
