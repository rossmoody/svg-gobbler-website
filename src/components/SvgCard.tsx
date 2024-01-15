import type { SvgType } from 'svg-gobbler-scripts'

type Props = {
  svg: SvgType
}

export const SvgCard = ({ svg }: Props) => {
  return (
    <div className="h-40 w-40 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="h-full w-full" dangerouslySetInnerHTML={{ __html: svg }} />
    </div>
  )
}
