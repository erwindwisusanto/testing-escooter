import Image from "next/image";

const Header = () => {
	return (
		<header
			id="main-header"
			className="header-light transparent scroll-light has-topbar">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="de-flex sm-pt10">
							<div className="de-flex-col">
								<div id="logo">
									<a href="">
										<Image
											className="logo-main"
											src="/images/logo.png"
											alt="Main Logo"
											width={150}
											height={100}
										/>
										<Image
											className="logo-scroll"
											src="/images/logo.png"
											alt="Scroll Logo"
											width={150}
											height={100}
										/>
										<Image
											className="logo-mobile"
											src="/images/logo.png"
											alt="Mobile Logo"
											width={150}
											height={100}
										/>
									</a>
								</div>
							</div>
							<div className="de-flex-col header-col-mid">
								<ul id="mainmenu">
									<li>
										<a className="menu-item" href="#variant">Variant & Price</a>
									</li>
									<li>
										<a className="menu-item" href="#how">How to Rent</a>
									</li>
									<li>
										<a className="menu-item" href="#testimonial">Testimonials</a>
									</li>
								</ul>
							</div>
							<div className="de-flex-col">
								<div className="menu_side_area">
									<a
										href="https://api.whatsapp.com/send/?phone=628121333064&text&type=phone_number&app_absent=0"
										className="btn-main bg-dark"
										target="_blank">
										Book a Rent
									</a>
									<span id="menu-btn"></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export async function getServerSideProps() {
	return { props: {}, };
}

export default Header;