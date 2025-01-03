import PageContainer from './common/PageContainer';
import { experiences } from '@/data/experiences';
import ExperienceList from './common/ExperienceList';
import EducationList from './common/EducationList';
import { educations } from '@/data/educations';
import HonorsList from './common/HonorsList';
import { honors } from '@/data/honors';
import ReactMarkdown from 'react-markdown';
import { about_intro } from '@/data/about';

export default function AboutPage() {
  return (
    <PageContainer>
      <h1 className="text-4xl font-bold">About Me</h1>
      <div className="mt-4">
        {/* <video
          className="w-[min(100%,500px)] mx-auto mb-2 lg:float-end lg:ms-4"
          poster="/videos/introduction.jpg"
          width="1920"
          height="1080"
          controls
          preload="none"
        >
          <source src="/videos/introduction.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <div className="order-2 text-lg mt-4">
          <ReactMarkdown
            className="prose dark:prose-invert"
          >{about_intro}</ReactMarkdown>
        </div>
      </div>
      <ExperienceList data={experiences} />
      <EducationList data={educations} />
      <HonorsList data={honors} />
    </PageContainer>
  );
}