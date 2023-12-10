import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'
import Link from 'next/link'

export default function NotFound() {
  return (
    <SlimLayout>
      <div className="flex">
        <Link aria-label="Home" href="/">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <p className="mt-20 text-sm font-medium text-gray-700">404</p>
      <h1 className="mt-3 text-lg font-semibold text-gray-900">Page not found</h1>
      <p className="mt-3 text-sm text-gray-700">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Button className="mt-10" href="/">
        Go back home
      </Button>
    </SlimLayout>
  )
}
