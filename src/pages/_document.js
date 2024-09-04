import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script src="/js/plugins.js" strategy="beforeInteractive" />
        <Script src="/js/swiper.js" strategy="beforeInteractive" />
        <Script src="/js/main.js" strategy="lazyOnload" />
        <Script src="/js/custom-marquee.js" strategy="lazyOnload" />
        <Script src="/js/custom-swiper-1.js" strategy="lazyOnload" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
