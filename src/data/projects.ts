import 'server-only';
import { StaticImageData } from 'next/image';
import applylink_dashboard_helpboard_bookmarks from './gallery/applylink_dashboard_helpboard_bookmarks.png';
import applylink_dashboard_helpboard_overview from './gallery/applylink_dashboard_helpboard_overview.png';
import applylink_helpboard from './gallery/applylink_helpboard.png';
import applylink_helpboard_2 from './gallery/applylink_helpboard_2.png';
import applylink_home_en_dark from './gallery/applylink_home_en_dark.png';
import applylink_home_en_light from './gallery/applylink_home_en_light.png';
import applylink_home_fa_dark from './gallery/applylink_home_fa_dark.png';
import applylink_profile_hejazizo from './gallery/applylink_profile_hejazizo.png';
import applylink_event from './gallery/applylink_event.png';
import applylink_profile_hejazizo_experiences from './gallery/applylink_profile_hejazizo_experiences.png';
import applylink_roadmap from './gallery/applylink_roadmap.png';
import applylink_signup from './gallery/applylink_signup.png';
import oya_home from './gallery/oya_home.png';
import oya_report from './gallery/oya_report.png';
import oya_calendar from './gallery/oya_calendar.png';
import oya_clocks from './gallery/oya_clocks.png';
import oya_charts from './gallery/oya_charts.png';
import filmnet_home from './gallery/filmnet_home.jpg';
import filmnet_kids from './gallery/filmnet_kids.jpg';
import filmnet_single from './gallery/filmnet_single.jpg';
import filmnet_videos from './gallery/filmnet_videos.jpg';
import filmnet_profile from './gallery/filmnet_profile.jpg';
import tv_filmnet_home from './gallery/tv_filmnet_home.jpg';
import tv_filmnet_search from './gallery/tv_filmnet_search.jpg';
import tv_filmnet_single from './gallery/tv_filmnet_single.jpg';
import tv_filmnet_details from './gallery/tv_filmnet_details.jpg';
import tv_filmnet_login from './gallery/tv_filmnet_login.jpg';


export type Project = {
  slug: string;
  title: string;
  description?: string;
  points?: string[];
  tools?: string[];
  links?: string[];
  gallery?: (StaticImageData)[];
  date?: string;
};

export const getProjects: () => Project[] = () => [
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
    tools: ['Next.js', 'TailwindCSS', 'React-Query', 'Next-INTL'],
    date: '2024',
    links: ['https://pytopia.ai/', 'https://applylink.ai/'],
    gallery: [
      applylink_home_en_dark,
      applylink_home_en_light,
      applylink_home_fa_dark,
      applylink_helpboard_2,
      applylink_event,
      applylink_profile_hejazizo,
      applylink_helpboard,
      // applylink_profile_hejazizo_experiences,
      applylink_roadmap,
      applylink_signup,
      applylink_dashboard_helpboard_bookmarks,
      // applylink_dashboard_helpboard_overview,
    ],
  },
  {
    slug: 'gp',
    title: 'NEZAJA Recruitment Platform',
    description: 'Recruitment and evaluation platform for NEZAJA',
    points: [
      'Multiple micro frontend applications with a shared layout and authentication system',
      'Handling lots of large data tables by virtualizing them with react-window',
    ],
    tools: ['React.js', 'Material-UI', 'React-Router', 'SWR', 'FastAPI', 'SQLAlchemy', 'SQL Server'],
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
    tools: ['React.js', 'Material-UI', 'React-Router', 'SWR', 'Nivo-Charts', 'FastAPI', 'SQLAlchemy', 'PostgreSQL'],
    date: '2023',
    links: ['https://github.com/doiali/oya/'],
    gallery: [
      oya_home,
      oya_report,
      oya_calendar,
      oya_clocks,
      oya_charts,
    ],
  },
  {
    slug: 'filmnet',
    title: 'Film Net',
    description: 'A platform for watching movies and TV shows.',
    points: [
      'Using ISR to improve the performance of the website',
      'Complete test coverage with jest and React-Testing-Library',
    ],
    tools: ['Next.js', 'Emotion', 'swr', 'jest', 'React-Testing-Library'],
    date: '2022',
    links: ['https://filmnet.ir/'],
    gallery: [
      filmnet_home,
      filmnet_kids,
      filmnet_single,
      filmnet_videos,
      filmnet_profile,
    ],
  },
  {
    slug: 'tv-filmnet',
    title: 'Film Net for TV',
    description: 'A streaming platform with over 1 million users.',
    points: [
      'Leveraged the power of newly introduced Next.js ISR',
      'Featuring spatial navigation using arrow keys',
      'Support a wide range of old browsers',
    ],
    tools: ['Next.js', 'Emotion', 'swr', 'jest', 'React-Testing-Library'],
    date: '2022',
    links: ['https://tv.filmnet.ir/'],
    gallery: [
      tv_filmnet_home,
      tv_filmnet_search,
      tv_filmnet_single,
      tv_filmnet_details,
      tv_filmnet_login,
    ],
  },
  {
    slug: 'project-manager',
    title: 'Project Manager App',
    description: 'A project manager application for managing projects, contracts and tasks.',
    tools: ['React.js', 'Material-UI', 'React-Router', 'Redux', 'React-Redux'],
    date: '2021',
  },
  {
    slug: 'petus',
    title: 'LDM Panel',
    description: 'The first smart gardening platform in the country',
    tools: ['React.js', 'Material-UI', 'React-Router', 'Redux', 'React-Redux'],
    date: '2020',
  },
  {
    slug: 'italian-dream',
    title: 'Italian Dream',
    description: 'A static website for guiding students to study in Italy. It was my the start of my journey in web development.',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'BootStrap', 'JQuery', 'PHP'],
    date: '2020',
  }
];