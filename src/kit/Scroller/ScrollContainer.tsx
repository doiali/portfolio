import React from 'react';
import { PolymorphicComponentPropWithRef, PolymorphicRef } from '../types';
import classNames from 'classnames';

export type ScrollContainerProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<C, {}>;

function ScrollContainer<C extends React.ElementType = 'div'>(
  { as, className, ...rest }: ScrollContainerProps<C>,
  ref?: PolymorphicRef<C>
) {
  const Component = as ?? 'div';
  return (
    <Component
      className={classNames(
        'overflow-x-scroll',
        'overflow-y-visible',
        '[&::-webkit-scrollbar]:hidden',
        className,
      )}
      {...rest} ref={ref}
    />
  );
}

export default ScrollContainer;