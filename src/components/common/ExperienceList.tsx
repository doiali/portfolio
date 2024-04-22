import ImageWithFallback from '@/kit/ImageWithFallback';
import LinkOrBox from '@/kit/LinkOrBox';
import Link from 'next/link';
import TimelineSection, { TimelineBox } from './TimelineSection';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { Experience } from '@/data/experiences';
import companyPlaceholder from '@images/company/company-placeholder.png';
import TimelineDateRange from './TimelineDateRange';

export default function ExperienceList({ data }: { data: Experience[]; }) {
  return (
    <TimelineSection title="Experiences" icon={faBriefcase}>
      {data.map((item) => <ExperienceItem key={item.slug} data={item} />)}
    </TimelineSection>
  );
}

export function ExperienceItem({ data }: { data: Experience; }) {
  const {
    title, startDate, endDate, company, description, links,
  } = data;
  return (
    <TimelineBox>
      <TimelineDateRange startDate={startDate} endDate={endDate} />
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
    </TimelineBox>
  );
}