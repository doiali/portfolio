/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import Script from 'next/script';
import { isProd } from '@/constants';

export default function GoogleTags() {
  return isProd ? (
    <>
      <Script id="google-tag-manager"
        strategy="beforeInteractive"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-81W1TJ7GQ8"
      />
      <Script id="google-tag" strategy="beforeInteractive"
      >
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-81W1TJ7GQ8');
`}
      </Script>
    </>
  ) : null;
};