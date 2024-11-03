import SectionHeader from "@/components/shared/others/SectionHeader";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "@/services";

function ReturnDevice() {
  return (
    <section className="sec_common_60">
      <div className="containerX">
        <SectionHeader
          heading="How to Return Device?"
          subHeading="Follow our easy steps to ensure a hassle-free return experience."
          containerClassName="gap-4"
        />
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-10 md:mt-15">
          <div className="p-6 sm:pl-8 md:pl-10 rounded-2xl bg-neutral-100 h-full flex flex-col justify-between gap-4">
            <div>
              <h3 className="text-sm sm:text-base md:text-2xl font-bold text-black-900">
                Singpost Drop-Off
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-black-600 leading-[140%] mt-2 sm:mt-3 md:mt-4">
                When you rent the device, a pre-paid return label will be
                included in the package. You can use this label to easily mail
                the device back. After returning it, you’ll likely receive an
                email confirmation once the return is processed.
              </p>
            </div>
            <Button className="p-2.5 sm:px-4 md:px-6 sm:py-3 md:py-4 rounded sm:rounded-xl">
              <span>View Locations</span>
              <ArrowUpRightIcon />
            </Button>
          </div>
          <div className="p-6 sm:pl-8 md:pl-10 rounded-2xl bg-neutral-100 h-full flex flex-col justify-between gap-4">
            <div>
              <h3 className="text-sm sm:text-base md:text-2xl font-bold text-black-900">
                Pickup Drop off Locations
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-black-600 leading-[140%] mt-2 sm:mt-3 md:mt-4">
                With Yoowifi, you can effortlessly pick up your device at any of
                our designated locations and return it at one of our 30+
                convenient drop-off points across the island. This streamlined
                process guarantees a hassle-free experience, allowing you to
                stay connected wherever your travels take you!
              </p>
            </div>
            <Button className="p-2.5 sm:px-4 md:px-6 sm:py-3 md:py-4 rounded sm:rounded-xl">
              <span>View Locations</span>
              <ArrowUpRightIcon />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReturnDevice;
