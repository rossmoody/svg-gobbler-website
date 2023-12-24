import avatarChris from '@/images/avatars/avatar-chris.jpeg'
import avatarJoyal from '@/images/avatars/avatar-joyal.jpeg'
import avatarJustin from '@/images/avatars/avatar-justin.jpeg'
import avatarLorenzo from '@/images/avatars/avatar-lorenzo.jpeg'
import avatarRoman from '@/images/avatars/avatar-roman.jpeg'
import avatarTressley from '@/images/avatars/avatar-tressley.jpeg'
import { type StaticImageData } from 'next/image'

type Testimonial = {
  author: {
    image: StaticImageData
    name: string
    role: string
  }
  content: string
}

export const testimonials: Testimonial[][] = [
  [
    {
      author: {
        image: avatarTressley,
        name: 'Tressley Cahill',
        role: 'Chrome Web Store Review',
      },
      content:
        'This extension is much, much easier than inspecting the element and trying to grab SVG code (or those moments you find Base64 encoding...) Super useful and pumped to add this to my suite of tools.',
    },
    {
      author: {
        image: avatarJoyal,
        name: 'Joyal',
        role: 'Firefox Add-ons Review',
      },
      content:
        'This is the best extension to export SVGs compared to other extensions like SVG Grabber. Works smoothly. Nice UI.',
    },
  ],
  [
    {
      author: {
        image: avatarRoman,
        name: 'Roman Sciascia',
        role: 'Chrome Web Store Review',
      },
      content:
        'I often want to gobble all the SVGs. Where to start? How to collect? I am at a loss. Then along comes SVG Gobbler and now, wow. All the SVGs served up for me to gobble with the click of a button. Two thumbs up.',
    },
    {
      author: {
        image: avatarChris,
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
        image: avatarJustin,
        name: 'Justin Beasley',
        role: 'Chrome Web Store Review',
      },
      content:
        'Love this extension, and find that it works far better than anything else in the Chrome Web Store. Unlike the other tools, it has a great UI that visually indicates file properties that may matter to you, and elegantly hands things like CORS restrictions.',
    },
    {
      author: {
        image: avatarLorenzo,
        name: 'Lorenzo Cano Cesconetto',
        role: 'Chrome Web Store Review',
      },
      content: 'This extension is amazing! Thank you so much for building this up',
    },
  ],
]
