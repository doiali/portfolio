export default function PageContainer({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={"container mt-16 py-4 max-w-3xl" + (className ? ` ${className}` : '')}>
      {children}
    </div>
  );
}