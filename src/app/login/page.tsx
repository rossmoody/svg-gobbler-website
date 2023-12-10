'use client'

import { getHtml } from '@/server/get-html'
import { findSvg, svgFactory } from 'svg-gobbler-scripts'

export default function Login() {
  const getDomClient = async () => {
    const origin = 'https://svggobbler.com'
    const response = await getHtml(origin)
    const dom = new DOMParser().parseFromString(response, 'text/html')
    const documentData = findSvg(dom)
    const svgData = await svgFactory.process({ ...documentData, origin })
    console.log(svgData)
  }

  return (
    <div>
      <button onClick={getDomClient}>Get DOM</button>
    </div>
  )
}
