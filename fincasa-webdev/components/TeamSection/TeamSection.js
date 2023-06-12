import React from 'react'
import Link from 'next/link'
import Team from '../../api/team'
// import shape1 from '/public/images/team/shape1.png'
import shape2 from '/public/images/team/shape2.png'
import shape3 from '/public/images/team/shape3.png'
import Image from 'next/image'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const TeamSection = (props) => {
    return (
        <section className={`wpo-team-section section-padding ${props.tClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <span>TEAM MEMBERS</span>
                            <h2>We Have Skilled People</h2>
                        </div>
                    </div>
                </div>
                <div className="wpo-team-wrap">
                    <div className="row">
                        {Team.map((team, aitem) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={aitem}>
                                <div className="wpo-team-item">
                                    <div className="wpo-team-img">
                                        <Image src={team.tImg} alt="" />
                                        <div className="wpo-team-text">
                                            <span>{team.title}</span>
                                            <h2>{team.name}</h2>
                                            <div className="button">
                                                <Link onClick={ClickHandler} href='/team-single/[slug]' as={`/team-single/${team.slug}`}><i className="ti-plus"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="shape-1"><Image src={shape2} alt="" /></div>
            <div className="shape-2"><Image src={shape3} alt="" /></div>
        </section>
    )
}

export default TeamSection;