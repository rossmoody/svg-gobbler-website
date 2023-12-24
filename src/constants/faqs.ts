export type Faq = {
  answer: string
  question: string
}

export const faqs: Faq[][] = [
  [
    {
      answer: 'Yes, SVG Gobbler is free to use.',
      question: 'Is SVG Gobbler free?',
    },
    {
      answer:
        'Browser extensions are going through a rough patch with the introduction of manifest v3 from Chrome. A frozen version of SVG Gobbler is available for Firefox. We are working on a new version of SVG Gobbler that will work on all browsers.',
      question: 'What browsers does SVG Gobbler work on?',
    },
    {
      answer:
        'SVG Gobbler is a long running side project of <a href="https://www.rossmoody.com>Ross Moody</a>.',
      question: 'Who maintains SVG Gobbler?',
    },
  ],
  [
    {
      answer: '',
      question: 'Can I contribute to SVG Gobbler?',
    },
    {
      answer: '',
      question: 'I have an idea for SVG Gobbler, how do I share it?',
    },
    {
      answer:
        'Honestly not sure at all. We haven’t actually incorporated or anything, we just thought it sounded cool and made this website.',
      question: 'What is SVG Gobbler and how does it work?',
    },
  ],
  [
    {
      answer: '',
      question: 'Can SVG Gobbler work on websites with dynamic content?',
    },
    {
      answer: 'In life it’s really better to never expect anything at all.',
      question: 'Can we expect more inventory features?',
    },
    {
      answer:
        'Send us an email and we will send you a copy of our latest password spreadsheet so you can find your information.',
      question: 'I lost my password, how do I get into my account?',
    },
  ],
]
