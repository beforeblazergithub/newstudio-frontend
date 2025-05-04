import { NextResponse } from 'next/server'

const SUBSCRIBE_URL = 'https://email-sev-newstudio.onrender.com/subscribe'
const USERNAME      = 'shkeffyC789e'
const PASSWORD      = 'ibf79834nf4'

export async function POST(request) {
  const { email } = await request.json()
  if (!email) {
    return NextResponse.json({ error: 'Missing email' }, { status: 400 })
  }

  const res = await fetch(SUBSCRIBE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: USERNAME,
      password: PASSWORD,
      email
    })
  })

  if (!res.ok) {
    const text = await res.text()
    return NextResponse.json(
      { error: text || 'Subscribe failed' },
      { status: 502 }
    )
  }

  const text = await res.text()
  return NextResponse.json({ message: text })
}