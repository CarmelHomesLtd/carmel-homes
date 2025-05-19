//eslint-disable-next-line no-unused-vars
import React from "react";
import { Helmet } from "react-helmet";

import BeginJourney from "global/BeginJourney";

import Contracting from "./sections/Contracting";
import WhyChooseUs from "./sections/WhyChooseUs";
import ThreeSteps from "./sections/ThreeSteps";
import Services from "./sections/Services";
// import FormSteps from "./sections/FormSteps";
import FormSteps from "pages/ContractingForm/sections/FUGFormSteps";
import OurProjects from "./sections/Projects";

function CarmelHomesContracting() {
  return (
    <>
      <Helmet>
        <title>Carmel Homes Ltd</title>
        <meta name="description" content="Home ownership in a few clicks. Get in touch tell us your story, so that we can get an overview of your challenges and support you." />
      </Helmet>

      <Contracting />
      <ThreeSteps />
      <div className="pb-12 pt-6 px-4 scroll-mt-20" id="form"><FormSteps /></div>
      <Services />
      <WhyChooseUs />
      <OurProjects />
      
      <BeginJourney text="Renovate your property with us now" actionText="Get Started" actionLink="#form" useAnchor={true} />
    </>
  )
}

export default CarmelHomesContracting
