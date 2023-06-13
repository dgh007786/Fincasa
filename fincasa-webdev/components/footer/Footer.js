import React from 'react'
import  Link from 'next/link'
import Logo from '/public/images/logo.png'
import shape from '/public/images/ft-shape.png'
import Image from 'next/image'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}
const SubmitHandler = (e) => {
    e.preventDefault()
}

const Footer = (props) => {
    return (
        <footer className="wpo-site-footer-s2">
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <Image src={Logo} alt="logo"/>
                                </div>
                                <p>We are a global financial advisory firm offering services for second Residency and Citizenship through Investment.</p>
                                <ul>
                                    <li>
                                        <Link onClick={ClickHandler} href="https://m.facebook.com/fincasacapital">
                                           <i className="ti-facebook"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="https://twitter.com/FincasaC?s=08">
                                           <i className="ti-twitter-alt"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="https://instagram.com/fincasacapital?igshid=NTc4MTIwNjQ2YQ==">
                                           <i className="ti-instagram"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="https://www.linkedin.com/company/fincasacapital/">
                                           <i className="ti-google"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Company</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} href="/">Home</Link></li>
                                    <li><Link onClick={ClickHandler} href="/about">About Us</Link></li>
                                    <li><Link onClick={ClickHandler} href="/service">Our Services</Link></li>
                                    <li><Link onClick={ClickHandler} href="/project-s3">Media</Link></li>
                                    <li><Link onClick={ClickHandler} href="/team">Team</Link></li>
                                    <li><Link onClick={ClickHandler} href="/blog-single-left-sidebar/We-provide-advanced-solution-business">News</Link></li>
                                    <li><Link onClick={ClickHandler} href="/contact">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget blog-widget">
                                <div className="widget-title">
                                    <h3>Services</h3>
                                </div>
                                <ul>
                                    <li>
                                    <h4><Link onClick={ClickHandler} href="/service">Residency and Citizenship Program</Link></h4>
                                    <h4><Link onClick={ClickHandler} href="/service">Corporate Restructuring</Link></h4>
                                    <h4><Link onClick={ClickHandler} href="/service">Management Consulting</Link></h4>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget newsletter-widget">
                                <div className="widget-title">
                                    <h3>Become a Partner</h3>
                                </div>
                                <p>Ready to Get Started with Fincasa Capital ?</p>
                                <form onSubmit={SubmitHandler}>
                                    <div className="input-1">
                                        <input type="email" className="form-control" placeholder="Email Address *"
                                            required/>
                                    </div>
                                    <div className="submit clearfix">
                                        <button type="submit"><i className="fi flaticon-send"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ft-shape">
                    <Image src={shape} alt="shape"/>
                </div>
                <div className="ft-shape-s1">
                    <svg width="254.000000pt" height="257.000000pt" viewBox="0 0 254.000000 257.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,257.000000) scale(0.100000,-0.100000)" stroke="none">
                            <path d="M0 1341 c0 -1111 2 -1229 16 -1235 8 -3 56 -11 104 -16 206 -23 368 38 504 191 26 30 135 185 241 344 217 326 264 388 403 529 159 162 348 309 592 461 179 112 349 228 405 277 72 63 132 151 156 226 16 54 20 93 20 202 1 80 -5 157 -13 190 l-13 55 -1208 3 -1207 2 0 -1229z" />
                        </g>
                    </svg>
                </div>
                <div className="ft-shape-s2">
                    <svg width="230.000000pt" height="197.000000pt"
                        viewBox="0 0 230.000000 197.000000" preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,197.000000) scale(0.100000,-0.100000)" stroke="none">
                            <path d="M1885 1463 c-189 -11 -392 -50 -565 -109 -202 -68 -460 -209 -630 -345 -222 -176 -436 -441 -560 -694 -45 -91 -120 -283 -120 -305 0 -6 428 -10 1145 -10 l1145 0 0 719 c0 677 -1 720 -17 725 -25 8 -268 26 -312 24 -20 -1 -58 -3 -86 -5z" />
                        </g>
                    </svg>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col col-lg-6 col-md-12 col-12">
                            <ul>
                                <li>Copyright &copy; 2022 Fincasa Capital. Developed By<Link onClick={ClickHandler} href="https://www.vieweb.co.in/"> VIEWEB</Link></li>
                            </ul>
                        </div>
                        <div className="col col-lg-6 col-md-12 col-12">
                            <div className="link">
                                <ul>
                                    <li><Link onClick={ClickHandler} href="/blogs">Blogs</Link></li>
                                    <li><Link onClick={ClickHandler} href="/blog-single-left-sidebar/We-provide-advanced-solution-business">News</Link></li>
                                    <li><Link onClick={ClickHandler} href="/Awards">Awards</Link></li>
                                    <li><Link onClick={ClickHandler} href="/career">Career</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;