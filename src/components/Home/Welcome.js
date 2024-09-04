import Image from "next/image";

const Welcome = () => {
	return (
		<section className="relative overflow-hidden mh-500px jarallax">
			<Image
				src={`/images/background/gradient-1.webp`}
				className="jarallax-img"
				alt="escooter"
				priority={true}
				fill={true}
				style={{ objectFit: 'cover' }}
			/>
			<div className="container">
				<div className="row">
					<div className="col-lg-6 offset-lg-6">
						<div className="ps-lg-5 ps-0">
							<i
								className="icofont-quote-left id-color fs-40 mb-4 wow fadeInUp"></i>
							<h3 className="mb-4 wow fadeInUp">
								Welcome to eScooter, your premier destination for
								high-quality motorcycle rentals in Bali! We are dedicated to
								providing you with a safe, comfortable, and enjoyable riding
								experience.
							</h3>
							<span className="wow fadeInUp">eScooter, Bali Indonesia</span>
						</div>
					</div>
				</div>
			</div>
			<div
				className="col-lg-6 absolute h-100 mh-500px top-0 bg-dark"
				data-bgimage="url('images/misc/bali-img.webp')"></div>
		</section>
	);
}

export async function getServerSideProps() {
	return { props: {}, };
}

export default Welcome;