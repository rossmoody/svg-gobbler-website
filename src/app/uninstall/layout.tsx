import backgroundImage from '@/images/background-auth.jpg'
import Image from 'next/image'
import { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="relative flex min-h-full justify-center md:px-12 lg:px-0">
      <div className="relative z-10 -mt-16 flex flex-1 flex-col justify-center bg-white px-4 py-10 shadow-2xl md:flex-none md:px-28">
        <main className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
          {children}
        </main>
      </div>
      <div className="hidden sm:contents lg:relative lg:flex-1">
        <Image
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          src={backgroundImage}
          unoptimized
        />
      </div>
    </div>
  )
}
