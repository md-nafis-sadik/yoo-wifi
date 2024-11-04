import CompanyMission from "@/components/commercial/about/CompanyMission";
import WhoWeAre from "@/components/commercial/about/WhoWeAre";
import CustomerTestimonial from "@/components/shared/others/CustomerTestimonial";
import HeroCommon from "@/components/shared/others/HeroCommon";
import { useSelector } from "react-redux";

const AboutUs = () => {
  const aboutData = useSelector((state) => state.about);

  return (
    <div className="overflow-hidden w-full">
      <HeroCommon
        title={aboutData.header.title}
        description={aboutData.header.description}
      />
      <WhoWeAre data={aboutData.whoWeAre} />
      <CompanyMission data={aboutData.companyMission} />
      <CustomerTestimonial />
    </div>
  );
};

export default AboutUs;
