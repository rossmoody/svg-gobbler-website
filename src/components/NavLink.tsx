import Link from 'next/link'
import { PropsWithChildren } from 'react'

export function NavLink({ children, href }: PropsWithChildren<{ href: string }>) {
  return (
    <Link
      className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
      href={href}
    >
      {children}
    </Link>
  )
}
