import React from 'react'
import Link from 'next/link'
import { Fade } from 'react-awesome-reveal';
import shape1 from '/public/images/page-title-shape-1.png'
import shape2 from '/public/images/page-title-shape-2.png'
import Image from 'next/image';

const PageTitle = (props) => {
    return (
        <section className="page-title">
            <div className="page-inner-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <h2>{props.pageTitle}</h2>
                            <ol className="breadcrumb">
                                <li><Link href="/home">Home</Link></li>
                                <li><span>{props.pagesub}</span></li>
                            </ol>
                        </div>
                    </div>
                </div>
                <Fade direction="top">
                    <div className="page-title-shape-1"></div>
                </Fade>
                <Fade direction="top">
                    <div className="page-title-shape-2">
                        <Image src={shape1} alt="" />
                    </div>
                </Fade>
                <Fade direction="bottom">
                    <div className="page-title-shape-3">
                        <Image src={shape2} alt="" />
                    </div>
                </Fade>
            </div>
        </section>
    )
}

export default PageTitle;