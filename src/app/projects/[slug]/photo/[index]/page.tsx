import 'server-only';
import PageContainer from '@/components/common/PageContainer';
import { getProjects } from '@/data/projects';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

type Props = {
  params: Promise<{
    slug: string;
    index: number;
  }>;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  // read route params
  const { slug } = await params;
  const title = getProjects().find((project) => project.slug === slug)?.title;

  return {
    title: `Alireza Bagheri | Projects | ${title || 'Galery'}`,
  };
}

export default async function Page({ params }: Props) {
  const { slug, index } = await params;
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