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
      answer: 'SVG Gobbler is a long running side project of Ross Moody.',
      question: 'Who maintains SVG Gobbler?',
    },
    {
      answer:
        'Issues, bug reports, and feature requests can be submitted on GitHub. It is a constantly evolving project and we are always looking for ways to improve it.',
      question:
        'Are there any known issues or limitations with the current version of SVG Gobbler?',
    },
  ],
  [
    {
      answer:
        'Yes. SVG Gobbler is open source and contributions are welcome. Follow the link to GitHub from the footer of this page.',
      question: 'Can I contribute to SVG Gobbler?',
    },
    {
      answer:
        'Feature requests can be submitted on GitHub. Follow the link from the header of this page.',
      question: 'I have an idea for SVG Gobbler, how do I share it?',
    },
    {
      answer:
        'SVG Gobbler is a browser extension for finding, optimizing, organizing, editing, and exporting SVGs.',
      question: 'What is SVG Gobbler and how does it work?',
    },
    {
      answer: 'Follow the link at the top of the page to install SVG Gobbler.',
      question: 'How do I install SVG Gobbler on my browser?',
    },
    {
      answer:
        'Not at this time. SVG Gobbler is exclusively for finding SVG content in desktop web browser.',
      question: 'Is SVG Gobbler compatible with mobile browsers?',
    },
  ],
  [
    {
      answer:
        'SVG Gobbler finds SVG content on a page in most standard rendering scenarios. There are some known issues with dynamic content especially related to CORS restrictions and embedded webpages. Additionally SVG content rendered from font icons is not currently found.',
      question: 'Can SVG Gobbler work on websites with dynamic content?',
    },

    {
      answer:
        'SVG Gobbler is open-source and free to use. The source code is available on GitHub for anyone to read and ensure the security and privacy is safe.',
      question: 'How does SVG Gobbler ensure the security and privacy of its users?',
    },
    {
      answer:
        'This open-source browser extension was made, and is intended to facilitate the downloading of SVG icons from websites for personal, educational, or legitimate professional use. Users are expected to respect intellectual property rights and should not use this tool for infringing upon copyrights or for commercial purposes without proper authorization.',
      question: 'Can I use SVG Gobbler for commercial purposes?',
    },
  ],
]
