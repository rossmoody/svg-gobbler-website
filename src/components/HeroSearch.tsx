'use client'

import { getHtml } from '@/server/get-html'
import { useRef } from 'react'
import { findSvg, svgFactory } from 'svg-gobbler-scripts'

import { Button } from './Button'

export function HeroSearch() {
  const inputRef = useRef<HTMLInputElement>(null)

  const getDocumentData = async () => {
    try {
      const url = new URL(inputRef.current?.value ?? '')
      console.log(url)
      const response = await getHtml(url.href)
      const dom = new DOMParser().parseFromString(response, 'text/html')
      const documentData = findSvg(dom)
      const svgData = await svgFactory.process({ ...documentData, origin: url.href })
      console.log(svgData)
    } catch (e) {
      console.error('Invalid URL', e)
    }
  }

  return (
    <div className="mx-auto mt-10 flex max-w-2xl justify-center gap-x-6">
      <div className="relative flex-grow">
        <label className="sr-only" htmlFor="search-input">
          Paste a URL
        </label>
        <input
          className="h-12 w-full rounded-full border-gray-300 text-slate-800"
          id="search-input"
          placeholder="Search a website like github.com for SVGs..."
          ref={inputRef}
          type="url"
        />
        <Button
          className="absolute bottom-0 right-1 top-0 my-auto h-10 px-6"
          color="red"
          onClick={getDocumentData}
        >
          Search
        </Button>
      </div>
    </div>
  )
}
