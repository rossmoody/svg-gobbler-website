import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'
import Link from 'next/link'

export default function ThankYou() {
  return (
    <SlimLayout>
      <div className="flex">
        <Link aria-label="Home" href="/">
          <Logo className="h-7 w-auto" />
        </Link>
      </div>
      <h1 className="mt-20 text-lg font-semibold text-gray-900">Thank you</h1>
      <p className="mt-3 text-sm text-gray-700">
        The feedback has been received. We appreciate you taking the time.
      </p>
      <Button className="mt-10" color="red" href="/">
        Go back home
      </Button>
    </SlimLayout>
  )
}
