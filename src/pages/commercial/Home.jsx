import GetYourOwn from "@/components/commercial/home/GetYourOwn";
import Hero from "@/components/commercial/home/Hero";
import HowItWorks from "@/components/commercial/home/HowItWorks";
import InternetPackage from "@/components/commercial/home/InternetPackage";
import Products from "@/components/commercial/home/Products";
import WhyYoowifi from "@/components/commercial/home/WhyYoowifi";
import CollaborateMarquee from "@/components/shared/CollaborateMarquee";
import CustomerTestimonial from "@/components/shared/others/CustomerTestimonial";
import CountryCoverage from "./countryCoverage/CountryCoverage";

function Home() {
  return (
    <div className="overflow-hidden w-full">
      <Hero />
      <Products />
      <GetYourOwn />
      <InternetPackage />
      <WhyYoowifi />
      {/* <StayConnectedRegions /> */}
      <CountryCoverage showBanner={false} />
      <CustomerTestimonial />
      <HowItWorks />
      <CollaborateMarquee />
    </div>
  );
}

export default Home;
