export default function PageContainer({
  children
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="container mt-16 pt-4">
      {children}
    </div>
  );
}