import { getProjects } from '@/data/projects';
import PageContainer from './common/PageContainer';
import ProjectItem from './common/ProjectItem';

export default function ProjectsPage() {
  return (
    <PageContainer>
      <h1 className="text-4xl font-bold">Projects</h1>
      <div className="flex flex-col gap-4 mt-8 mb-16">
        {getProjects().map((project) => (
          <ProjectItem key={project.slug} data={project} />
        ))}
      </div>
    </PageContainer>
  );
}