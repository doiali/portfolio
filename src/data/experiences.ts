export type Experience = {
  slug: string;
  title: string;
  company?: {
    title: string;
    link?: string;
    logo?: string;
  };
  links?: string[];
  location?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
};

export const experiences: Experience[] = [
  {
    slug: 'applylink-frontend-developer',
    title: 'Senior Frontend Developer',
    links: ['https://applylink.ai/'],
    company: {
      title: 'ApplyLink',
      link: 'https://applylink.ai/',
    },
    location: 'Canada (Remote)',
    startDate: '2023-05-01',
    endDate: '2024-03-01',
    description: 'Created a platform for students connecting students with each other and with universities',
  },
  {
    slug: 'nezaja-fullstack-developer',
    title: 'Fullstack Developer',
    company: {
      title: 'NEZAJA',
    },
    location: 'Tehran, Iran',
    startDate: '2021-06-01',
    endDate: '2023-04-01',
    description: 'Full stack creation of several  web applications (recruitment, evaluation, exam assessment, …) using React, FastAPI and SQL Server.'
  },
  {
    slug: 'filmnet-frontend-developer',
    title: 'Senior Frontend Developer',
    links: ['https://filmnet.ir/', 'https://tv.filmnet.ir/'],
    company: {
      title: 'Filmnet',
      link: 'https://filmnet.ir/'
    },
    location: 'Tehran, Iran',
    startDate: '2021-01-01',
    endDate: '2022-02-01',
    description: 'Led a team of 6 developers to create a platform for watching movies and TV shows',
  },
  {
    slug: 'petus-frontend-developer',
    title: 'Frontend Developer',
    company: {
      title: 'PETUS',
    },
    location: 'Tehran, Iran',
    startDate: '2020-06-01',
    endDate: '2021-01-01',
  }
];