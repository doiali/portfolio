import PageContainer from './common/PageContainer';
import { experiences } from '@/data/experiences';
import ExperienceList from './common/ExperienceList';
import EducationList from './common/EducationList';
import { educations } from '@/data/educations';
import HonorsList from './common/HonorsList';
import { honors } from '@/data/honors';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <PageContainer>
      <h1 className="text-4xl font-bold">About Me</h1>
      <div className="mt-4">
        <video
          className="w-[min(100%,500px)] mx-auto mb-2 lg:float-end lg:ms-4"
          poster="/videos/introduction.jpg"
          width="1920"
          height="1080"
          controls
          preload="none"
        >
          <source src="/videos/introduction.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="order-2 text-lg mt-4">
          Hi, I&apos;m Alireza Bagheri, 29 years old with over 4 years of experience as a Senior Frontend Developer. I specialize in ReactJS and Next.js.<br />
          I started programming during my mechanical engineering studies because I really liked it. For my master’s degree, I studied Mechatronics Engineering and worked on flying robots. After finishing school, I decided to become a web developer because I found it very interesting. <br />
          Today, I am proud of the great projects I have worked on. I am excited to keep working as a developer, make fast and beautiful applications, and learn more new things along the way.
        </p>
        <br className="clear-both" />
      </div>
      <ExperienceList data={experiences} />
      <EducationList data={educations} />
      <HonorsList data={honors} />
    </PageContainer>
  );
}