import React from 'react';
import Projects from '../../api/project'
import Link from 'next/link'
import Image from 'next/image';


const RelatedProject = () => {


    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="wpo-project-single-item related-project">
            <div className="wpo-project-single-title">
                <h3>Related Projects</h3>
            </div>
            <div className="wpo-project-section-s4">
                <div className="row">
                    <div className="col col-xs-12 sortable-project">
                        <div className="wpo-project-container">
                            <div className="row">
                                {Projects.slice(0, 3).map((project, pot) => (
                                    <div className="col-lg-4 col-md-6 col-12" key={pot}>
                                        <div className="grid">
                                            <div className="wpo-project-item">
                                                <Image src={project.pImg} alt="" />
                                                <div className="wpo-project-text">
                                                    <span>{project.subTitle}</span>
                                                    <h3><Link onClick={ClickHandler} href='/project/[slug]' as={`/project/${project.slug}`}>{project.title}</Link></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default RelatedProject;

