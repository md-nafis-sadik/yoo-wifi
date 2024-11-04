import FeatureCard from "@/components/shared/cards/FeatureCard";
import SectionHeader from "@/components/shared/others/SectionHeader";
import { useSelector } from "react-redux";

function KeyFeatures() {
  const { features } = useSelector((state) => state.pocketWifi);
  return (
    <section className="px-4">
      <div className="container3X sec_common_80 bg-neutral-100 rounded-3xl lg:px-12 xl:px-15">
        <div>
          <SectionHeader
            heading="Key Features"
            subHeading="Don't let slow internet tie you down! Switch to our portable solutions to experience connectivity without boundaries."
            containerClassName="gap-4"
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4 mt-15">
            {features?.map((item, index) => (
              <FeatureCard svg={item?.icon()} title={item?.title} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default KeyFeatures;
