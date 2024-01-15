'use client'

import { useSiteData } from '@/hooks/use-site-data'

import { Button } from './Button'
import { NoResults } from './NoResults'
import { SkeletonLoader } from './SkeletonLoader'
import { SvgCard } from './SvgCard'

export function HeroSearch() {
  const { loading, onSubmit, svgData } = useSiteData()

  return (
    <div className="mt-10 flex w-full flex-grow flex-col">
      <div className="mx-auto w-full max-w-2xl">
        <div className="relative flex-grow">
          <form onSubmit={onSubmit}>
            <label className="sr-only" htmlFor="search-input">
              Paste a URL
            </label>
            <input
              className="h-12 w-full rounded-full border-gray-300 pl-4 text-slate-800"
              id="search-input"
              name="search-input"
              placeholder="Search a website for SVG content"
              required
              type="url"
            />
            <Button
              className="absolute bottom-0 right-1 top-0 my-auto h-10 px-6"
              color="red"
              disabled={loading}
            >
              Search{loading && 'ing'}
              {loading && (
                <svg
                  height={32}
                  viewBox="0 0 100 100"
                  width={32}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
                    fill="currentColor"
                  >
                    <animateTransform
                      attributeName="transform"
                      attributeType="XML"
                      dur="1s"
                      from="0 50 50"
                      repeatCount="indefinite"
                      to="360 50 50"
                      type="rotate"
                    />
                  </path>
                </svg>
              )}
            </Button>
          </form>
        </div>
      </div>
      <div className="mt-12 flex flex-wrap justify-center gap-3">
        {loading && <SkeletonLoader />}
        {svgData?.length === 0 && <NoResults />}
        {svgData?.map((svg) => <SvgCard key={svg.id} svg={svg} />)}
      </div>
    </div>
  )
}
