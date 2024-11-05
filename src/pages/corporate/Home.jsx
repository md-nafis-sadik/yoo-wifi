import ContactUs from "@/components/corporate/home/ContactUs";
import CorporateHero from "@/components/corporate/home/CorporateHero";
import Services from "@/components/corporate/home/Services";
import WhatWeDoCorporate from "@/components/corporate/home/WhatWeDo";
import { Fragment } from "react";

function Home() {
  return (
    <Fragment>
      <CorporateHero />
      <ContactUs />
      <Services />
      <WhatWeDoCorporate />
    </Fragment>
  );
}

export default Home;
