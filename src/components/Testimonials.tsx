import { Container } from '@/components/Container'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'
import Image from 'next/image'

const testimonials = [
  [
    {
      author: {
        image: avatarImage1,
        name: 'Joyal',
        role: 'Chrome Web Store Review',
      },
      content:
        'This is the best extension to export SVGs compared to other extensions like SVG Grabber. Works smoothly. Nice UI.',
    },
    {
      author: {
        image: avatarImage4,
        name: 'Lemongrove',
        role: 'Firefox Add-ons Review',
      },
      content:
        "As a designer who often has to lay down on the floor and consider my life choices when trying to get my clients to send me vectorized logos, this already just in the first day I've had it has saved me hours of time!",
    },
  ],
  [
    {
      author: {
        image: avatarImage5,
        name: 'Mark Palmer',
        role: 'Chrome Web Store Review',
      },
      content:
        'Absolutely brilliant, as a graphic designer this makes it so easy to get logos quickly.',
    },
    {
      author: {
        image: avatarImage2,
        name: 'Chris Messina',
        role: 'Chrome Web Store Review',
      },
      content:
        "This is EXACTLY what I was looking for! It's so well done — and I love that it offers for optimized and un-optimized copy/download options.",
    },
  ],
  [
    {
      author: {
        image: avatarImage3,
        name: 'Justin Beasley',
        role: 'Chrome Web Store Review',
      },
      content:
        'Love this extension, and find that it works far better than anything else in the Chrome Web Store. Unlike the other tools, it has a great UI that visually indicates file properties that may matter to you, and elegantly hands things like CORS restrictions.',
    },
    {
      author: {
        image: avatarImage4,
        name: 'Edu Hermanns',
        role: 'Chrome Web Store Review',
      },
      content: 'This is brilliant, absolutely thank you.',
    },
  ],
]

function QuoteIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" height={78} width={105} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export function Testimonials() {
  return (
    <section
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
      id="testimonials"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Loved by over 50,000+ designers and developers
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            See what folks are saying about SVG Gobbler in reviews
          </p>
        </div>
        <ul
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
          role="list"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul className="flex flex-col gap-y-6 sm:gap-y-8" role="list">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <QuoteIcon className="absolute left-6 top-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            alt=""
                            className="h-14 w-14 object-cover"
                            height={56}
                            src={testimonial.author.image}
                            width={56}
                          />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
