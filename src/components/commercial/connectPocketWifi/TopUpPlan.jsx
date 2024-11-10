import InfoCard from "@/components/shared/cards/InfoCard";
import SectionHeader from "@/components/shared/others/SectionHeader";

const TopUpPlan = ({}) => {
  const setupSteps = [
    {
      step: 1,
      title: "Select Your Device",
      description:
        "Open the Yoowifi app, go to My Data, and select the device you want to top up.",
    },
    {
      step: 2,
      title: "Choose Your Plan",
      description:
        "Click on Add Data, select your desired country and plan, then set the start and end dates.",
    },
    {
      step: 3,
      title: "Proceed to Checkout",
      description: "Confirm your selections and proceed to checkout.",
    },
  ];

  return (
    <section className="sec_common_60">
      <div className="containerX">
        <SectionHeader
          heading="How to do a plan Top up"
          subHeading="Easily Manage Your Data Needs with Yoowifi Top-Up"
          containerClassName="gap-4"
        />
        <div className="w-full flex flex-col gap-6 mt-15">
          {setupSteps.map(({ step, title, description }, index) => (
            <InfoCard key={index} title={title} description={description}>
              <span className="text-5xl sm:text-6xl md:text-6xml font-bold text-main-600">
                {step}
              </span>
            </InfoCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopUpPlan;
