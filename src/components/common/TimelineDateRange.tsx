'use client';

import { formatDateRange, formatYMDate } from '@/utils/formatters';

export default function TimelineDateRange({ startDate, endDate, date }: {
  startDate?: string;
  endDate?: string;
  date?: string;
}) {
  const start = startDate ? new Date(startDate) : undefined;
  const end = endDate ? new Date(endDate) : new Date();
  return (
    <div className="absolute inline-flex top-0 rounded-md -translate-y-1/2 bg-paper">
      <span className="bg-background px-4 text-sm font-bold text-muted-foreground">
        {start && formatDateRange(start, end)}
        {!start && date && formatYMDate(new Date(date))}
      </span>
    </div>
  );
}