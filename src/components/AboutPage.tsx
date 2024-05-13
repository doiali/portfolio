import PageContainer from './common/PageContainer';
import { experiences } from '@/data/experiences';
import ExperienceList from './common/ExperienceList';
import EducationList from './common/EducationList';
import { educations } from '@/data/educations';
import HonorsList from './common/HonorsList';
import { honors } from '@/data/honors';

export default function AboutPage() {
  return (
    <PageContainer>
      <h1 className="text-4xl font-bold">About Me</h1>
      <p className="mt-4 max-w-2xl">
        Hi, I&apos;m Alireza Bagheri, 29 years old with over 4 years of experience as a Senior Frontend Developer. I specialize in ReactJS and Next.js.<br />
        I started programming during my mechanical engineering studies because I really liked it. For my master’s degree, I studied Mechatronics Engineering and worked on flying robots. After finishing school, I decided to become a web developer because I found it very interesting. <br />
        Today, I am proud of the great projects I have worked on. I am excited to keep working as a developer, make fast and beautiful applications, and learn more new things along the way.
      </p>
      <ExperienceList data={experiences} />
      <EducationList data={educations} />
      <HonorsList data={honors} />
    </PageContainer>
  );
}