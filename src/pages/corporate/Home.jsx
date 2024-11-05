import ContactUs from "@/components/corporate/home/ContactUs";
import CorporateHero from "@/components/corporate/home/CorporateHero";
import Services from "@/components/corporate/home/Services";
import { Fragment } from "react";

function Home() {
  return (
    <Fragment>
      <CorporateHero />
      <ContactUs />
      <Services />
    </Fragment>
  );
}

export default Home;
