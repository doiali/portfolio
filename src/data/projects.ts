import { StaticImageData } from 'next/image';

export type Project = {
  slug: string;
  title: string;
  description?: string;
  points?: string[];
  tools?: string[];
  links?: string[];
  gallery?: (string | StaticImageData)[];
  date?: string;
};

export const projects: Project[] = [
  {
    slug: 'applylink',
    title: 'ApplyLink',
    description: 'A platform for linking students with each other to facilitate the application process for universities.',
    points: [
      'Blazingly fast with a 100% score on gtmatrix and lighthouse',
      'Using server components to reduce the bundle size and improve the performance',
      'All client-side interactions are handled by React-Query queries and mutations',
      'Dark and light themes',
      'Multiple languages support with Next-INTL',
    ],
    tools: ['NextJS', 'Tailwind-CSS', 'React-Query', 'Next-INTL'],
    date: '2024',
    links: ['https://applylink.ai/'],
  },
  {
    slug: 'gp',
    title: 'NEZAJA Recruitment Platform',
    description: 'Recruitment and evaluation platform for NEZAJA',
    points: [
      'Multiple micro frontend applications with a shared layout and authentication system',
      'Handling lots of large data tables by virtualizing them with react-window',
    ],
    tools: ['ReactJS', 'Material-UI', 'React-Router', 'SWR', 'FastAPI', 'SQLAlchemy', 'SQL Server'],
    date: '2023',
  },
  {
    slug: 'oya',
    title: 'OYA',
    description: 'A personal time tracking platform for logging and visualizing the time spent on different activities.',
    points: [
      'Data visualization with all kinds of charts and graphs',
      'Client side data caching with SWR',
      'Dark and light themes',
      'Support both Jalaali and Gregorian calendars'
    ],
    tools: ['ReactJS', 'Material-UI', 'React-Router', 'SWR', 'Nivo-Charts', 'FastAPI', 'SQLAlchemy', 'PostgreSQL'],
    date: '2023',
    links: ['https://github.com/doiali/oya/'],
  },
  {
    slug: 'filmnet',
    title: 'Film Net',
    description: 'A platform for watching movies and TV shows.',
    points: [
      'Using ISR to improve the performance of the website',
      'Complete test coverage with jest and React-Testing-Library',
    ],
    tools: ['NextJS', 'Emotion', 'swr', 'jest', 'React-Testing-Library'],
    date: '2022',
    links: ['https://filmnet.ir/'],
  },
  {
    slug: 'tv-filmnet',
    title: 'Film Net for TV',
    description: 'A platform for watching movies and TV shows on TV.',
    points: [
      'Featuring spatial navigation using arrow keys',
      'Support a wide range of old browsers',
    ],
    tools: ['NextJS', 'Emotion', 'swr', 'jest', 'React-Testing-Library'],
    date: '2022',
    links: ['https://tv.filmnet.ir/'],
  },
  {
    slug: 'project-manager',
    title: 'Project Manager App',
    description: 'A project manager application for managing projects, contracts and tasks.',
    tools: ['ReactJS', 'Material-UI', 'React-Router', 'Redux', 'React-Redux'],
    date: '2021',
  },
  {
    slug: 'petus',
    title: 'LDM Panel',
    description: 'A panel for managing the LDM system for PETUS company.',
    tools: ['ReactJS', 'Material-UI', 'React-Router', 'Redux', 'React-Redux'],
    date: '2020',
  },
  {
    slug: 'italian-dream',
    title: 'Italian Dream',
    description: 'A website for guiding students to study in Italy.',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'BootStrap', 'JQuery', 'PHP'],
    date: '2020',
  }
];