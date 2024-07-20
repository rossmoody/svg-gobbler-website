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
      <h1 className="mt-12 text-xl font-semibold text-gray-900">
        Why didn&apos;t SVG Gobbler work for you?
      </h1>
      <p className="mt-2 text-sm text-gray-700">
        Help make the extension better by sharing your feedback. It goes directly to me, Ross, the
        creator of SVG Gobbler.
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
          className="mt-6 h-32 w-full rounded-md border border-gray-300 p-4 text-sm"
          minLength={25}
          name="feedback"
          placeholder="The extension wasn't able to...."
          required
        />
        <label className="mt-4 text-sm text-gray-700" htmlFor="email">
          Email (optional)
        </label>
        <input name="email" type="email" />
        <Button className="mt-4" color="red" type="submit">
          Submit feedback
        </Button>
      </form>
    </SlimLayout>
  )
}
