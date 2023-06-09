import React from "react";
import blogs from '../../api/blogs'
import Link from "next/link";
import SectionTitle from "../SectionTitle/SectionTitle";
import Image from "next/image";
import bImg from '/public/images/blog/shape.png'
import bImg2 from '/public/images/blog/shape2.png'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSection = () => {
    return (
        <div className="wpo-blog-area-s2 section-padding section-bg">
            <div className="container">
                <SectionTitle subTitle={'Blog Post'} Title={'Latest News From Blog'} />
                <div className="wpo-blog-wrap">
                    <div className="row align-items-center">
                        {blogs.map((blog, bl) => (
                            <div className="col-lg-4 col-md-6 col-12" key={bl}>
                                <div className="blog-item">
                                    <div className="blog-img">
                                        <Image src={blog.screens} alt="" />
                                    </div>
                                    <div className="blog-content">
                                        <ul>
                                            <li><Link onClick={ClickHandler} href='/blog-single/[slug]' as={`/blog-single/${blog.slug}`}>{blog.create_at}</Link></li>
                                            <li>by: {blog.author}</li>
                                        </ul>
                                        <h2><Link onClick={ClickHandler} href='/blog-single/[slug]' as={`/blog-single/${blog.slug}`}>{blog.title}</Link></h2>
                                        <Link onClick={ClickHandler} href='/blog-single/[slug]' as={`/blog-single/${blog.slug}`} className="arrow-btn"><i
                                            className="fi flaticon-right-arrow-1"></i></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogSection;