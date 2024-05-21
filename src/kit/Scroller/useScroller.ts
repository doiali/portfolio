'use client';
import { useEffect, useState } from 'react';

export type UseScrollerProps = {
  scrollerElement: HTMLElement | null;
  contentElement?: HTMLElement | null;
};

const useScroller = ({ scrollerElement, contentElement }: UseScrollerProps) => {
  const [showStart, setShowStart] = useState(false);
  const [showEnd, setShowEnd] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    if (!scrollerElement) return;

    const HandleResize = () => {
      const scrollerWidth = scrollerElement.clientWidth;
      const contentWidth = contentElement?.scrollWidth ?? scrollerElement.scrollWidth;
      if (contentWidth > scrollerWidth) setShowButtons(true);
      if (contentWidth <= scrollerWidth || window.innerWidth <= 576) setShowButtons(false);
      handleScroll();
    };

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollerElement;
      const atStart = scrollLeft === 0;
      const atEnd = scrollLeft >= scrollWidth - clientWidth - 2;
      if (atStart) setShowStart(false);
      else setShowStart(true);
      if (atEnd) setShowEnd(false);
      else setShowEnd(true);
    };

    HandleResize();
    handleScroll();
    const or = new ResizeObserver(HandleResize);
    or.observe(scrollerElement);
    if (contentElement) or.observe(contentElement);
    scrollerElement.addEventListener('scroll', handleScroll);
    return () => {
      or.disconnect();
      scrollerElement.removeEventListener('scroll', handleScroll);
    };
  }, [scrollerElement, contentElement]);

  const handleClick = (dir: 'left' | 'right') => {
    if (!scrollerElement) return;
    const { scrollLeft, clientWidth } = scrollerElement;
    const scrollVal = clientWidth * 0.75;
    scrollerElement.scroll({
      left: scrollLeft + (dir === 'right' ? scrollVal : -scrollVal),
      behavior: 'smooth',
    });
  };

  return { showStart, showEnd, showButtons, handleClick };
};

export default useScroller;