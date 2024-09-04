const SectionFirst = () => {
	return (
		<section className="jarallax">
			<img
				src="images/background/gradient-1.webp"
				className="jarallax-img"
				alt="" />
			<div className="container">
				<div className="row g-4 gx-5 align-items-center">
					<div className="spacer-single d-lg-none d-sm-block"></div>
					<div className="col-lg-6">
						<div className="relative">
							<img
								src="/images/misc/4.webp"
								className="img-fluid relative z-index-1 rounded-20px wow fadeInUp"
								alt="" />
						</div>
					</div>

					<div className="col-lg-6 relative">
						<div className="relative z-index-1000">
							<div className="spacer-20"></div>
							<h1 className="wow fadeInUp" data-wow-delay=".4s">
								eScooter - Your Trusted Motorcycle Rental Service in Bali
							</h1>
							<div className="col-lg-10">
								<p className="wow fadeInUp" data-wow-delay=".6s">
									Enjoy Your Ride with Top-Quality Motorcycles and the Best
									Service!
								</p>
							</div>
							<div className="spacer-10"></div>
							<a
								className="btn-main wow fadeIn"
								data-wow-delay=".8s"
								href="https://api.whatsapp.com/send/?phone=628121333064&text&type=phone_number&app_absent=0"
								target="_blank">
								Ask Availability
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SectionFirst;