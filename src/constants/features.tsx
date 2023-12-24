import screenshotExport from '@/images/screenshots/export.jpg'
import screenshotFind from '@/images/screenshots/find.jpg'
import screenshotOptimize from '@/images/screenshots/optimize.jpg'
import { ImageProps } from 'next/image'

export type Feature = {
  description: string
  icon: React.ComponentType
  image: ImageProps['src']
  name: React.ReactNode
  summary: string
}

export const features: Feature[] = [
  {
    description:
      'Find SVGs from any site with ease. Store, optimize, and organize them into collections for easy access.',
    icon: () => (
      <path
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    image: screenshotFind,
    name: 'Find',
    summary: 'Find SVGs from any site and organize them into collections',
  },
  {
    description:
      'Optimize, view, edit, and minify SVGs with SVGO. SVGs can be minified by removing unnecessary data, comments, and metadata manually in the editor.',
    icon: () => (
      <path
        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    image: screenshotOptimize,
    name: 'Optimize',
    summary: 'Reduce bundle size and improve the performance or your site or app',
  },
  {
    description:
      'Export as SVG, PNG, WEBP, JPEG and various other formats. Transform SVGs into minified Data URIs or React components with SVGR.',
    icon: () => (
      <path
        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    image: screenshotExport,
    name: 'Export',
    summary: 'Easily export your SVGs in a variety of formats and sizes',
  },
]
