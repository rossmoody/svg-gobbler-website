'use client'

import { Container } from '@/components/Container'
import screenshotContacts from '@/images/screenshots/contacts.png'
import screenshotInventory from '@/images/screenshots/inventory.png'
import screenshotProfitLoss from '@/images/screenshots/profit-loss.png'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import Image, { type ImageProps } from 'next/image'

interface Feature {
  description: string
  icon: React.ComponentType
  image: ImageProps['src']
  name: React.ReactNode
  summary: string
}

const features: Array<Feature> = [
  {
    description:
      'Find SVGs from any site with ease. Store, optimize, and organize them into collections for easy access.',
    icon: () => <></>,
    image: screenshotInventory,
    name: 'Find',
    summary: 'Find SVGs from any site. Store, optimize, and organize them into collections',
  },
  {
    description:
      'Optimize, view, edit, and minify SVGs with SVGO. SVGs can be minified by removing unnecessary data, comments, and metadata manually in the editor.',
    icon: () => <></>,
    image: screenshotContacts,
    name: 'Optimize',
    summary:
      'Optimize your SVGs to reduce file size and improve the performance of your product or app',
  },
  {
    description:
      'Export as SVG, PNG, WEBP, JPEG and various other formats. Transform SVGs into minified Data URIs or React components with SVGR.',
    icon: () => (
      <path
        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    ),
    image: screenshotProfitLoss,
    name: 'Export',
    summary: 'Easily export your SVGs in a variety of formats',
  },
]

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
