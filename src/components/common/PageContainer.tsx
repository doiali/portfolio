export default function PageContainer({
  children
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="container mt-16 py-4 max-w-3xl">
      {children}
    </div>
  );
}