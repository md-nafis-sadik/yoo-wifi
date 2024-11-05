import FeatureCard from "@/components/shared/cards/FeatureCard";
import SectionHeader from "@/components/shared/others/SectionHeader";
import { cn } from "@/lib/utils";

function KeyFeatures({ data = [], wrapperClass = "", showTitle = true }) {
  return (
    <section className="px-4">
      <div className="container3X sec_common_80 bg-neutral-100 rounded-3xl lg:px-12 xl:px-15">
        <div>
          {showTitle && (
            <SectionHeader
              heading="Key Features"
              subHeading="Don't let slow internet tie you down! Switch to our portable solutions to experience connectivity without boundaries."
              containerClassName="gap-4"
            />
          )}

          <div
            className={cn(
              "grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4 mt-4 sm:mt-10 md:mt-15",
              wrapperClass
            )}
          >
            {data?.map((item, index) => (
              <FeatureCard svg={item?.icon()} title={item?.title} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default KeyFeatures;
