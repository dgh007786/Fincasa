import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import ProjectSection2 from '../../components/ProjectSection2/ProjectSection2'
import Footer2 from '../../components/footer2/Footer2';


const ProjectPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Projects'} pagesub={'Project'}/> 
            <ProjectSection2 pClass={'border-bt'}/>
            <Footer2/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ProjectPage;
