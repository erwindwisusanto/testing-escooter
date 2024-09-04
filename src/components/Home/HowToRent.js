const HowToRent = () => {
  const commonStyles = {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <section id="how" style={commonStyles}>
      <div className="container" style={commonStyles}>
        <div className="row align-items-center g-4 gx-5" style={commonStyles}>
          <div className="col-lg-12" style={commonStyles}>
            <div
              className="subtitle bg-grey text-dark wow fadeInUp mb-3 animated"
              style={{
                ...commonStyles,
                visibility: 'visible',
                animationName: 'fadeInUp',
              }}
            >
              How
            </div>
            <h2
              className="wow fadeInUp animated"
              style={{
                visibility: 'visible',
                animationName: 'fadeInUp',
              }}
            >
              How to Rent a Motorcycle
            </h2>
          </div>
          {[0.2, 0.4, 0.6, 0.6].map((delay, index) => (
            <div
              key={index}
              className="col-lg-3 wow fadeInRight animated"
              data-wow-delay={`${delay}s`}
              style={{
                ...commonStyles,
                visibility: 'visible',
                animationDelay: `${delay}s`,
                animationName: 'fadeInRight',
              }}
            >
              <div className="relative" style={commonStyles}>
                <a href="##">
                  <i
                    className={`bg-color text-light p-3 rounded-20px fs-56 mb-4 ${
                      index === 0
                        ? 'icofont-read-book'
                        : index === 1
                        ? 'icofont-phone'
                        : index === 2
                        ? 'icofont-ui-timer'
                        : 'icofont-check-circled'
                    }`}
                  ></i>
                  <h4>
                    {index === 0
                      ? 'Choose Your Motorcycle'
                      : index === 1
                      ? 'Check availability'
                      : index === 2
                      ? 'Select Rental Duration'
                      : 'Book Now'}
                  </h4>
                </a>
                <p>
                  {index === 0
                    ? 'Browse our catalog and select the motorcycle that fits your needs.'
                    : index === 1
                    ? 'Make sure you book according to what you want'
                    : index === 2
                    ? 'Choose the rental period from daily to monthly.'
                    : 'Fill out the booking form or contact us via phone/WhatsApp for a faster process.'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToRent;
