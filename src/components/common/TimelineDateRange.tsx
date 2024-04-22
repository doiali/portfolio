'use client';

import { formatDateDuration, formatDateRange } from '@/utils/formatters';

export default function TimelineDateRange({ startDate, endDate }: {
  startDate?: string;
  endDate?: string;
}) {
  if (!startDate) return null;
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  return (
    <div className="absolute inline-flex top-0 rounded-md -translate-y-1/2 bg-paper">
      <span className="bg-secondary/5 px-4 text-sm font-bold text-secondary">
        {startDate ? formatDateRange(start, end) : <>&nbsp;</>}
        {/* {' '}
        {formatDateDuration(start, end, true)} */}
      </span>
    </div>
  );
}