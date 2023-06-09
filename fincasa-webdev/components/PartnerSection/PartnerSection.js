import Image from "next/image";
import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import pimg1 from '/public/images/partners/img-1.png'
import pimg2 from '/public/images/partners/img-2.png'
import pimg3 from '/public/images/partners/img-3.png'
import pimg4 from '/public/images/partners/img-4.png'
import pimg5 from '/public/images/partners/img-5.png'
import pimg6 from '/public/images/partners/img-6.png'
import pimg7 from '/public/images/partners/img-7.png'
import pimg8 from '/public/images/partners/img-8.png'

const partners = [
    {
        pImg: pimg1,
    },
    {
        pImg: pimg2,
    },
    {
        pImg: pimg3,
    },
    {
        pImg: pimg4,
    },
    {
        pImg: pimg5,
    },
    {
        pImg: pimg6,
    },
    {
        pImg: pimg7,
    },
    {
        pImg: pimg8,
    },
]


const PartnerSection = (props) => {
    return (
        <section className="partners-section section-padding pt-175">
            <div className="container">
                <SectionTitle subTitle={'HONORABLE CUSTOMER'} Title={'We are work with top brand'} />
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="partner-grids clearfix">
                            {partners.map((partner, pitem) => (
                                <div className="grid" key={pitem}>
                                    <Image src={partner.pImg} alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PartnerSection;
