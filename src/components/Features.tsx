'use client'

import { Container } from '@/components/Container'
import { Feature, features } from '@/constants/features'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import Image from 'next/image'

function Feature({
  className,
  feature,
  isActive,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  feature: Feature
  isActive: boolean
}) {
  return (
    <div className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')} {...props}>
      <div
        className={clsx(
          'flex h-9 w-9 items-center justify-center rounded-lg text-white',
          isActive ? 'bg-red-600' : 'bg-slate-500',
        )}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <feature.icon />
        </svg>
      </div>
      <h3
        className={clsx('mt-6 text-sm font-medium', isActive ? 'text-red-600' : 'text-slate-600')}
      >
        {feature.name}
      </h3>
      <p className="mt-2 font-display text-xl text-slate-900">{feature.summary}</p>
      <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
    </div>
  )
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.summary}>
          <Feature className="mx-auto max-w-2xl" feature={feature} isActive />
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
            <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
              <Image alt="" className="w-full" sizes="52.75rem" src={feature.image} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop() {
  return (
    <Tab.Group as="div" className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <Tab.List className="grid grid-cols-3 gap-x-8">
            {features.map((feature, featureIndex) => (
              <Feature
                className="relative"
                feature={{
                  ...feature,
                  name: (
                    <Tab className="ui-not-focus-visible:outline-none">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                key={feature.summary}
              />
            ))}
          </Tab.List>
          <Tab.Panels className="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16">
            <div className="-mx-5 flex">
              {features.map((feature, featureIndex) => (
                <Tab.Panel
                  aria-hidden={featureIndex !== selectedIndex}
                  className={clsx(
                    'px-5 transition duration-500 ease-in-out ui-not-focus-visible:outline-none',
                    featureIndex !== selectedIndex && 'opacity-60',
                  )}
                  key={feature.summary}
                  static
                  style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                >
                  <div className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                    <Image alt="" className="w-full" sizes="52.75rem" src={feature.image} />
                  </div>
                </Tab.Panel>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" />
          </Tab.Panels>
        </>
      )}
    </Tab.Group>
  )
}

export function Features() {
  return (
    <section
      aria-label="Features for simplifying everyday business tasks"
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
      id="features"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Manage your SVG assets
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            SVG Gobbler makes it easy to find, organize, edit, and export SVGs
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
