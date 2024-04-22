import classNames from 'classnames';
import { PolymorphicComponentPropWithRef, PolymorphicRef } from './types';
import React from 'react';
import Link from 'next/link';

export type LinkOrBoxProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<C, {
    href?: string;
  }>;

type LinkOrBoxComponent = <C extends React.ElementType = typeof Link>(
  props: LinkOrBoxProps<C>
) => React.ReactNode;

const LinkOrBox: LinkOrBoxComponent = React.forwardRef(
  function LinkOrBox<C extends React.ElementType = typeof Link>(
    { as, href, className, ...rest }: LinkOrBoxProps<C>,
    ref?: PolymorphicRef<C>
  ) {
    const Component = href ? Link : (as ?? 'div');
    return (
      <Component
        href={href ?? undefined}
        className={classNames(className)}
        {...rest} ref={ref}
      />
    );
  }
);

export default LinkOrBox;