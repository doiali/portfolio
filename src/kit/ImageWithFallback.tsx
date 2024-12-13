'use client';
import React, { Ref, useState } from 'react';
import Image, { ImageProps } from 'next/image';

export type ImageWithFallbackProps =
  Omit<ImageProps, 'src'> & {
    src?: ImageProps['src'] | null;
    fallback: ImageProps['src'];
  };

function ImageWithFallback(
  { src, fallback, alt, onError, ...rest }: ImageWithFallbackProps,
  ref?: Ref<HTMLImageElement>,
) {
  const [isError, setIsError] = useState(false);
  return (
    <Image
      src={(isError ? fallback : src) ?? fallback}
      alt={alt}
      {...rest} ref={ref}
      onError={(e) => {
        setIsError(true);
        onError?.(e);
      }}
    />
  );
}


export default ImageWithFallback;