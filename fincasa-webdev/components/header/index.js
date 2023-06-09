import React, { useState } from "react";
import Link from "next/link";
import HeaderTopbar from "../HeaderTopbar/HeaderTopbar";
import MobileMenu from "../MobileMenu/MobileMenu";
import Logo from "/public/images/fincasa_logo.png";
import Image from "next/image";

const Header = (props) => {
  const [menuActive, setMenuState] = useState(false);
  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <header id="header" className={props.topbarNone}>
      <HeaderTopbar />
      <div className={`wpo-site-header ${props.hclass}`}>
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                <div className="mobail-menu">
                  <MobileMenu />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div className="navbar-header">
                  <Link
                    onClick={ClickHandler}
                    className="navbar-brand"
                    href="/home"
                  >
                    <Image src={Logo} alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-1 col-1">
                <div
                  id="navbar"
                  className="collapse navbar-collapse navigation-holder"
                >
                  <button className="menu-close">
                    <i className="ti-close"></i>
                  </button>
                  <ul className="nav navbar-nav mb-2 mb-lg-0">
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} href="/">
                        Home
                      </Link>
              
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/about">
                        About Us
                      </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="/service-s2">Services</Link>
                      {/* <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} href="/service">
                            Service Style 1
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="/service-s2">
                            Service Style 2
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="/service-s3">
                            Service Style 3
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            href="/service/Financial-Advices"
                          >
                            Service Single
                          </Link>
                        </li>
                      </ul> */}
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="/project-s3">Media</Link>
                      {/* <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} href="/project">
                            Project Style 1
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="/project-s2">
                            Project Style 2
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="/project-s3">
                            Project Style 3
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            href="/project/Market-Research"
                          >
                            Project Single
                          </Link>
                        </li>
                      </ul> */}
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="/team">Team</Link>
                      {/* <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} href="/team">
                            Team
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            href="/team-single/Harry-Abraham"
                          >
                            Team single
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="/shop">
                            Shop Page
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            href="/product-single/Winning-Arguments"
                          >
                            Shop Single
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="/cart">
                            Cart
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="/checkout">
                            Checkout
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="/pricing">
                            Pricing
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="/404">
                            404 Error
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="/login">
                            Login
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="/register">
                            Register
                          </Link>
                        </li>
                      </ul> */}
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} href="/blog-single-left-sidebar/We-provide-advanced-solution-business">
                        News
                      </Link>
                      {/* <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} href="/blog">
                            Blog right sidebar
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            href="/blog-left-sidebar"
                          >
                            Blog left sidebar
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="/blog-fullwidth">
                            Blog fullwidth
                          </Link>
                        </li>
                        <li className="menu-item-has-children">
                          <Link onClick={ClickHandler} href="/">
                            Blog details
                          </Link>
                          <ul className="sub-menu">
                            <li>
                              <Link
                                onClick={ClickHandler}
                                href="/blog-single/We-provide-advanced-solution"
                              >
                                Blog details right sidebar
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={ClickHandler}
                                href="/blog-single-left-sidebar/We-provide-advanced-solution-business"
                              >
                                Blog details left sidebar
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={ClickHandler}
                                href="/blog-single-fullwidth/Many-desktop-publishing"
                              >
                                Blog details fullwidth
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul> */}
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/contact">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-2 col-2">
                <div className="header-right">
                  <div className="header-search-form-wrapper">
                    <div className="cart-search-contact">
                      <button
                        onClick={() => setMenuState(!menuActive)}
                        className="search-toggle-btn"
                      >
                        <i
                          className={`fi ti-search ${
                            menuActive ? "ti-close" : "fi "
                          }`}
                        ></i>
                      </button>
                      <div
                        className={`header-search-form ${
                          menuActive ? "header-search-content-toggle" : ""
                        }`}
                      >
                        <form onSubmit={SubmitHandler}>
                          <div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search here..."
                            />
                            <button type="submit">
                              <i className="fi flaticon-search-interface-symbol"></i>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div className="close-form">
                    <Link
                      onClick={ClickHandler}
                      href="/contact"
                      className="theme-btn"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
