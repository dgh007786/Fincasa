import React from 'react';
import Hero4 from '../components/Hero4';
import About2 from '../components/about2/about2';
import Navbar from '../components/Navbar';
import ServiceSection from '../components/ServiceSection/ServiceSection';
import Subscribe from '../components/Subscribe/Subscribe';
import Scrollbar from '../components/scrollbar/scrollbar';
import TeamMainSection from '../components/TeamMainSection/TeamMainSection';
import ProjectSection from '../components/ProjectSection/ProjectSection';
import Testimonial from '../components/Testimonial/Testimonial';
import BlogSection from '../components/BlogSection/BlogSection';
import PartnerSection from '../components/PartnerSection/PartnerSection';
import Footer from '../components/footer/Footer';
import Logo from '/public/images/logo.png'

const HomePage5 = (props) => {

    return (
        <div>
            <Navbar topbarNone={'wpo-header-style-4'} Logo={Logo}/>
            <Hero4/>
            <Testimonial/>
            <About2 abimg={'/images/about.jpg'}/>
            <Subscribe/>
            <ServiceSection/>
            <TeamMainSection tClass={'wpo-team-section-s2'}/>
            <ProjectSection/>
            <BlogSection/>
            <PartnerSection/>
            <Footer/>
            <Scrollbar />
        </div>
    )
};
export default HomePage5;


