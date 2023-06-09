import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import ProjectSection2 from '../../components/ProjectSection2/ProjectSection2';
import Footer from '../../components/footer/Footer';


const ProjectPageS3 =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Projects'} pagesub={'Project'}/> 
            <ProjectSection2 pClass={'border-bt'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ProjectPageS3;
