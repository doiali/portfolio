import pytopia_logo from '@images/company/pytopia_logo.png';
import filmnet_logo from '@images/company/Filmnet_logo.png';
import coding_logo from '@images/company/coding.png';
import { StaticImageData } from 'next/image';


export type Experience = {
  slug: string;
  title: string;
  company?: {
    title: string;
    link?: string;
    logo?: string | StaticImageData;
  };
  links?: string[];
  location?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
  points?: string[];
};

export const experiences: Experience[] = [
  {
    slug: 'solopreneur',
    title: 'Solopreneur',
    links: ['https://actionbitz.com/','https://colorsforge.com/'],
    location: 'Hasselt, Belgium',
    startDate: '2025-01-01',
    points: [
      'Exploring entrepreneurship by independently turning ideas into scalable SaaS products.  ',
      'Created actionbitz.com, a unique todo app that doubles as a personal action journal.',
      'Created colorsforge.com, an open-source interactive color picker supporting modern spaces like OKLCH, OKLab, P3, XYZ and more.',
      'Adapted to modern tools: Next.js 15, React 19, Authjs, Prisma, PostgreSQL, Supabase, Vercel, shadcn-ui.',
      'Learning AI and LLM integrations.',
      
    ],
  },
  {
    slug: 'pytopia-frontend-developer',
    title: 'Senior Frontend Developer',
    links: ['https://pytopia.ai/'],
    company: {
      title: 'Pytopia',
      link: 'https://pytopia.ai/',
      logo: pytopia_logo,
    },
    location: 'Tehran, Iran',
    startDate: '2023-05-01',
    endDate: '2024-03-01',
    points: [
      'Built the whole frontend of a scalable platform as a sole developer in a fast paced startup (pytopia.ai an educational platform with over 10K students, applylink.ai).',
      'Leveraged the newest frontend technologies like Next.js v14, TailwindCSS v3 and React Query v5.',
      'Highest performance score on various metrics (100% overall score on GTmetrix).',
      'Blazingly fast user experience with almost instant back and forth navigation by using emerging 2023 features like server components, streaming, ISR, caching and high quality code.',
      'Doubling performance of the old Pytopia by a 3x bundle size reduction!'
    ],
  },
  {
    slug: 'filmnet-frontend-developer',
    title: 'Senior Frontend Developer',
    links: ['https://filmnet.ir/', 'https://tv.filmnet.ir/'],
    company: {
      title: 'Filmnet',
      link: 'https://filmnet.ir/',
      logo: filmnet_logo,
    },
    location: 'Tehran, Iran',
    startDate: '2021-01-01',
    endDate: '2022-02-01',
    points: [
      'Led a team of 6 developers to create filmnet.ir and tv.filmnet.ir using Next.js. Filmnet is a VOD platform with more than 1 million users.',
      'Mentored team members, leading to significant skill growth in 3 months.',
      'Collaboration with cross functional teams: design, backend, product, CTO.',
      'Achieved page load times of below 200ms with the emerging ISR technologies.',
    ],
  },
  {
    slug: 'freelance-frontend-developer',
    title: 'Frontend Developer',
    company: {
      title: 'Freelance',
      logo: coding_logo,
    },
    location: 'Tehran, Iran',
    startDate: '2020-01-01',
    endDate: '2021-01-01',
    points: [
      'Delivered 3 successful projects for clients and mastering HTML, CSS, JavaScript, Typescript, React.js, Redux and Material-UI along the way.',
      'Participated in backend development (Django) and API designs.',
      'Created the first smart gardening platform in the country, the LDM web application.',
      'Created a project manager application as my first large scale web app.',
    ],
  }
];
