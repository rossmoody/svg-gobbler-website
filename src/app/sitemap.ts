import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://svggobbler.com' // your real domain

  return [
    { changeFrequency: 'weekly', lastModified: new Date(), priority: 1, url: `${baseUrl}/` },
    {
      changeFrequency: 'monthly',
      lastModified: new Date(),
      priority: 0.8,
      url: `${baseUrl}/features`,
    },
    { changeFrequency: 'monthly', lastModified: new Date(), priority: 0.6, url: `${baseUrl}/faq` },
    {
      changeFrequency: 'yearly',
      lastModified: new Date(),
      priority: 0.3,
      url: `${baseUrl}/uninstall`,
    },
  ]
}
