'use client'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import Link from 'next/link'
import { Fragment } from 'react'

import { Logomark } from './Logomark'
import { MobileNavLink } from './MobileNavLink'

export function Header() {
  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link aria-label="Home" href="#">
              <Logo className="hidden h-8 w-auto sm:inline" />
              <Logomark className="h-9 w-auto sm:hidden" />
            </Link>
            <div className="hidden md:gap-x-6 lg:flex">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
              <NavLink href="#faq">FAQ</NavLink>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <a
                className="inline-flex items-center rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                href="https://github.com/rossmoody/svg-gobbler"
              >
                <svg
                  aria-hidden="true"
                  className="me-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    fillRule="evenodd"
                  />
                </svg>
                Star on GitHub
              </a>
            </div>
            <Button
              color="red"
              href="https://chromewebstore.google.com/detail/svg-gobbler/mpbmflcodadhgafbbakjeahpandgcbch"
            >
              <span>
                Install extension<span className="hidden lg:inline"> free</span>
              </span>
            </Button>
            <div className="-mr-1 md:hidden">
              <Popover>
                <Popover.Button
                  aria-label="Toggle Navigation"
                  className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
                >
                  {({ open }) => (
                    <svg
                      aria-hidden="true"
                      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
                      fill="none"
                      strokeLinecap="round"
                      strokeWidth={2}
                    >
                      <path
                        className={clsx('origin-center transition', open && 'scale-90 opacity-0')}
                        d="M0 1H14M0 7H14M0 13H14"
                      />
                      <path
                        className={clsx('origin-center transition', !open && 'scale-90 opacity-0')}
                        d="M2 2L12 12M12 2L2 12"
                      />
                    </svg>
                  )}
                </Popover.Button>
                <Transition.Root>
                  <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
                  </Transition.Child>
                  <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Popover.Panel
                      as="div"
                      className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
                    >
                      <MobileNavLink href="#features">Features</MobileNavLink>
                      <MobileNavLink href="#testimonials">Testimonials</MobileNavLink>
                      <MobileNavLink href="#faq">FAQ</MobileNavLink>
                      <hr className="m-2 border-slate-300/40" />
                      <MobileNavLink href="https://github.com/rossmoody/svg-gobbler">
                        Star on GitHub
                      </MobileNavLink>
                    </Popover.Panel>
                  </Transition.Child>
                </Transition.Root>
              </Popover>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
