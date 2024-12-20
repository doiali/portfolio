import cx from 'classnames';

export default function Skeleton({ className = '' }) {
  return (
    <div className={cx('rounded-md animate-pulse bg-foreground/30', className)} />
  );
};