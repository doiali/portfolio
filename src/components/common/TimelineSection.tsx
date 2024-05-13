import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function TimelineSection({ title, icon, children }: {
  title: string;
  icon?: IconDefinition;
  children?: React.ReactNode;
}) {
  return (
    <div className="my-8 relative flex flex-col gap-6">
      <h2 id={title.replace(/ /g, '-').toLowerCase()} className="text-2xl font-bold">
        {icon && <FontAwesomeIcon icon={icon} className="me-4" />}
        {title}
      </h2>
      {children}
    </div>
  );
};

export function TimelineBox({ children }: { children: React.ReactNode; }) {
  return (
    <div className="relative p-4 rounded-md bg-paper shadow-sm">
      {children}
    </div>
  );
}