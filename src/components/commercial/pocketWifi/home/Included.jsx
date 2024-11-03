import InfoCard from "@/components/shared/cards/InfoCard";
import SectionHeader from "@/components/shared/others/SectionHeader";
import { ChargingCable, DevicePouch, PowerIcon } from "@/services";

function Included() {
  return (
    <section className="sec_common_60">
      <div className="containerX">
        <SectionHeader
          heading="What's included"
          subHeading="Everything You Need for Seamless Connectivity"
          containerClassName="gap-4"
        />
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 md:gap-15  mt-6 sm:mt-10 md:mt-15">
          <div className="w-full flex flex-col gap-3 sm:gap-4 md:gap-6">
            <InfoCard title="x1 Charging Cable">
              <div className="w-15 sm:w-20 aspect-square flex items-center justify-center bg-white rounded-xl">
                <ChargingCable className="w-10 sm:w-14" />
              </div>
            </InfoCard>
            <InfoCard title="x1 Device Pouch">
              <div className="w-15 sm:w-20 aspect-square flex items-center justify-center bg-white rounded-xl">
                <DevicePouch className="w-10 sm:w-14" />
              </div>
            </InfoCard>
          </div>
          <div className="w-full sm:max-w-[474px]">
            <h4 className="text-lg sm:text-xl md:text-2xml text-black-900 font-bold">
              How To Operate
            </h4>
            <div className="flex flex-col gap-6 divide-y divide-neutral-300 mt-6 sm:mt-8 md:mt-10">
              <div className="flex gap-4">
                <PowerIcon className="w-10 h-10 sm:w-15 sm:h-15" />
                <div className="flex flex-col gap-2">
                  <h5 className="text-base sm:text-lg md:text-2xl font-bold text-black-700 leading-[140%]">
                    Power On
                  </h5>
                  <p className="text-sm sm:text-base md:text-lg text-black-600">
                    Press the power button for 3 seconds
                  </p>
                </div>
              </div>
              <div className="flex pt-6 gap-4">
                <PowerIcon
                  className="w-10 h-10 sm:w-15 sm:h-15"
                  color="#D81F22"
                />
                <div className="flex flex-col gap-2">
                  <h5 className="text-base sm:text-lg md:text-2xl font-bold text-black-700 leading-[140%]">
                    Power Off
                  </h5>
                  <p className="text-sm sm:text-base md:text-lg text-black-600">
                    Press the power button for 3 seconds
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Included;
