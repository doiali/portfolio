import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import PageContainer from './common/PageContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { experiences, Experience } from '@/data/experiences';
import { formatDateRange } from '@/utils/formatters';
import companyPlaceholder from '@images/company/company-placeholder.png';
import LinkOrBox from '@/kit/LinkOrBox';
import ImageWithFallback from '@/kit/ImageWithFallback';
import Link from 'next/link';


export default function AboutPage() {
  return (
    <PageContainer>
      <h1 className="text-4xl font-bold">About Me</h1>
      <p className="mt-4">Hello, I am Alireza Bagheri.</p>
      <ExperienceList data={experiences} />
    </PageContainer>
  );
}

function AboutSection({ title, icon, children }: {
  title: string;
  icon?: IconDefinition;
  children?: React.ReactNode;
}) {
  return (
    <div className="my-8 relative flex flex-col gap-6">
      <h2 className="text-2xl font-bold">
        {icon && <FontAwesomeIcon icon={icon} className="me-4" />}
        {title}
      </h2>
      {children}
    </div>
  );
};

function ExperienceList({ data }: { data: Experience[]; }) {
  return (
    <AboutSection title="Experiences" icon={faBriefcase}>
      {data.map(({ slug, title, startDate, endDate, company, description, links, location }) => {
        return (
          <div className="relative p-4 rounded-md bg-paper shadow-sm" key={slug}>
            {startDate && (
              <div className="absolute inline-flex top-0 rounded-md -translate-y-1/2 bg-paper">
                <span className="bg-secondary/5 px-4 text-sm font-bold text-secondary">
                  {formatDateRange(new Date(startDate), endDate ? new Date(endDate) : undefined)}
                </span>
              </div>
            )}
            <div className="flex items-start gap-4">
              <LinkOrBox href={company?.link} target="_blank" className="shrink-0">
                <ImageWithFallback
                  src={company?.logo}
                  fallback={companyPlaceholder}
                  alt={company?.title || ''}
                  sizes="40px"
                  width={40}
                  height={40}
                  className="object-contain w-10 h-10 rounded-lg"
                />
              </LinkOrBox>
              <div className="flex flex-col">
                <h3 className="text-lg font-bold">
                  <LinkOrBox href={company?.link} target="_blank" className="inline">
                    {company?.title}
                  </LinkOrBox>
                </h3>
                <h4 className="text-md font-bold text-bodySecondary">{title}</h4>
                <p className="text-xs text-bodySecondary flex flex-col mb-2">
                  {links?.map(link => (
                    <Link key={link} href={link} target="_blank">{link}</Link>
                  ))}
                </p>
                <p className="text-sm text-bodySecondary">{description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </AboutSection>
  );
}