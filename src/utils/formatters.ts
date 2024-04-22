export const now = () => new Date();

export const formatYMDate = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short' }).format;

export const formatDateRange = (
  start: Date,
  end?: Date,
): string => {
  return `${formatYMDate(start)} - ${end ? formatYMDate(end) : 'Present'}`;
};

export const formatDateDuration = (start: Date, end = now(), showParentheses = false) => {
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  let durationString = '';
  if (years > 0) {
    durationString += `${years} ${years === 1 ? 'year' : 'years'}`;
  }
  if (years > 0 && months > 0) {
    durationString += ', ';
  }
  if (months > 0) {
    durationString += `${months} ${months === 1 ? 'month' : 'months'}`;
  }
  if (showParentheses && durationString) {
    durationString = '(' + durationString + ')';
  }
  return durationString;
};



