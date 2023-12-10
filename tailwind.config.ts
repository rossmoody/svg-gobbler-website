import headlessuiPlugin from '@headlessui/tailwindcss'
import formsPlugin from '@tailwindcss/forms'
import { type Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [formsPlugin, headlessuiPlugin],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        display: 'var(--font-lexend)',
        sans: 'var(--font-inter)',
      },
      maxWidth: {
        '2xl': '40rem',
      },
    },
    fontSize: {
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      xs: ['0.75rem', { lineHeight: '1rem' }],
    },
  },
} satisfies Config
