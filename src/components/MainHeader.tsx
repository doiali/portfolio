'use client';
import classNames from 'classnames';
import { memo, useEffect, useRef, useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { useSelectedLayoutSegment } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Collapse from '@/kit/Collapse';
import Swap from '@/kit/Swap';


export default function MainHeader() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [active, setActive] = useState(true);
  const [atTop, setAtTop] = useState(false);

  const prevTop = useRef(false);
  useEffect(() => {
    let prevScroll: number = window.scrollY;
    const handleScroll = (event?: any, initialCall = false) => {
      let c = window.scrollY;
      let diff = c - prevScroll;
      prevScroll = c;

      // handle show/hide
      if (diff < 0) {
        setActive(true);
      } else if (diff > 0) {
        setActive(false);
      }

      // handle atTop
      if ((diff || initialCall)) {
        if (c === 0) {
          prevTop.current = true;
          setAtTop(true);
        }
        else if (prevTop.current) {
          prevTop.current = false;
          setAtTop(false);
        }
      }
    };
    handleScroll(0, true);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <ClickAwayListener onClickAway={(e) => {
      if (isExpanded && e.target !== document.documentElement) {
        setIsExpanded(false);
      }
    }}>
      <div
        className={classNames(
          'me-[var(--removed-body-scroll-bar-size,0)]',
          'fixed inset-x-0 z-50 border-b',
          'transition-[top,background-color,box-shadow] duration-300', {
          'top-0': isExpanded || active,
          '-top-18': !active && !isExpanded,
          'bg-transparent': atTop && !isExpanded,
          'bg-background shadow-md': !atTop || isExpanded,
        })}
      >
        <div className="min-h-[64px] flex max-lg:flex-wrap items-center container overflow-hidden">
          <div className="flex h-16 basis-full items-center">
            <div className="hidden sm:block grow">
              <NavbarLinks onClose={() => setIsExpanded(false)} />
            </div>
            <div className="max-sm:grow" />
            <Swap
              as="button"
              onElement={<FontAwesomeIcon className="h-6 w-6" icon={faXmark} />}
              offElement={<FontAwesomeIcon className="h-6 w-6" icon={faBars} />}
              onClick={() => setIsExpanded(p => !p)}
              active={isExpanded}
              className={classNames(
                'sm:hidden',
              )}
            />
          </div>
          <Collapse open={isExpanded} className="sm:hidden">
            <NavbarLinks onClose={() => setIsExpanded(false)} />
          </Collapse>
        </div>
      </div>
    </ClickAwayListener>
  );
}

const links = [
  {
    href: '/', label: 'Home',
  },
  {
    href: '/', label: 'About',
  },
  {
    href: '/', label: 'Works',
  },
  {
    href: '/', label: 'Passions',
  },
] as const;

const NavbarLinks = memo(function NavbarLinks({ onClose }: { onClose?: () => void; }) {
  const segment = useSelectedLayoutSegment();
  return (
    <>
      <ul className="flex gap-2 max-sm:pb-4 sm:gap-4 max-sm:flex-col sm:items-center">
        {links.map(({ href, label, }) => {
          const isActive = href.slice(1) === segment;
          return (
            <li key={(href + label)} className="hover:text-primary text-sm">
              <Link
                onClick={onClose}
                className={classNames(
                  'gap-4 sm:gap-1 sm:pt-1 flex sm:flex-col items-center sm:border-b',
                  {
                    'text-primary border-primary': isActive,
                    'border-transparent': !isActive,
                  }
                )}
                href={href}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
});

