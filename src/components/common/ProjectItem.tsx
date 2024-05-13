import { Project } from '@/data/projects';

export default function ProjectItem({ data }: { data: Project; }) {
  const { slug, title, date, description, links, points, tools, gallery } = data;
  return (
    <div className="py-4 border-t">
      <h2 className="text-2xl font-bold">
        {title}
        {date && <span className="ms-2 font-normal text-xs text-bodySecondary">{date}</span>}
      </h2>
      {links && (
        <ul className="flex gap-2">
          {links.map((link, i) => (
            <li key={i}>
              <a href={link} target="_blank" rel="noreferrer" className="text-xs text-primary hover:underline">{link}</a>
            </li>
          ))}
        </ul>
      )}
      {description && (
        <>
          <p className="text-sm my-2 text-bodySecondary">{description}</p>
        </>
      )}
      {tools && (
        <ul className="flex flex-wrap gap-2 items-center my-2">
          {tools.map((tool, i) => (
            <li className="text-xs font-semibold p-1 px-2 bg-primary/25 rounded-full" key={i}>{tool}</li>
          ))}
        </ul>
      )}
      {points && (
        <ul className="list-disc list-inside mt-2">
          {points.map((point, i) => (
            <li className="text-sm text-bodySecondary" key={i}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  );
}