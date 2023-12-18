'use client'

import { getDocument } from '@/server/get-html'
import clsx from 'clsx'
import { FormEvent, useState } from 'react'
import { SvgType, findSvg, svgFactory } from 'svg-gobbler-scripts'

import { Button } from './Button'

export function HeroSearch() {
  const [loading, setLoading] = useState(false)
  const [svgData, setSvgData] = useState<SvgType[]>()

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const formData = new FormData(e.currentTarget)
    const url = formData.get('search-input') as string

    try {
      const { href, origin } = new URL(url)
      const response = await getDocument(href)
      const dom = new DOMParser().parseFromString(response, 'text/html')
      const documentData = findSvg(dom)
      const svgData = await svgFactory.process({ ...documentData, origin })
      setSvgData(svgData)
    } catch (e) {
      console.log('Error: ', e)
    }

    setLoading(false)
  }

  return (
    <div className="mt-10 flex w-full flex-grow flex-col">
      <div className="mx-auto w-full max-w-2xl">
        <div className="relative flex-grow">
          <form onSubmit={onSubmit}>
            <label className="sr-only" htmlFor="search-input">
              Paste a URL
            </label>
            <input
              className="h-12 w-full rounded-full border-gray-300 text-slate-800"
              id="search-input"
              name="search-input"
              placeholder="Search a website for SVGs..."
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
      <div className="mt-12 flex flex-wrap gap-2">
        {svgData?.map((svg) => (
          <div
            className="h-40 w-40 rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
            key={svg.id}
          >
            <span
              className={clsx(
                '[& > svg]:absolute [& > svg]:inset-0 [& > svg]:inline-block relative inline-block w-full overflow-hidden pb-[100%] align-top',
              )}
              dangerouslySetInnerHTML={{ __html: svg.presentationSvg }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
