import Link from 'next/link';
import PageContainer from './common/PageContainer';
import { contactInfos } from '@/data/socials';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactMarkdown from 'react-markdown';
import { homepage_intro } from '@/data/about';


export default function HomePage() {
  return (
    <PageContainer>
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Hello World!</h1>
        <ReactMarkdown
          className="prose dark:prose-invert"
          components={{
            'a': ({ node, ...props }) => <Link {...props} className={props.className + " text-primary"} />,
          }}
        >{homepage_intro}</ReactMarkdown>
      </div>
      <ul className="flex flex-col gap-4 my-8">
        {contactInfos.map(({ icon, name, value, url }) => (
          <li key={name} className="flex items-center gap-4 text-lg">
            <FontAwesomeIcon icon={icon} className="w-6 h-6 text-primary" />
            <Link href={url} target='_blank'>
              <span>{value}</span>
            </Link>
          </li>
        ))}
      </ul>
      <br className="clear-both" />
    </PageContainer>
  );
}
