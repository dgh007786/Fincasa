import React from 'react';
import Hero4 from '../components/Hero4';
import Features from '../components/Features/Features';
import About2 from '../components/about2/about2';
import Navbar from '../components/Navbar';
import ServiceSectionS2 from '../components/ServiceSectionS2/ServiceSectionS2';
import Skill from '../components/Skill/Skill';
import FunFact from '../components/FunFact/FunFact';
import Subscribe from '../components/Subscribe/Subscribe';
import Scrollbar from '../components/scrollbar/scrollbar';
import TeamSection from '../components/TeamSection/TeamSection';
import ProjectSection2 from '../components/ProjectSection2/ProjectSection2';
import Testimonial2 from '../components/Testimonial2/Testimonial2';
import BlogSection from '../components/BlogSection/BlogSection';
import PartnerSectionS2 from '../components/PartnerSection2/PartnerSectionS2';
import Footer from '../components/footer/Footer';
import Logo from '/public/images/logo.png'

const HomePage5 = (props) => {

    return (
        <div>
            <Navbar topbarNone={'wpo-header-style-4'} Logo={Logo}/>
            <Hero4/>
            <ServiceSectionS2/>
            <About2 abimg={'/images/about.jpg'}/>
            <Skill/>
            <FunFact fClass={'wpo-fun-fact-section-s2'}/>
            <TeamSection tClass={'wpo-team-section-s2'}/>
            <Subscribe/>
            <ProjectSection2/>
            <Testimonial2/>
            <BlogSection/>
            <PartnerSectionS2/>
            <Footer/>
            <Scrollbar />
        </div>
    )
};
export default HomePage5;


