import SectionHeader from "@/components/shared/others/SectionHeader";
import { corporateHero } from "@/services/images";
import React from "react";

const CorporateHero = () => {
  return (
    <section className="sec_common_60 bg-white">
      <div className="container2X flex flex-col-reverse md:flex-row gap-6 md:gap-10 lg:gap-[60px]">
        <div className="flex flex-col items-center justify-center">
          <SectionHeader
            heading="Corporate"
            subHeading="UR Communications Pte Ltd, operating under the renowned brand name
            Yoowifi, introduces an advanced solution for effortless global
            connectivity via its intuitive mobile application. With a commitment
            to enriching travel journeys and fostering global communication,
            Yoowifi App delivers unmatched convenience, dependability, and
            cost-effectiveness."
            containerClassName="pb-[60px]"
            headingClassName="text-[5rem]"
            subHeadingClassName=""
          ></SectionHeader>
          <div className="containerX">
            <img src={corporateHero} alt="hero image"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateHero;
