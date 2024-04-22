import ImageWithFallback from '@/kit/ImageWithFallback';
import LinkOrBox from '@/kit/LinkOrBox';
import TimelineSection, { TimelineBox } from './TimelineSection';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import educationPlaceholder from '@images/company/education-placeholder.png';
import TimelineDateRange from './TimelineDateRange';
import { Education } from '@/data/educations';

export default function EducationList({ data }: { data: Education[]; }) {
  return (
    <TimelineSection title="Education" icon={faGraduationCap}>
      {data.map((item) => <EducationItem key={item.slug} data={item} />)}
    </TimelineSection>
  );
}

export function EducationItem({ data }: { data: Education; }) {
  const {
    startDate, endDate, school, description, field, degree,
  } = data;
  return (
    <TimelineBox>
      <TimelineDateRange startDate={startDate} endDate={endDate} />
      <div className="text-bodySecondary flex items-start gap-4">
        <LinkOrBox href={school?.link} target="_blank" className="shrink-0">
          <ImageWithFallback
            src={school?.logo}
            fallback={educationPlaceholder}
            alt={school?.title || ''}
            sizes="40px"
            width={40}
            height={40}
            className="object-contain w-10 h-10 rounded-lg"
          />
        </LinkOrBox>
        <div className="flex flex-col">
          <h3 className="text-lg font-bold">
            <LinkOrBox href={school?.link} target="_blank" className="inline">
              {school?.title}
            </LinkOrBox>
          </h3>
          <h4 className="text-sm">
            {degree}, {field}
          </h4>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </TimelineBox>
  );
}