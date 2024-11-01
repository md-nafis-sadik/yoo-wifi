import InfoCard from "@/components/shared/cards/InfoCard";
import SectionHeader from "@/components/shared/others/SectionHeader";
import { images } from "@/services";

function Indicators() {
  return (
    <section className="sec_common_60">
      <div className="containerX">
        <SectionHeader
          heading="Battery LED Indicators"
          subHeading="Keep Track of Your Device's Power Status Easily"
          containerClassName="gap-4"
        />
        <div className="flex flex-col sm:flex-row sm:items-center gap-15  mt-15">
          <div className="w-full flex flex-col gap-6">
            <InfoCard
              title="The battery capacity is shown by different color"
              description="Lorem Ipsum is simply dummy text of the printing and typeset industry.Lorem Ipsum is simply"
              icon={images.charging}
            />
            <InfoCard
              title="Charging"
              description="Lorem Ipsum is simply dummy text of the printing and typeset industry.Lorem Ipsum is simply"
              icon={images.battery}
            />
          </div>
          <div className="w-full sm:max-w-[474px] p-6">
            <div className="flex flex-col gap-6 divide-y divide-neutral-300">
              <p className="text-lg text-black-600 p-4">
                *Please contact our customer support at hello@yoowifi.com or
                WhatsApp us at (65) 6100 9998
              </p>
              <p className="text-lg text-black-600 p-4 pt-6">
                **All indicators flashing means is under going system software
                update**
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Indicators;
