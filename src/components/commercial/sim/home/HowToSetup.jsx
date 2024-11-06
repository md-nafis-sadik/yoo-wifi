import SetupSimCard from "@/components/shared/cards/SetupSimCard";
import SectionHeader from "@/components/shared/others/SectionHeader";
import { ArrowDoubleIcon } from "@/services";
import { Fragment } from "react";
import { useSelector } from "react-redux";

function HowToSetup() {
  const { setupInstructions } = useSelector((state) => state.sim);
  return (
    <section className="sec_common_60">
      <div className="containerX">
        <SectionHeader
          heading="How to Set Up Your SIM"
          subHeading="Don’t let slow internet tie you down! Switch to our portable solutions to experience connectivity without boundaries."
          containerClassName="gap-4"
        />
        <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-start gap-6 md:gap-3 mt-6 sm:mt-10 md:mt-15">
          {setupInstructions?.map((item, index) => (
            <Fragment key={index}>
              <SetupSimCard key={index} item={item} />
              {index !== setupInstructions?.length - 1 && (
                <ArrowDoubleIcon className="shrink-0 rotate-90 md:rotate-0 md:mt-12" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowToSetup;
