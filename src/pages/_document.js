import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="/styles/bootstrap.min.css" />
        <link rel="stylesheet" href="/styles/plugins.css" />
        <link rel="stylesheet" href="/styles/swiper.css" />
        <link rel="stylesheet" href="/styles/style.css" />
        <link rel="stylesheet" href="/styles/coloring.css" />
        <link rel="stylesheet" href="/styles/colors/scheme-01.css" />

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
