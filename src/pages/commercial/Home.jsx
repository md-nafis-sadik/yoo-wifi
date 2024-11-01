import CustomerTestimonial from "@/components/commercial/home/CustomerTestimonial";
import InternetPackage from "@/components/commercial/home/InternetPackage";
import StayConnectedRegions from "@/components/commercial/home/StayConnectedRegions";
import WhyYoowifi from "@/components/commercial/home/WhyYoowifi";
import CollaborateMarquee from "@/components/shared/CollaborateMarquee";
import DownloadYoowifi from "@/components/shared/others/DownloadYoowifi";

function Home() {
  return (
    <div className="overflow-hidden w-full">
      <InternetPackage />
      <WhyYoowifi />
      <StayConnectedRegions />
      <CustomerTestimonial />
      <CollaborateMarquee />
      <DownloadYoowifi />
    </div>
  );
}

export default Home;
