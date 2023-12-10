import clsx from 'clsx'
import { useId } from 'react'

const formClasses =
  'block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-red-500 focus:bg-white focus:outline-none focus:ring-red-500 sm:text-sm'

function Label({ children, id }: { children: React.ReactNode; id: string }) {
  return (
    <label className="mb-3 block text-sm font-medium text-gray-700" htmlFor={id}>
      {children}
    </label>
  )
}

export function TextField({
  className,
  label,
  type = 'text',
  ...props
}: Omit<React.ComponentPropsWithoutRef<'input'>, 'id'> & { label: string }) {
  let id = useId()

  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <input id={id} type={type} {...props} className={formClasses} />
    </div>
  )
}

export function SelectField({
  className,
  label,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'select'>, 'id'> & { label: string }) {
  let id = useId()

  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <select id={id} {...props} className={clsx(formClasses, 'pr-8')} />
    </div>
  )
}
