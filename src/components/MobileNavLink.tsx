import { Popover } from '@headlessui/react'
import Link from 'next/link'

export function MobileNavLink({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <Popover.Button as={Link} className="block w-full p-2" href={href}>
      {children}
    </Popover.Button>
  )
}
