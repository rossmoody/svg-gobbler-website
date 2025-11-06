import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'
import Link from 'next/link'

export default function UninstallPage() {
  return (
    <SlimLayout>
      <div className="flex">
        <Link aria-label="Home" href="/">
          <Logo className="h-7 w-auto" />
        </Link>
      </div>
      <h1 className="mt-12 text-2xl font-semibold text-gray-900">
        Are you super angry because SVG Gobbler sucks?
      </h1>
      <p className="mt-2 text-gray-700">
        Please let us know how bad it sucks and especially the site where it failed to meet your
        expectations.
      </p>
      <form
        action="/thank-you"
        data-netlify="true"
        method="POST"
        name="uninstall"
        netlify-honeypot="bot-field"
      >
        <textarea
          autoFocus
          className="mb-2 mt-6 h-32 w-full rounded-md border border-gray-300 p-4 text-sm"
          minLength={20}
          name="feedback"
          placeholder="The extension wasn't able to...."
          required
        />
        <div className="flex gap-2">
          <Button className="mt-4" color="red" type="submit">
            Send feedback
          </Button>
        </div>
      </form>
    </SlimLayout>
  )
}
