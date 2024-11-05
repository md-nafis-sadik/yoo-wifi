import InfoCard from "@/components/shared/cards/InfoCard";
import SectionHeader from "@/components/shared/others/SectionHeader";
import { PowerAdapterIcon, RouterIcon } from "@/services";

function Included() {
  return (
    <section className="sec_common_60">
      <div className="containerX">
        <SectionHeader
          heading="What's included"
          subHeading="Everything You Need for Seamless Connectivity"
          containerClassName="gap-4"
        />
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-6  mt-6 sm:mt-10 md:mt-15">
          <InfoCard wrapperClass="w-full" title="x1 Wifi Router">
            <div className="w-15 sm:w-20 aspect-square flex items-center justify-center bg-white rounded-xl">
              <RouterIcon className="w-10 sm:w-14" />
            </div>
          </InfoCard>
          <InfoCard wrapperClass="w-full" title="x1 Power Adapter">
            <div className="w-15 sm:w-20 aspect-square flex items-center justify-center bg-white rounded-xl">
              <PowerAdapterIcon className="w-10 sm:w-14" />
            </div>
          </InfoCard>
        </div>
      </div>
    </section>
  );
}

export default Included;
