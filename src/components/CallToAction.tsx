import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'
import Image from 'next/image'

export function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-red-600 py-32" id="get-started-today">
      <Image
        alt=""
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        height={1244}
        src={backgroundImage}
        unoptimized
        width={2347}
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get started today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            It’s time to take control of your books. Buy our software so you can feel like you’re
            doing something productive.
          </p>
          <Button className="mt-10" color="white" href="/register">
            Get 6 months free
          </Button>
        </div>
      </Container>
    </section>
  )
}
