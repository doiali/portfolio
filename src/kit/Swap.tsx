import classNames from 'classnames';
import { PolymorphicComponentPropWithRef, PolymorphicRef } from './types';
import React, { ReactNode } from 'react';

export type SwapProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<C, {
    active?: boolean;
    onElement: ReactNode;
    offElement: ReactNode;
  }>;

type SwapComponent = <C extends React.ElementType = 'span'>(
  props: SwapProps<C>
) => React.ReactNode;

function Swap<C extends React.ElementType = 'span'>(
  { as, className, active, onElement, offElement, children, ...rest }: SwapProps<C>,
  ref?: PolymorphicRef<C>
) {
  const Component = as ?? 'span';
  return (
    <Component
      className={classNames(
        'relative inline-grid select-none cursor-pointer place-content-center',
        className)}
      {...rest} ref={ref}
    >
      <div className={classNames(
        'flex [grid-column-start:1] [grid-row-start:1] transition-[transform,opacity] duration-300', {
        'rotate-0 opacity-100': active,
        'opacity-0 rotate-45': !active
      })}>{onElement}</div>
      <div className={classNames(
        'flex [grid-column-start:1] [grid-row-start:1] transition-[transform,opacity] duration-300', {
        'opacity-0 -rotate-45': active
      })}>{offElement}</div>
    </Component>
  );
}

export default Swap;