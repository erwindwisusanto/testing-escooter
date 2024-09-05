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
											src={"/images/logo.png"}
											width="0"
											height="0"
											sizes="25vw"
											className="logo-main w-100 h-auto"
											alt="banner"
										/>
										<Image
											src={"/images/logo.png"}
											width="0"
											height="0"
											sizes="25vw"
											className="logo-scroll w-100 h-auto"
											alt="banner"
										/>
										<Image
											src={"/images/logo.png"}
											width="0"
											height="0"
											sizes="25vw"
											className="logo-mobile w-100 h-auto"
											alt="banner"
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