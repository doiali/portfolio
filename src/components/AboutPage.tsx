import PageContainer from './common/PageContainer';
import { experiences } from '@/data/experiences';
import ExperienceList from './common/ExperienceList';

export default function AboutPage() {
  return (
    <PageContainer>
      <h1 className="text-4xl font-bold">About Me</h1>
      <p className="mt-4">Hello, I am Alireza Bagheri.</p>
      <ExperienceList data={experiences} />
    </PageContainer>
  );
}