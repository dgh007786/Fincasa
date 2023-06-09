import React from 'react'
import Link from 'next/link'
import abimg from '/public/images/about/2.jpg'
import Image from 'next/image'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const About2 = (props) => {
    return (
        <section className="wpo-about-section-s2 section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-wrap">
                            <div className="wpo-about-img">
                                <div className="inner-img">
                                    <Image src={abimg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-text">
                            <h4>Welcome To Consoel</h4>
                            <h2>We are trusted consulting company.</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting’s
                                the industrey's standard dummy text ever since the 1500 when printed
                                galley of type and scrambled type specimen book.</p>
                            <div className="text-sub-wrap">
                                <div className="text-sub-item">
                                    <i className="fi flaticon-tax"></i>
                                    <h5>Perfect solution of
                                        business strategy.</h5>
                                </div>
                                <div className="text-sub-item">
                                    <i className="fi flaticon-investor"></i>
                                    <h5>Financial solution
                                        now in your hand</h5>
                                </div>
                            </div>
                            <Link onClick={ClickHandler} href="/about" className="theme-btn">More About Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About2;