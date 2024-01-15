import { Transition } from '@headlessui/react'

export const SkeletonLoader = () => (
  <Transition
    appear
    className="mt-12 flex max-w-4xl flex-wrap justify-center gap-3"
    enter="transition-all ease-linear duration-500"
    enterFrom="opacity-0 translate-y-1"
    enterTo="opacity-100 translate-y-0"
    show
  >
    {Array.from({ length: 10 }).map((_, i) => (
      <div className="h-40 w-40 rounded-lg border border-gray-200 bg-white p-4 shadow-sm" key={i}>
        <div className="h-full w-full animate-pulse rounded-lg bg-gray-200" />
      </div>
    ))}
  </Transition>
)
