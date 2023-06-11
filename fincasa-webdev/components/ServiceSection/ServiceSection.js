import React from "react";
import Slider from "react-slick";
import Link from 'next/link'
import SectionTitle2 from "../SectionTitle2/SectionTitle2";
import Services from '../../api/service'
import Image from "next/image";


const settings = {
    dots: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    centerMode: true,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                centerMode: false,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: false,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
            }
        }
    ]
};

const ClickHandler = () =>{
    window.scrollTo(10, 0);
 }

const ServiceSection = () => {
    return (
        <section className="wpo-service-section section-padding">
            <div className="container">
                <SectionTitle2 subTitle={'Our Services'} Title={'All Consoel Solution'} />
                <div className="row-grid wpo-service-slider owl-carousel">
                    <Slider {...settings}>
                        {Services.map((service, srv) => (
                            <div className="grid" key={srv}>
                                <div className="wpo-service-item">
                                    <div className="wpo-service-img">
                                        <Image src={service.sImg} alt="" />
                                        <div className="wpo-service-text">
                                            <h2>{service.sTitle}</h2>
                                            <p>{service.description}</p>
                                            <Link onClick={ClickHandler} href='/service/[slug]' as={`/service/${service.slug}`}>Details</Link>
                                        </div>
                                        <div className="wpo-service-hidden-text">
                                            <h2>{service.sTitle}</h2>
                                            <p>{service.description}</p>
                                            <Link onClick={ClickHandler} href='/service/[slug]' as={`/service/${service.slug}`}>Details</Link>
                                            <div className="top-shape">
                                                <div className="shape-1"></div>
                                                <div className="shape-2"></div>
                                                <div className="shape-3"></div>
                                            </div>
                                            <div className="bottom-shape">
                                                <div className="shape-1"></div>
                                                <div className="shape-2"></div>
                                                <div className="shape-3"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default ServiceSection;