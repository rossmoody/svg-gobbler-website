import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    const response = await fetch(
      `https://storage.googleapis.com/svg-gobbler/counter/counter.json`,
      {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
      },
    )
    const data = await response.json()
    return NextResponse.json({ data }, { status: 200 })
  } catch (error) {
    console.error('Error fetching counter:', error)
  }
}
