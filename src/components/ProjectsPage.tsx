import { projects } from '@/data/projects';
import PageContainer from './common/PageContainer';
import ProjectItem from './common/ProjectItem';

export default function ProjectsPage() {
  return (
    <PageContainer>
      <h1 className="text-4xl font-bold">Projects</h1>
      <div className="flex flex-col gap-4 my-8">
        {projects.map((project) => (
          <ProjectItem key={project.slug} data={project} />
        ))}
      </div>
    </PageContainer>
  );
}