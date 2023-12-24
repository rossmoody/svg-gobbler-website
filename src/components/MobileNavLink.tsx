import { Popover } from '@headlessui/react'
import Link from 'next/link'
import { PropsWithChildren } from 'react'

export function MobileNavLink({ children, href }: PropsWithChildren<{ href: string }>) {
  return (
    <Popover.Button as={Link} className="block w-full p-2" href={href}>
      {children}
    </Popover.Button>
  )
}
