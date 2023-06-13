import React from 'react'
import Link from 'next/link'
import abimg2 from '/public/images/about/4.jpg'
import shape1 from '/public/images/ab-shape-1.png'
import shape2 from '/public/images/ab-shape-2.png'
import Image from 'next/image'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const About = (props) => {
    return (
        <section className={`wpo-about-section section-padding ${props.abClass}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-wrap">
                            <div className="wpo-about-img">
                                <Image src={props.abimg} alt="" />
                                <div className="wpo-ab-shape-1"><Image src={shape1} alt="" /></div>
                                <div className="wpo-ab-shape-2"><Image src={shape2} alt="" /></div>
                                <div className="wpo-about-exprience">
                                    <h3>15 Years Experience</h3>
                                </div>
                                <div className="wpo-ab-img-2">
                                    <Image src={abimg2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-text">
                            <h4>Delivering Outstanding Results with Speed and Integrity </h4>
                            <h2>Fincasa Capital
                            </h2>
                            <p>We are a global financial advisory firm offering services for second Residency and Citizenship through Investment.
                                Our strength is our determination to deliver outstanding results with speed and integrity. 
                                Our service-oriented mindset has enabled us to consistently meet the high expectations of our valuable clients.</p>
                                <p>Our client’s success is our responsibility and a major contributing factor to our reputation. 
                                    We follow a simplified process that assists our clients to keep 
                                    themselves updated as well as easily track the status and assess information anytime from anywhere.</p>
                                <p>Our highly qualified team of industry experts bring a wealth of knowledge and valuable insights that have 
                                    assisted us to reach the pinnacle in our domain. Over the years, our specially curated solutions have assisted 
                                    investors, entrepreneurs and HNW individuals obtain citizenship and residency in the country of their choice.</p>
                            <Link onClick={ClickHandler} href="/about" className="theme-btn">More About Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;