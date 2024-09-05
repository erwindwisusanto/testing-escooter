import Image from "next/image";

const Footer = () => {
	return (
		<footer className="section-dark">
			<div className="container">
				<div className="row gx-5">
					<div className="col-lg-8 col-sm-6">
						<Image
							src="/images/logo-white.png"
							alt="Logo"
							width="0"
							height="0"
							sizes="25vw"
							className="w-25 h-auto"
						/>
						<div className="spacer-20"></div>
						<p>
							Welcome to eScooter, your premier destination for high-quality
							motorcycle rentals in Bali! We are dedicated to providing you
							with a safe, comfortable, and enjoyable riding experience.
						</p>

						<div className="social-icons mb-sm-30">
							<a href="#"><i className="fa-brands fa-facebook-f"></i></a>
							<a href="#"><i className="fa-brands fa-instagram"></i></a>
							<a href="#"><i className="fa-brands fa-x-twitter"></i></a>
							<a href="#"><i className="fa-brands fa-youtube"></i></a>
							<a href="#"><i className="fa-brands fa-tiktok"></i></a>
						</div>
					</div>
					<div className="col-lg-4 col-sm-6 order-lg-2 order-sm-1">
						<div className="widget">
							<div className="fw-bold text-white">
								<i className="icofont-location-pin me-2 id-color"></i>
								Showroom Location
							</div>
							Bali, Indonesia

							<div className="spacer-20"></div>

							<div className="fw-bold text-white">
								<i className="icofont-envelope me-2 id-color"></i>
								Send a Message
							</div>
							contact@escooter.com

							<div className="spacer-20"></div>

							<div className="fw-bold text-white">
								<i className="icofont-envelope me-2 id-color"></i>
								Make a Phone Call
							</div>
							+62 8121333064
						</div>
					</div>
				</div>
			</div>
			<div className="subfooter">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="de-flex">
								<div className="de-flex-col">Copyright 2024 - eScooter</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export async function getServerSideProps() {
	return { props: {}, };
}

export default Footer;