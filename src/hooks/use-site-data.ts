import { getDocument } from '@/server/get-document'
import { FormEvent, useState } from 'react'
import { SvgType, findSvg, svgFactory } from 'svg-gobbler-scripts'

type State = 'error' | 'initial' | 'loading' | 'success'

export const useSiteData = () => {
  const [state, setState] = useState<State>('initial')
  const [svgData, setSvgData] = useState<SvgType[]>()

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Reset state
    setState('loading')
    setSvgData(undefined)

    // Get form data
    const formData = new FormData(e.currentTarget)
    const url = formData.get('search-input') as string

    try {
      const { href, origin } = new URL(url)
      const response = await getDocument(href)
      const dom = new DOMParser().parseFromString(response, 'text/html')
      const documentData = findSvg(dom)
      const svgData = await svgFactory.process({ ...documentData, origin })
      setState('success')
      setSvgData(svgData)
    } catch (e) {
      console.log('Error: ', e)
      setState('error')
    }
  }

  return {
    onSubmit,
    state,
    svgData,
  }
}
