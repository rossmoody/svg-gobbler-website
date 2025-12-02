import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    const response = await fetch('https://storage.googleapis.com/svg-gobbler/counter/counter.json')
    const data = await response.json()

    return NextResponse.json(
      { data },
      {
        headers: {
          'Cache-Control': 'no-store, max-age=0',
        },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Error fetching counter:', error)
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 })
  }
}
