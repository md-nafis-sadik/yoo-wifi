import SectionHeader from "@/components/shared/others/SectionHeader";

function ConnectedWay() {
  return (
    <section className="sec_common_60">
      <div className="containerX">
        <SectionHeader
          heading="Stay Connected Your Way"
          subHeading="Purchase or rent a device with flexibility to match your connectivity needs. Choose between owning a long-term solution or renting for short-term use, ensuring you have reliable access whenever you need it."
          containerClassName="gap-4"
        />
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-10 md:mt-15">
          <div className="p-4 sm:p-6 sm:pl-8 md:pl-10 rounded-xl sm:rounded-2xl border border-main-600 bg-main-100 flex flex-col gap-2 sm:gap-4">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-main-600">
              Buy Your Own Device
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-black-600 leading-[140%]">
              Purchase a device for long-term, reliable connectivity whenever
              you need it.
            </p>
          </div>
          <div className="p-4 sm:p-6 sm:pl-8 md:pl-10 rounded-xl sm:rounded-2xl border border-main-600 bg-main-100 flex flex-col gap-2 sm:gap-4">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-main-600">
              Rental
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-black-600 leading-[140%]">
              Access reliable connectivity when you need it with flexible,
              short-term device rental options—ideal for trips, events, or
              temporary use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConnectedWay;
