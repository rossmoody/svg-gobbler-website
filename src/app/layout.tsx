import '@/styles/tailwind.css'
import clsx from 'clsx'
import { type Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import { PropsWithChildren } from 'react'

export const metadata: Metadata = {
  description:
    'Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.',
  title: {
    default: 'TaxPal - Accounting made simple for small businesses',
    template: '%s - TaxPal',
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
    </html>
  )
}
