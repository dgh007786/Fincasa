import React from "react";
import ContactForm from "../ContactFrom/ContactForm";

const Contactpage = () => {
  return (
    <section className="wpo-contact-pg-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col col-lg-10 offset-lg-1">
            <div className="office-info">
              <div className="row">
                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                  <div className="office-info-item">
                    <div className="office-info-icon">
                      <div className="icon">
                        <i className="fi flaticon-place"></i>
                      </div>
                    </div>
                    <div className="office-info-text">
                      <h2>Address</h2>
                      <p>P.O BOX 79077</p> <p>Dubai United Arab Emirates</p>
                    </div>
                  </div>
                </div>
                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                  <div className="office-info-item">
                    <div className="office-info-icon">
                      <div className="icon">
                        <i className="fi flaticon-email"></i>
                      </div>
                    </div>
                    <div className="office-info-text">
                      <h2>General Inquiries</h2>
                      <p>Email: info@fincasacapital.com</p>
                      <p>Call: +971 58 891 3803</p>
                    </div>
                  </div>
                </div>
                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                  <div className="office-info-item">
                    <div className="office-info-icon">
                      <div className="icon">
                        <i className="fi flaticon-phone-call"></i>
                      </div>
                    </div>
                    <div className="office-info-text">
                      <h2>Sales Inquiries</h2>
                      <p>+971 4 591 7463</p>
                      <p>+971 58 891 3803</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wpo-contact-title">
              <h2>Have Any Question?</h2>
              <p>Feel free to reach out to us for any queries.</p>
            </div>
            <div className="wpo-contact-form-area">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <section className="wpo-contact-map-section">
        <div className="wpo-contact-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.11969673685!2d55.156295699999994!3d25.097809199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43adc52d5c97%3A0xf14765c54bd66b60!2sFincasa%20Corporate%20Services%20Provider%20LLC!5e0!3m2!1sen!2sus!4v1686628682380!5m2!1sen!2sus"></iframe>
        </div>
      </section>
    </section>
  );
};

export default Contactpage;
