import Image from 'next/image';
import React from 'react'
import simg from '/public/images/mission-shape.png'

const MissionVission = (props) => {
    return (
        <section className="wpo-mission-vission-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-mission-item">
                            <div className="wpo-mission-text">
                                <h2>Our Mission</h2>
                                <p>To always act in the best interest of our clients by constantly 
                                    striving to deliver high-end services to our trusted clients. 
                                    To follow the best industry practices, maintain full integrity and 
                                    transparency in all our business processes.</p>
                            </div>
                            <div className="shape-1"></div>
                            <div className="shape-2"><Image src={simg} alt=""/></div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-vission-item">
                            <div className="wpo-vission-text">
                                <h2>Our Vision</h2>
                                <p>To provide the best professional assistance and establish ourselves as a trusted partner. 
                                    Our vision is to design the best investment strategy for our clients with full integrity 
                                    and dedication by practicing continuous process improvement</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MissionVission;