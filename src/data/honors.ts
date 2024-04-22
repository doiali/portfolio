export type HonorType = {
  slug: string;
  title: string;
  date?: string;
  description?: string;
};

export const honors = [
  {
    slug: 'olympiad-physics-silver-medal',
    title: 'National Silver Medal of Physics Olympiad',
  },
  {
    slug: 'olympiad-mechanics',
    title: 'Ranked 12 in national MSc. Mechanical engineering Olympiad',
  },
  {
    slug: 'bsc-entry-exam',
    title: 'Ranked 121 among more than 500,000 participants in the nationwide university\'s entrance exam for BSc. degree',
  },
  {
    slug: 'msc-entry-exam',
    title: 'Ranked 18 in the nationwide University\'s entrance exam for mechatronics engineering MSc. degree',
  }
];