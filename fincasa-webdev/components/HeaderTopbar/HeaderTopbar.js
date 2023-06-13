import React from 'react'
import Link  from 'next/link'


const HeaderTopbar = () => {
    return(	
        <div className="topbar">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col col-lg-6 col-sm-12 col-12">
                        <div className="contact-intro">
                            <ul>
                                <li><i className="fi flaticon-phone-call-1"></i>+971 5889 13803</li>
                                <li><i className="fi flaticon-email-1"></i>info@fincasacapital.com</li>
                                <li><i className="fi flaticon-location"></i>Dubai, United Arab Emirates.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-6 col-sm-12 col-12">
                        <div className="contact-info">
                            <ul>
                                <li><Link href="/about">Careers</Link></li>
                                <li><Link href="/blog">News & Media</Link></li>
                                <li><Link href="/faq">Blogs</Link></li>
                            </ul>
                            <ul className="social">
                                <li><Link href="https://m.facebook.com/fincasacapital"><i className="ti-facebook"></i></Link></li>
                                <li><Link href="https://twitter.com/FincasaC?s=08"><i className="ti-twitter-alt"></i></Link></li>
                                <li><Link href="https://instagram.com/fincasacapital?igshid=NTc4MTIwNjQ2YQ=="><i className="ti-instagram"></i></Link></li>
                                <li><Link href="https://www.linkedin.com/company/fincasacapital/"><i className="ti-google"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTopbar;