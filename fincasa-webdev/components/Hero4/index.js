import React from "react";
import Slider from "react-slick";
import Link from 'next/link'


const settings = {
    dots: false,
    arrows: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true
};

const Hero4 = () => {
    return (
        <section className="wpo-hero-slider">
            <div className="hero-container">
                <div className="hero-wrapper">
                    <Slider {...settings}>
                        <div className="hero-slide">
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/corporate.png'})` }}>
                                <div className="container-fluid">
                                    <div className="slide-content">
                                        {/* <div className="slide-title-sub">
                                            <h5>Trusted Business Partner.</h5>
                                        </div> */}
                                        <div className="slide-title">
                                            <h2>Move Ahead With Corporate Services</h2>
                                        </div>
                                        <div className="slide-text">
                                            <p>Through Our Curated Business Advisary Services</p>
                                        </div>
                                        <div className="btns">
                                            <Link href="/about" className="theme-btn">Explore More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hero-slide">
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/citizenship.png'})` }}>
                                <div className="container-fluid">
                                    <div className="slide-content">
                                        {/* <div className="slide-title-sub">
                                            <h5>Trusted Business Partner.</h5>
                                        </div> */}
                                        <div className="slide-title">
                                            <h2>Unlock The Power Of Global Citizenship</h2>
                                        </div>
                                        <div className="slide-text">
                                            <p>Through Fincasa Capital Citizenship and Residency Programs</p>
                                        </div>
                                        <div className="btns">
                                            <Link href="/about" className="theme-btn">Explore More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hero-slide">
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/Manconsult.png'})` }}>
                                <div className="container-fluid">
                                    <div className="slide-content">
                                        {/* <div className="slide-title-sub">
                                            <h5>Trusted Business Partner.</h5>
                                        </div> */}
                                        <div className="slide-title">
                                            <h2>Grow with Management Consultancy Programs</h2>
                                        </div>
                                        <div className="slide-text">
                                            <p>From Fincasa Capital</p>
                                        </div>
                                        <div className="btns">
                                            <Link href="/about" className="theme-btn">Explore More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Hero4;