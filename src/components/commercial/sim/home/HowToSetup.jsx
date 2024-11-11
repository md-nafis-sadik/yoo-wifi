import SetupSimCard from "@/components/shared/cards/SetupSimCard";
import SectionHeader from "@/components/shared/others/SectionHeader";
import { Button } from "@/components/ui/button";
import { ArrowDoubleIcon, ArrowUpRightIcon } from "@/services";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function HowToSetup({ link }) {
  const { setupInstructions } = useSelector((state) => state.sim);
  return (
    <section className="sec_common_60">
      <div className="containerX">
        <SectionHeader
          heading="How to Set Up Your SIM"
          subHeading="Don't let slow internet tie you down! Switch to our portable solutions to experience connectivity without boundaries."
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

      {link && (
        <div className="flex_center mt-4 md:mt-8">
          <Link to={link.to}>
            <Button className={"w-full md:w-fit h-11 md:h-[52px]"}>
              <span>{link.text}</span>
              <ArrowUpRightIcon className={"!h-6 !w-6 shrink-0"} />
            </Button>
          </Link>
        </div>
      )}
    </section>
  );
}

export default HowToSetup;
