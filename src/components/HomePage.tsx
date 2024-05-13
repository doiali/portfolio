import Link from 'next/link';
import PageContainer from './common/PageContainer';

export default function HomePage() {
  return (
    <PageContainer>
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mt-8">Hello World!</h1>
        <p className="text-xl mt-4">I&apos;m Alireza Bagheri and I welcome you to my humble website.</p>
        <p className="text-xl">Explore my site to learn about me, discover the <Link className="text-primary" href="/projects">projects</Link> I&apos;ve worked on, and understand my <Link className="text-primary" href="/about">experiences</Link>.</p>
        <p className="text-xl">Feel free to reach out if you want to connect or collaborate!</p>
      </div>
    </PageContainer>
  );
}
