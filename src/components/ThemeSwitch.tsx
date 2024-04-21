'use client';
import cx from 'classnames';
import { useTheme } from 'next-themes';
import useMounted from '@/hooks/useMounted';
import Skeleton from '@/kit/Skeleton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import Swap from '@/kit/Swap';

export default function ThemeSwitch({
  className
}: {
  className?: string;
}) {
  const { setTheme, resolvedTheme } = useTheme();
  const toggleTheme = () => {
    if (resolvedTheme === 'dark') setTheme('light');
    else setTheme('dark');
  };
  const mounted = useMounted();
  if (!mounted) return <Skeleton className={cx('rounded-full h-6 w-6', className)} />;
  return (
    <>
      <Swap
        as="button"
        onElement={<FontAwesomeIcon className="h-5 w-5" icon={faMoon} />}
        offElement={<FontAwesomeIcon className="h-5 w-5" icon={faSun} />}
        onClick={toggleTheme}
        active={resolvedTheme === 'light'}
        className={cx(className)}
      />
    </>
  );
};