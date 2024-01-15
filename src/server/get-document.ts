'use server'

export async function getDocument(url: string) {
  const controller = new AbortController()
  const signal = controller.signal
  setTimeout(() => controller.abort(), 2000)

  try {
    const response = await fetch(url, { signal })

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
