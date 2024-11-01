import CustomerTestimonial from "@/components/commercial/home/CustomerTestimonial";
import InternetPackage from "@/components/commercial/home/InternetPackage";
import StayConnectedRegions from "@/components/commercial/home/StayConnectedRegions";
import WhyYoowifi from "@/components/commercial/home/WhyYoowifi";
import { Fragment } from "react";

function Home() {
  return (
    <div className="overflow-hidden w-full">
      <InternetPackage />
      <WhyYoowifi />
      <StayConnectedRegions />
      <CustomerTestimonial />
    </div>
  );
}

export default Home;
