import Image from "next/image";

const RunningText = () => {
  return (
    <section className="jarallax text-light pt30 pb30">
      <Image
        src={`/images/background/gradient-3.webp`}
        className="jarallax-img"
        alt="jaralax"
        width="0"
        height="0"
        sizes="100vw"
      />
      <div className="wow fadeInRight d-flex">
        <div className="de-marquee-list wow">
          <div className="d-item">
            <span className="d-item-txt">Maintained Motorcycles</span>
            <span className="d-item-display">
              <i className="d-item-block"></i>
            </span>
            <span className="d-item-txt">Wide Selection</span>
            <span className="d-item-display">
              <i className="d-item-block"></i>
            </span>
            <span className="d-item-txt">Affordable Rates</span>
            <span className="d-item-display">
              <i className="d-item-block"></i>
            </span>
            <span className="d-item-txt">Professional Customer Service</span>
            <span className="d-item-display">
              <i className="d-item-block"></i>
            </span>
            <span className="d-item-txt">Simple and Fast</span>
            <span className="d-item-display">
              <i className="d-item-block"></i>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function getServerSideProps() {
	return { props: {}, };
}


export default RunningText;