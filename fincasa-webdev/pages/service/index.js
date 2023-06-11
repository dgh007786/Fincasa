import React from "react";
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import ServiceSection from "../../components/ServiceSection/ServiceSection";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Subscribe from "../../components/Subscribe/Subscribe";
import Footer2 from "../../components/footer2/Footer2";

const ServicePage = (props) => {
  return (
    <div>
      <Navbar />
      <PageTitle pageTitle={"Service"} pagesub={"Service"} />
      <ServiceSection />
      <Subscribe sbClass={"wpo-subscribe-section-s2 pt-0"} />
      <Footer2 />
      <Scrollbar />
    </div>
  );
};
export default ServicePage;
