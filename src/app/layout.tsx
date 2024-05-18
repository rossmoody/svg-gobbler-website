import '@/styles/tailwind.css'
import { GoogleAnalytics } from '@next/third-parties/google'
import clsx from 'clsx'
import { type Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import { PropsWithChildren } from 'react'

export const metadata: Metadata = {
  description:
    'SVG Gobbler is a browser extension for finding, optimizing, organizing, editing, and exporting SVGs like never before.',
  openGraph: {
    description:
      'SVG Gobbler is a browser extension for finding, optimizing, organizing, editing, and exporting SVGs like never before.',
    images: [
      {
        alt: 'SVG Gobbler - Find, optimize, organize, edit, and export SVGs like never before',
        height: 630,
        url: 'https://svggobbler.com/og-image.png',
        width: 1200,
      },
    ],
    title: 'SVG Gobbler - Find, optimize, organize, edit, and export SVGs like never before',
    type: 'website',
    url: 'https://svggobbler.com',
  },
  title: {
    default: 'SVG Gobbler - Find, optimize, organize, edit, and export SVGs like never before',
    template: '%s - SVG Gobbler',
  },
}

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter',
})

const lexend = Lexend({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-lexend',
})

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      className={clsx('h-full scroll-smooth bg-white antialiased', inter.variable, lexend.variable)}
      lang="en"
    >
      <body className="flex h-full flex-col">{children}</body>
      <GoogleAnalytics gaId="G-NEKXR2X9CT" />
    </html>
  )
}
