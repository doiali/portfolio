'use client';
import classNames from 'classnames';
import { PolymorphicComponentPropWithRef, PolymorphicRef } from './types';
import React from 'react';

export type ButtonProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<
    C,
    {
      circle?: boolean,
      square?: boolean,
      fullWidth?: boolean,
      disabled?: boolean,
    }
  >;

type ButtonComponent = <C extends React.ElementType = 'button'>(
  props: ButtonProps<C>
) => React.ReactNode;

export const Button: ButtonComponent = React.forwardRef(
  function Button<C extends React.ElementType = 'button'>(
    {
      as, circle, disabled,
      square, className, fullWidth, ...rest }: ButtonProps<C>,
    ref?: PolymorphicRef<C>
  ) {
    const Component = as ?? 'button';
    return (
      <Component
        className={classNames('cm-btn', {
          'cm-btn-square': square,
        }, {
          'cm-btn-circle': circle,
        }, {
          'w-full': fullWidth,
        }, {
          'cm-btn-disabled': disabled,
        }, className)}
        disabled={disabled}
        {...rest}
      />
    );
  }
);