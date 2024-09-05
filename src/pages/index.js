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