import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import MissionVission from '../../components/MissionVission/MissionVission';
import About from '../../components/about/about';
import Testimonial from '../../components/Testimonial/Testimonial';
import Footer from '../../components/footer/Footer';
import abimg from '../../public/images/about/about_image.png';

const AboutPage = (props) => {

    return (
        <div>
            <Navbar/>
            <PageTitle pageTitle={'About Us'} pagesub={'About'} />
            <About abimg={abimg}/>
            <MissionVission/>
            <Testimonial/>
            <Footer/>
            <Scrollbar />
        </div>
    )
};
export default AboutPage;


