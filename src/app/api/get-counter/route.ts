import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const response = await fetch('https://storage.googleapis.com/svg-gobbler/counter/counter.json')
    const data = await response.json()
    return NextResponse.json({ data }, { status: 200 })
  } catch (error) {
    console.error('Error fetching counter:', error)
  }
}
