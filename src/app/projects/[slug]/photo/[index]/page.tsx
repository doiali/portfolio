import 'server-only';
import PageContainer from '@/components/common/PageContainer';
import { getProjects } from '@/data/projects';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function Page({
  params: { slug, index },
}: {
  params: {
    slug: string;
    index: number;
  };
}) {
  const photo = getProjects().find((project) => project.slug === slug)?.gallery?.[index - 1];
  if (!photo) {
    notFound();
  }
  return (
    <PageContainer>
      <Image
        priority
        src={photo}
        alt=""
        className="w-full"
        placeholder='blur'
      />
    </PageContainer>
  );
}