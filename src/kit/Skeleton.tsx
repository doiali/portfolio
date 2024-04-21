import cx from 'classnames';

export default function Skeleton({ className = '' }) {
  return (
    <div className={cx('rounded-md animate-pulse bg-body/30', className)} />
  );
};