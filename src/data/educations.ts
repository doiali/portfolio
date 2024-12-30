export type Education = {
  slug: string;
  field: string;
  degree?: string;
  school?: {
    title: string;
    link?: string;
    logo?: string;
  };
  location?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
};

export const educations: Education[] = [
  {
    slug: 'msc-sharif-university',
    field: 'Mechatronics Engineering',
    degree: 'Master of Science',
    school: {
      title: 'Sharif University of Technology',
      link: 'http://www.sharif.edu/',
    },
    location: 'Tehran, Iran',
    startDate: '2017-09-01',
    endDate: '2020-01-01',
    description: 'Design, fabrication and control of a tilting-rotor quadrotor as my MSc. project, Sharpening my skills in C++, MatLab, Micro controllers, building a real flying vehicle, programming all the systems and going beyond the ambitious project goals by actually getting that thing to FLY!!!',
  },
  {
    slug: 'bsc-sharif-university',
    field: 'Mechanical Engineering',
    degree: 'Bachelor of Science',
    school: {
      title: 'Sharif University of Technology',
      link: 'http://www.sharif.edu/',
    },
    location: 'Tehran, Iran',
    startDate: '2013-09-01',
    endDate: '2017-07-01',
  },
];