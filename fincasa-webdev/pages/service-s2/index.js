import React, {Fragment} from 'react';
import Navbar3 from '../../components/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import CtaSection from '../../components/ctaSection/ctaSection';
import Subscribe from '../../components/Subscribe/Subscribe';
import Footer from '../../components/footer/Footer';

const ServicePageS2 =() => {
    return(
        <Fragment>
            <Navbar3/>
            <PageTitle pageTitle={'Service'} pagesub={'Service'}/> 
            <CtaSection/>
            <ServiceSection/>
            <Subscribe sbClass={'wpo-subscribe-section-s2'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ServicePageS2;



