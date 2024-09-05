import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
				<meta name="description" content="Discover the latest electric scooters for a sustainable and fast urban commute. Compare models, reviews, and find the perfect eScooter for you." />
				<meta name="keywords" content="eScooter, electric scooter, urban mobility, sustainable transport, scooter reviews, best eScooters" />
				<meta name="author" content="Your Company Name" />

				<meta property="og:title" content="eScooter - Sustainable Urban Commute" />
				<meta property="og:description" content="Explore the best electric scooters designed for a greener and faster urban commute." />
				<meta property="og:image" content="https://escooterbali.com/images/favicon.png" />
				<meta property="og:url" content="https://escooterbali.com/" />
				<meta property="og:type" content="website" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Discover the Best eScooters" />
				<meta name="twitter:description" content="Check out our curated selection of the best electric scooters for urban mobility." />
				<meta name="twitter:image" content="https://escooterbali.com/images/favicon.png" />

				<link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />

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
