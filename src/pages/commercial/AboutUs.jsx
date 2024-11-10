import AwardsAndAchievements from "@/components/commercial/about/AwardsAndAchievements";
import CompanyMission from "@/components/commercial/about/CompanyMission";
import ForBusiness from "@/components/commercial/about/ForBusiness";
import ForPersonal from "@/components/commercial/about/ForPersonal";
import KeyFeatures from "@/components/commercial/about/KeyFeatures";
import WhatWeDo from "@/components/commercial/about/WhatWeDo";
import WhoWeAre from "@/components/commercial/about/WhoWeAre";
import CustomerTestimonial from "@/components/shared/others/CustomerTestimonial";
import HeroCommon from "@/components/shared/others/HeroCommon";
import { useSelector } from "react-redux";

const AboutUs = () => {
  const {
    features,
    header,
    whoWeAre,
    companyMission,
    awardsAndAchievements,
    whatWeDo,
    personal,
    business,
  } = useSelector((state) => state.about);

  return (
    <div className="overflow-hidden w-full">
      <HeroCommon title={header.title} description={header.description} />
      <WhoWeAre data={whoWeAre} />
      <KeyFeatures data={features} />
      <CompanyMission data={companyMission} />
      <AwardsAndAchievements data={awardsAndAchievements} />
      <WhatWeDo data={whatWeDo} />
      <ForPersonal data={personal} />
      <ForBusiness data={business} />
      <CustomerTestimonial />
    </div>
  );
};

export default AboutUs;
