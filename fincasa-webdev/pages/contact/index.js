import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Contactpage from '../../components/Contactpage/Contactpage'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Pricing from '../../components/Pricing/Pricing';

const ContactPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'}/> 
            <Contactpage/>
            <Pricing/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ContactPage;

