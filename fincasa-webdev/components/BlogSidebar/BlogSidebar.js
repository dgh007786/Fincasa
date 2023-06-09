import React from 'react';
import Link from 'next/link'
import Services from '../../api/service';
import blogs from '../../api/blogs'
import about from '/public/images/blog/about-widget.jpg'
import Image from 'next/image';

const SubmitHandler = (e) => {
    e.preventDefault()
}

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSidebar = (props) => {
    return (
        <div className={`col col-lg-4 col-12 ${props.blLeft}`}>
            <div className="blog-sidebar">
                <div className="widget about-widget">
                    <div className="img-holder">
                        <Image src={about} alt="" />
                    </div>
                    <h4>Jenny Watson</h4>
                    <p>Hi! beautiful people. I`m an authtor of this blog. Read our post - stay with us</p>
                    <div className="social">
                        <ul className="clearfix">
                            <li><Link onClick={ClickHandler} href="/blog-single/We-provide-advanced-solution-business"><i className="ti-facebook"></i></Link></li>
                            <li><Link onClick={ClickHandler} href="/blog-single/We-provide-advanced-solution-business"><i className="ti-twitter-alt"></i></Link></li>
                            <li><Link onClick={ClickHandler} href="/blog-single/We-provide-advanced-solution-business"><i className="ti-linkedin"></i></Link></li>
                            <li><Link onClick={ClickHandler} href="/blog-single/We-provide-advanced-solution-business"><i className="ti-pinterest"></i></Link></li>
                        </ul>
                    </div>
                    <div className="aw-shape">
                    </div>
                </div>
                <div className="widget search-widget">
                    <h3>Search Here</h3>
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Post.." />
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div>
                <div className="widget category-widget">
                    <h3>Post Categories</h3>
                    <ul>
                        {Services.slice(0, 6).map((service, Sitem) => (
                            <li key={Sitem}><Link onClick={ClickHandler} href='/service/[slug]' as={`/service/${service.slug}`}>{service.sTitle}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="widget recent-post-widget">
                    <h3>Related Posts</h3>
                    <div className="posts">
                        {blogs.map((blog, bl) => (
                            <div className="post" key={bl}>
                                <div className="img-holder">
                                    <Image src={blog.screens} alt="" />
                                </div>
                                <div className="details">
                                    <h4><Link onClick={ClickHandler} href='/blog-single/[slug]' as={`/blog-single/${blog.slug}`}>{blog.title}</Link></h4>
                                    <span className="date">{blog.create_at}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="widget tag-widget">
                    <h3>Tags</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} href="/blog-single/We-provide-advanced-solution-business">Consulting</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/We-provide-advanced-solution-business">Planning</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/We-provide-advanced-solution-business">Marketing</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/We-provide-advanced-solution-business">Strategy</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/We-provide-advanced-solution-business">Finance</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/We-provide-advanced-solution-business">Solution</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/We-provide-advanced-solution-business">Corporate</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/We-provide-advanced-solution-business">Idea</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/We-provide-advanced-solution-business">Market Reserch</Link></li>
                    </ul>
                </div>
                <div className="wpo-contact-widget widget">
                    <div className="wpo-contact-widget-inner">
                        <h2><Link onClick={ClickHandler} href="/contact">Contact For Advertisment 270 x 310</Link></h2>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default BlogSidebar;
