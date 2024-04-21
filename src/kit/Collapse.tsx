import classNames from 'classnames';
import { PolymorphicComponentPropWithRef, PolymorphicRef } from './types';
import React, { Fragment } from 'react';
import { Transition } from '@headlessui/react';

export type CollapseProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<C, {
    open?: boolean;
    innerClassName?: string;
  }>;

type CollapseComponent = <C extends React.ElementType = 'div'>(
  props: CollapseProps<C>
) => React.ReactNode;

const Collapse: CollapseComponent = React.forwardRef(
  function Collapse<C extends React.ElementType = 'div'>(
    { as, className, children, innerClassName, open, ...rest }: CollapseProps<C>,
    ref?: PolymorphicRef<C>
  ) {
    const Component = as ?? 'div';
    return (
      <Transition
        as={Fragment}
        show={open}
        enter="overflow-hidden transition-[grid-template-rows] duration-300"
        enterFrom="grid-rows-[0fr]"
        enterTo="grid-rows-[1fr]"
        leave="transition-[grid-template-rows] duration-300"
        leaveFrom="grid-rows-[1fr]"
        leaveTo="overflow-hidden grid-rows-[0fr]"
        unmount={false}
        appear
      >
        <Component
          className={classNames(
            'grid basis-full',
            className
          )}
          {...rest} ref={ref}
        >
          <div className={classNames('min-h-0 min-w-0', innerClassName)}>
            {children}
          </div>
        </Component>
      </Transition>
    );
  }
);

export default Collapse;