import { getDocument } from '@/server/get-document'
import { FormEvent, useState } from 'react'
import { SvgType, findSvg, svgFactory } from 'svg-gobbler-scripts'

export const useSiteData = () => {
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

  return {
    loading,
    onSubmit,
    svgData,
  }
}
