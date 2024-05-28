import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'
import Link from 'next/link'

export default function UninstallPage() {
  return (
    <div>
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
        meet your needs. <i>Include your email if you want us to follow up.</i>
      </p>
      <form data-netlify="true" method="POST" name="uninstall">
        <input name="form-name" type="hidden" value="uninstall" />
        <textarea
          autoFocus
          className="mt-6 h-32 w-full rounded-md border border-gray-300 p-4 text-sm"
          name="feedback"
          placeholder="The extension wasn't able to...."
        />
        <Button className="mt-4 w-full" color="red" type="submit">
          Submit feedback
        </Button>
      </form>
    </div>
  )
}
