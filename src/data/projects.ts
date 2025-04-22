import 'server-only'
import { StaticImageData } from 'next/image'
import applylink_dashboard_helpboard_bookmarks from './gallery/applylink_dashboard_helpboard_bookmarks.png'
import applylink_dashboard_helpboard_overview from './gallery/applylink_dashboard_helpboard_overview.png'
import applylink_helpboard from './gallery/applylink_helpboard.png'
import applylink_helpboard_2 from './gallery/applylink_helpboard_2.png'
import applylink_home_en_dark from './gallery/applylink_home_en_dark.png'
import applylink_home_en_light from './gallery/applylink_home_en_light.png'
import applylink_home_fa_dark from './gallery/applylink_home_fa_dark.png'
import applylink_profile_hejazizo from './gallery/applylink_profile_hejazizo.png'
import applylink_event from './gallery/applylink_event.png'
import applylink_profile_hejazizo_experiences from './gallery/applylink_profile_hejazizo_experiences.png'
import applylink_roadmap from './gallery/applylink_roadmap.png'
import applylink_signup from './gallery/applylink_signup.png'
import oya_home from './gallery/oya_home.png'
import oya_report from './gallery/oya_report.png'
import oya_calendar from './gallery/oya_calendar.png'
import oya_clocks from './gallery/oya_clocks.png'
import oya_charts from './gallery/oya_charts.png'
import filmnet_home from './gallery/filmnet_home.jpg'
import filmnet_kids from './gallery/filmnet_kids.jpg'
import filmnet_single from './gallery/filmnet_single.jpg'
import filmnet_videos from './gallery/filmnet_videos.jpg'
import filmnet_profile from './gallery/filmnet_profile.jpg'
import tv_filmnet_home from './gallery/tv_filmnet_home.jpg'
import tv_filmnet_search from './gallery/tv_filmnet_search.jpg'
import tv_filmnet_single from './gallery/tv_filmnet_single.jpg'
import tv_filmnet_details from './gallery/tv_filmnet_details.jpg'
import tv_filmnet_login from './gallery/tv_filmnet_login.jpg'
import ab_home from './gallery/actionbitz/landing.png'
import ab_future from './gallery/actionbitz/future.png'
import ab_now from './gallery/actionbitz/now.png'
import ab_now_sm from './gallery/actionbitz/now-sm.png'
import ab_past_sm from './gallery/actionbitz/past-sm.png'
import ab_report_sm from './gallery/actionbitz/report-sm.png'
import colorsforge from './gallery/colorsforge.png'


export type Project = {
  slug: string
  title: string
  description?: string
  points?: string[]
  tools?: string[]
  links?: string[]
  gallery?: (StaticImageData)[]
  date?: string
}

export const getProjects: () => Project[] = () => [
  {
    slug: 'colorsforge',
    title: 'ColorsForge',
    description: 'Comprehensive color picker and color converter tools for modern CSS color spaces',
    points: [
      'supporting sRGB, HSL, HWB, LCH, Lab, OKLCH, OKLAB, XYZ and P3 colors spaces'
    ],
    tools: ['Next.js', 'Color.js'],
    date: '2025',
    links: ['https://colorsforge.com'],
    gallery: [
      colorsforge,
    ],
  },
  {
    slug: 'actionbitz',
    title: 'Actionbitz',
    description: 'An easy to use todo application, with powerful reports, aimed to boost productivity',
    points: [],
    tools: ['Next.js', 'NextAuth', 'PostgreSQL', 'Supabase', 'Prisma', 'React Query', 'Vercel'],
    date: '2025',
    links: ['https://actionbitz.com'],
    gallery: [
      ab_home,
      ab_now,
      ab_report_sm,
      ab_future,
      ab_past_sm,
      ab_now_sm,
    ],
  },
  {
    slug: 'pytopia',
    title: 'Pytopia',
    description: 'An educational platform with over 10K students',
    points: [
      'Blazingly fast with a 100% score on gtmatrix and lighthouse',
      'Using server components to reduce the bundle size and improve the performance',
      'All client-side interactions are handled by React-Query queries and mutations',
      'Dark and light themes',
      'Multiple languages support with Next-INTL',
    ],
    tools: ['Next.js', 'TailwindCSS', 'React-Query', 'Next-INTL'],
    date: '2024',
    links: ['https://pytopia.ai/en'],
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
  // {
  //   slug: 'gp',
  //   title: 'Internal Recruitment Platform',
  //   description: 'Recruitment and evaluation platform for hiring new employees.',
  //   points: [
  //     'Multiple micro frontend applications with a shared layout and authentication system',
  //     'Handling lots of large data tables by virtualizing them with react-window',
  //   ],
  //   tools: ['React.js', 'Material-UI', 'React-Router', 'SWR', 'FastAPI', 'SQLAlchemy', 'SQL Server'],
  //   date: '2023',
  // },
  // {
  //   slug: 'oya',
  //   title: 'OYA',
  //   description: 'A personal time tracking platform for logging and visualizing the time spent on different activities.',
  //   points: [
  //     'Data visualization with all kinds of charts and graphs',
  //     'Client side data caching with SWR',
  //     'Dark and light themes',
  //     'Support both Jalaali and Gregorian calendars'
  //   ],
  //   tools: ['React.js', 'Material-UI', 'React-Router', 'SWR', 'Nivo-Charts', 'FastAPI', 'SQLAlchemy', 'PostgreSQL'],
  //   date: '2023',
  //   links: ['https://github.com/doiali/oya/'],
  //   gallery: [
  //     oya_home,
  //     oya_report,
  //     oya_calendar,
  //     oya_clocks,
  //     oya_charts,
  //   ],
  // },
  {
    slug: 'filmnet',
    title: 'Film Net',
    description: 'A VOD platform with over 1 million users.',
    points: [
      'Using ISR to improve the performance of the website',
      'Complete test coverage with jest and React-Testing-Library',
    ],
    tools: ['Next.js', 'Emotion', 'swr', 'jest', 'React-Testing-Library'],
    date: '2022',
    links: ['https://filmnet.ir/', 'https://tv.filmnet.ir/'],
    gallery: [
      filmnet_home,
      filmnet_kids,
      filmnet_single,
      filmnet_videos,
      filmnet_profile,
    ],
  },
  // {
  //   slug: 'tv-filmnet',
  //   title: 'Film Net for TV',
  //   description: 'A streaming platform with over 1 million users.',
  //   points: [
  //     'Leveraged the power of newly introduced Next.js ISR',
  //     'Featuring spatial navigation using arrow keys',
  //     'Support a wide range of old browsers',
  //   ],
  //   tools: ['Next.js', 'Emotion', 'swr', 'jest', 'React-Testing-Library'],
  //   date: '2022',
  //   links: ['https://tv.filmnet.ir/'],
  //   gallery: [
  //     tv_filmnet_home,
  //     tv_filmnet_search,
  //     tv_filmnet_single,
  //     tv_filmnet_details,
  //     tv_filmnet_login,
  //   ],
  // },
  // {
  //   slug: 'project-manager',
  //   title: 'Project Manager App',
  //   description: 'A project manager application for managing projects, contracts and tasks.',
  //   tools: ['React.js', 'Material-UI', 'React-Router', 'Redux', 'React-Redux'],
  //   date: '2021',
  // },
  // {
  //   slug: 'petus',
  //   title: 'LDM Panel',
  //   description: 'The first smart gardening platform in the country',
  //   tools: ['React.js', 'Material-UI', 'React-Router', 'Redux', 'React-Redux'],
  //   date: '2020',
  // },
  // {
  //   slug: 'italian-dream',
  //   title: 'Italian Dream',
  //   description: 'A static website for guiding students to study in Italy. It was my the start of my journey in web development.',
  //   tools: ['HTML5', 'CSS3', 'JavaScript', 'BootStrap', 'JQuery', 'PHP'],
  //   date: '2020',
  // }
  {
    slug: 'more_projects',
    title: 'And many more',
    points: [
      'An internal recruitment platform for a large company, handling 400,000 recruitees. Made with React.js, FastAPI, SQLAlchemy and SQL Server.',
      'A university entrance exam scoring system, handling 20,000 participants every year.',
      'The first smart gardening platform in the country.',
      'A B2B project manager application for managing projects, contracts, clients and tasks.',
      'A tilt quadrotor flight simlulator, written in MatLab.',
      'A tilt quadrotor real flight control system, written in C++.',
      'A turbine simulation desktop application, written in C#.',
      'OYA, A personal time tracking platform for logging and visualizing the time spent on different activities, which is evolving to clockbitz.com in 2025.',
      'Design, build and code a smart wristband for parkinson patients, which detects shaking hand and locks the hand from shaking. Writen in C',
      'Robot path finder simalator using dijkstra algorithm, written in Matlab.',
      'Numerical differenital equation solver, written in Matlab.',
      'Heat transfer simulator, written in Matlab.',
      'Created image processing and transform tools in Matlab.',
      'Desktop games like tic tac toe and snake, written in C.',
    ],
    tools: ['React.js', 'Next.js', 'TypeScript', 'redux', 'react-router', 'Bootstrap', 'JQuery', 'PHP', 'MUI', 'DJango', 'C', 'C++', 'C#', 'MatLab', 'HTML', 'CSS', 'Vanilla JS'],
    date: '2013 - 2022',
  },
]