import React from "react";
import Link from "next/link";
import fImg1 from "/public/images/features/img-1.jpg";
import fImg2 from "/public/images/features/img-2.jpg";
import Image from "next/image";

const Features = (props) => {
  return (
    <section className="wpo-features-section">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col col-lg-6 col-md-6 col-12">
            <div className="wpo-features-item">
              <div className="wpo-features-img">
                <Image src={fImg1} alt="" />
              </div>
              <div className="wpo-features-text">
                <h4>
                  <Link href="/service-s2">
                    Yearly Calculation{" "}
                    <i className="fi flaticon-long-arrow-pointing-to-the-right"></i>
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col col-lg-6 col-md-6 col-12">
            <div className="wpo-features-item">
              <div className="wpo-features-img">
                <Image src={fImg2} alt="" />
              </div>
              <div className="wpo-features-text">
                <h4>
                  <Link href="/service-s2">
                    Financing Business{" "}
                    <i className="fi flaticon-long-arrow-pointing-to-the-right"></i>
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
