import Link from 'next/link';
import PageContainer from './common/PageContainer';
import Image from 'next/image';
import mypic from './sabalan.jpg';

export default function HomePage() {
  return (
    <PageContainer>
      <div>
        <Image
          src={mypic}
          className="w-[min(100%,300px)] mx-auto lg:float-right rounded-lg"
          alt="Alireza Bagheri"
        />
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mt-8">Hello World!</h1>
          <p className="text-xl mt-4">I&apos;m <b>Alireza Bagheri</b> and I welcome you to my humble website.</p>
          <p className="text-xl">Explore my site to learn about me, discover the <Link className="text-primary" href="/projects">projects</Link> I&apos;ve worked on, and understand my <Link className="text-primary" href="/about">experiences</Link>.</p>
          <p className="text-xl">Feel free to reach out if you want to connect or collaborate!</p>
        </div>
        <br className="clear-both" />
      </div>
    </PageContainer>
  );
}
