import { ExperienceComponentProps, SocialMediaProps } from './interface'

export const NAME: string = 'Alvaro Austin'

export const DESCRIPTION_TEXT: string =
  'Inquisitive, energetic, skilled and knowledgeable computer science student with extensive knowledge of programming. Seeking to leverage solid skills in collaboration and communication. A committed programmer with the intention to contribute my expertise to be a dependable team member. Excited to find opportunities to improve myself.'

export const SOCIAL_MEDIA: SocialMediaProps[] = [
  {
    url: 'https://www.linkedin.com/in/alvaro-austin/',
    src: '/assets/icons/linkedin.svg',
    alt: 'linkedin',
  },
  {
    url: 'https://www.github.com/emilicos',
    src: '/assets/icons/github.svg',
    alt: 'github',
  },
  {
    url: 'https://www.gitlab.com/emilicos',
    src: '/assets/icons/gitlab.svg',
    alt: 'gitlab',
  },
]

export const WORK_EXPERIENCE: ExperienceComponentProps[] = [
  {
    logo: '/assets/icons/perak2023.svg',
    alt: 'perak2023',
    job: 'Senior Staff of Web Development PERAK 2023',
    workplace: 'PERAK 2023',
    interval: 'Desember 2022 - present',
    stack: 'Next.js, T3App, Tailwind CSS',
  },
  {
    logo: '/assets/icons/pemira2023.svg',
    alt: 'pemira2023',
    job: 'Web Developer PEMIRA 2022',
    workplace: 'PEMIRA 2022',
    interval: 'Oktober 2022 - Januari 2023',
    stack: 'Next.js, Material UI, NestJs',
  },
  {
    logo: '/assets/icons/educare2023.svg',
    alt: 'educare2023',
    job: 'VPIC of IT Development EDUCARE 2023',
    workplace: 'EDUCARE 2023',
    interval: 'September 2022 - Januari 2023',
    stack: 'Next.js, Material UI, Tailwind CSS, Django Rest Framework',
  },
  {
    logo: '/assets/icons/betis2023.svg',
    alt: 'betis2023',
    job: 'VPIC of Web Development BETIS 2023',
    workplace: 'BETIS 2023',
    interval: 'Oktober 2022 - Januari 2023',
    stack: 'Next.js, Tailwind CSS, Django Rest Framework',
  },
  {
    logo: '/assets/icons/oh2022.svg',
    alt: 'oh2022',
    job: 'Web Developer Open House Fasilkom UI 2022',
    workplace: 'Open House Fasilkom UI 2022',
    interval: 'Mei 2022 - Juli 2022',
    stack: 'React, Tailwind CSS, Express, Node.js, MongoDB',
  },
  {
    logo: '/assets/icons/okkui2022.svg',
    alt: 'okkui2022',
    job: 'Web Developer OKK UI 2022',
    workplace: 'OKK UI 2022',
    interval: 'Mei 2022 - Juli 2022',
    stack: 'React, Tailwind CSS, Express, Node.js, MongoDB',
  },
  {
    logo: '/assets/icons/bemfasilkomui.svg',
    alt: 'bemfasilkomui',
    job: 'Full Stack Developer BEM Fasilkom UI 2022',
    workplace: 'BEM Fasilkom UI 2022',
    interval: 'April 2022 - Januari 2023',
    stack:
      'React, Next.js, Styled Components, Tailwind CSS, Django Rest Framework, Go (golang), Chakra UI',
  },
]

export const PROJECT_DATA = [
  {
    identify: 'bem',
    title: 'BEM Fasilkom UI',
    description: `Website for the Computer Science Student Executive Board`,
    foto: ['/assets/images/bem-landing.png'],
    stack: ['React, Next.js, DRF, Go'],
  },
  {
    identify: 'okk',
    title: 'OKK UI',
    description: `Orientation website to familiarize incoming University of Indonesia students with campus life and resources`,
    foto: ['/assets/images/okk-landing.png'],
    stack: ['T3 App'],
  },
  {
    identify: 'ichall',
    title: 'I-Challenge',
    description: `An annual event organized by the Chemical Engineering Student Association of Brawijaya University.`,
    foto: ['/assets/images/ichall-landing.png'],
    stack: ['Next.js', 'DRF'],
  },
  {
    identify: 'educare',
    title: 'EDUCARE',
    description: `Website for software engineers enthusiast.`,
    foto: ['/assets/images/educare-landing.png'],
    stack: ['Next.js', 'DRF'],
  },
  {
    identify: 'betis',
    title: 'BETIS',
    description: `A free platform for students aiming for state university admission.`,
    foto: ['/assets/images/betis-landing.png'],
    stack: ['Next.js', 'DRF'],
  },
  {
    identify: 'open-house',
    title: 'Open House CS UI',
    description: `Website endorsing Open House Fasilkom UI 2022`,
    foto: ['/assets/images/oh-landing.png'],
    stack: ['Next.js', 'NestJS'],
  },
  {
    identify: 'pemira',
    title: 'PEMIRA CS UI',
    description: `Website for the Student Executive Board Election`,
    foto: ['/assets/images/pemira-landing.png'],
    stack: ['Next.js, NestJS'],
  },
]

export const SKILL = [
  {
    title: 'Databases',
    abilities: [
      {
        name: 'PostgreSQL',
        reference: 'https://www.postgresql.org/',
      },
      {
        name: 'SQLite',
        reference: 'https://www.sqlite.org/index.html',
      },
      {
        name: 'MongoDB',
        reference: 'https://www.mongodb.com/',
      },
    ],
  },
  {
    title: 'Languages',
    abilities: [
      {
        name: 'JavaScript',
        reference: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      {
        name: 'TypeScript',
        reference: 'https://www.typescriptlang.org/',
      },
      {
        name: 'Python',
        reference: 'https://www.python.org/',
      },
      {
        name: 'Go',
        reference: 'https://golang.org/',
      },
      {
        name: 'Kotlin',
        reference: 'https://kotlinlang.org/',
      },
      {
        name: 'Dart',
        reference: 'https://dart.dev/',
      },
    ],
  },
  {
    title: 'Frameworks',
    abilities: [
      {
        name: 'React',
        reference: 'https://reactjs.org/',
      },
      {
        name: 'Next.js',
        reference: 'https://nextjs.org/',
      },
      {
        name: 'Django',
        reference: 'https://www.djangoproject.com/',
      },
      {
        name: 'NestJs',
        reference: 'https://nestjs.com/',
      },
      {
        name: 'T3 App',
        reference: 'https://create.t3.gg/',
      },
      {
        name: 'Flutter',
        reference: 'https://flutter.dev/',
      },
      {
        name: 'Vue',
        reference: 'https://vuejs.org/',
      },
    ],
  },
]
