import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Features } from '@/components/Features'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <CallToAction />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
