import Head from "next/head";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>eScooter</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>eScooter</title>
				<link rel="icon" href="/images/icon.png" type="image/gif" sizes="16x16" />
				<meta content="text/html;charset=utf-8" http-equiv="Content-Type" />
				<meta content="width=device-width, initial-scale=1.0" name="viewport" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}
