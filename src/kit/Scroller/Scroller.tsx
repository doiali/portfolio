import classNames from 'classnames';
import { ReactNode, useState } from 'react';
import { Button } from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import ScrollContainer from './ScrollContainer';
import useScroller from './useScroller';

export default function Scroller({
  className = '',
  children = null as ReactNode,
  scrollerClassName = '',
}) {
  const [scrollerElement, setScrollerElement] = useState<HTMLDivElement | null>(null);
  const [contentElement, setContentElement] = useState<HTMLDivElement | null>(null);

  const {
    showButtons, showStart, showEnd, handleClick,
  } = useScroller({ scrollerElement, contentElement });

  return (
    <div className={classNames('flex items-center gap-2', className)}>
      {showButtons && (
        <Button
          onClick={() => handleClick('left')}
          disabled={!showStart} circle
          className={classNames('transition-opacity duration-300')}
        >
          <FontAwesomeIcon className="h-5" icon={faAngleLeft} />
        </Button>
      )}
      <ScrollContainer
        ref={setScrollerElement}
        className={classNames('block grow', scrollerClassName)}
      >
        <div ref={setContentElement} className="inline-flex">
          {children}
        </div>
      </ScrollContainer>
      {showButtons && (
        <Button
          onClick={() => handleClick('right')}
          disabled={!showEnd} circle
          className={classNames('transition-opacity duration-300')}
        >
          <FontAwesomeIcon className="h-5" icon={faAngleRight} />
        </Button>
      )}
    </div>
  );
}