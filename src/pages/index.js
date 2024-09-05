import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Escooter from "@/components/Home/Escooter";
import HowToRent from "@/components/Home/HowToRent";
import RunningText from "@/components/Home/RunningText";
import SectionFirst from "@/components/Home/SectionFirst";
import Testi from "@/components/Home/Testi";
import Welcome from "@/components/Home/Welcome";
import Head from "next/head";

const Home = () => {
	return (
		<>
			<Head>
				<title>eScooter</title>
				<link rel="icon" href="/images/icon.png" type="image/gif" sizes="16x16" />
				<meta content="text/html;charset=utf-8" http-equiv="Content-Type" />
				<meta content="width=device-width, initial-scale=1.0" name="viewport" />

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
			</Head>
			<div id="wrapper">
				<Header />
				<div
					className="no-bottom no-top"
					id="content">
					<div id="top"></div>
					<SectionFirst />
					<Escooter />
					<RunningText />
					<HowToRent />
					<Welcome />
					<Testi />
				</div>
				<Footer />
			</div>
		</>
	);
}

export async function getServerSideProps() {
	return { props: {} };
}

export default Home;