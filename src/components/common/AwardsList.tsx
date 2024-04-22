import { faAward } from '@fortawesome/free-solid-svg-icons';
import TimelineSection, { TimelineBox } from './TimelineSection';
import { HonorType } from '@/data/honors';
import TimelineDateRange from './TimelineDateRange';

export default function HonorsList({ data }: { data: HonorType[]; }) {
  return (
    <TimelineSection title="Honors and Awards" icon={faAward}>
      {data.map((item) => <HonorItem key={item.slug} data={item} />)}
    </TimelineSection>
  );
}

export function HonorItem({ data }: { data: HonorType; }) {
  const {
    title, date, description
  } = data;
  return (
    <TimelineBox>
      <TimelineDateRange date={date} />
      <div className="flex flex-col">
        <h3 className="text-md font-bold">{title}</h3>
        <p className="text-sm text-bodySecondary">{description}</p>
      </div>
    </TimelineBox>
  );
}