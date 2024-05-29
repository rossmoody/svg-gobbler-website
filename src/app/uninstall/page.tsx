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
        Real quick, why did you uninstall?
      </h1>
      <p className="mt-2 text-sm text-gray-700">
        Your feedback is important and it&apos;s critical we understand how SVG Gobbler didn&apos;t
        meet your needs.
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

        <Button className="mt-4" color="red" type="submit">
          Submit feedback
        </Button>
      </form>
    </SlimLayout>
  )
}
