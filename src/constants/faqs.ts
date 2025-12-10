export type Faq = {
  answer: string
  question: string
}

export const faqs: Faq[][] = [
  [
    {
      answer:
        'This extension works in all Chromium-based browsers including Google Chrome, Microsoft Edge, Brave, and others. It also works in Firefox.',
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
    {
      answer:
        'SVG Gobbler is free to use. There are no costs associated with downloading or using the extension.',
      question: 'Is SVG Gobbler free to use?',
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
      answer:
        'Not at this time. SVG Gobbler is exclusively for finding SVG content in desktop web browser.',
      question: 'Is SVG Gobbler compatible with mobile browsers?',
    },
    {
      answer:
        'This open-source browser extension was made, and is intended to facilitate the downloading of SVG icons from websites for personal, educational, or legitimate professional use. Users are expected to respect intellectual property rights and should not use this tool for infringing upon copyrights or for commercial purposes without proper authorization.',
      question: 'Can I use SVG Gobbler for commercial purposes?',
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
        'SVG Gobbler supports exporting SVGs individually or in bulk. Supported formats include SVG, PNG, and ZIP archives.',
      question: 'What export options does SVG Gobbler offer?',
    },
    {
      answer:
        'SVG Gobbler requires permissions to read and modify data on the websites you visit in order to find and extract SVG content. These permissions are necessary for the extension to function properly. We request the minimum permissions needed to provide the core functionality of the extension.',
      question: 'Why does SVG Gobbler require certain permissions in my browser?',
    },
  ],
]
