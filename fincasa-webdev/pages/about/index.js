import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import MissionVission from '../../components/MissionVission/MissionVission';
import About from '../../components/about/about';
import TeamSection from '../../components/TeamSection/TeamSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import FunFact from '../../components/FunFact/FunFact';
import Footer from '../../components/footer/Footer';

const AboutPage = (props) => {

    return (
        <div>
            <Navbar/>
            <PageTitle pageTitle={'About Us'} pagesub={'About'} />
            <MissionVission/>
            <About/>
            <TeamSection tClass={'wpo-team-section-s3'}/>
            <Testimonial/>
            <FunFact fClass={'wpo-fun-fact-section-s2 pt-0'}/>
            <Footer/>
            <Scrollbar />
        </div>
    )
};
export default AboutPage;


