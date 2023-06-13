import React from 'react'
import Link from 'next/link'
import SectionTitle from "../SectionTitle/SectionTitle";


const Pricing = (props) => {

    return (
        <section className="wpo-pricing-section section-padding">
            <div className="container">
                <SectionTitle subTitle={'Our Presence'} Title={'Global Offices'} />
                <div className="pricing-grids clearfix">
                    <div className="grid">
                        <div className="type">
                            <h5>Cyprus</h5>
                        </div>
                        <div className="pricing-header">
                            <div>
                                <p>Call Now</p>
                            </div>
                        </div>
                        <div className="pricing-body">
                            <ul>
                                <li>Griva Digeni, 81 Marinos Court,</li>
                                <li>st& 2nd Floor, 6043, Larnaca, Cyprus</li>
                                <li>+35799473825</li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid">
                        <div className="type">
                            <h5>Canada</h5>
                        </div>
                        <div className="pricing-header">
                            <div>
                                <p>Call Now</p>
                            </div>
                        </div>
                        <div className="pricing-body">
                            <ul>
                                <li>350 Highway 7 East, Suite 307,</li>
                                <li>sRichmond Hill, Ontario, Canada</li>
                                <li>+17 113 6946 36</li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid">
                        <div className="type">
                            <h5>Peru</h5>
                        </div>
                        <div className="pricing-header">
                            <div>
                                <p>Call Now</p>
                            </div>
                        </div>
                        <div className="pricing-body">
                            <ul>
                                <li>Av. Rivera Navarrete 395</li>
                                <li>San Isidro, Lima Perú</li>
                                <li>+47 213 5941 295</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing;