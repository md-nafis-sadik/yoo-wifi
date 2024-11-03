import CustomerTestimonial from "@/components/commercial/home/CustomerTestimonial";
import HowItWorks from "@/components/commercial/home/HowItWorks";
import InternetPackage from "@/components/commercial/home/InternetPackage";
import Products from "@/components/commercial/home/Products";
import StayConnectedRegions from "@/components/commercial/home/StayConnectedRegions";
import WhyYoowifi from "@/components/commercial/home/WhyYoowifi";
import CollaborateMarquee from "@/components/shared/CollaborateMarquee";
import DownloadYoowifi from "@/components/shared/others/DownloadYoowifi";

function Home() {
  return (
    <div className="overflow-hidden w-full">
      <Products />
      <InternetPackage />
      <WhyYoowifi />
      <StayConnectedRegions />
      <CustomerTestimonial />
      <HowItWorks />
      <CollaborateMarquee />
      <DownloadYoowifi />
    </div>
  );
}

export default Home;
