'use server'

export async function getDocument(url: string) {
  const controller = new AbortController()
  const signal = controller.signal

  setTimeout(() => controller.abort(), 2000) // abort after 2 seconds

  try {
    const response = await fetch(url, { signal })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`)
    }

    switch (response.status) {
      case 200:
        return await response.text()
      default:
        throw new Error(`Unexpected HTTP response: ${response.status} ${response.statusText}`)
    }
  } catch (error) {
    throw error
  }
}
