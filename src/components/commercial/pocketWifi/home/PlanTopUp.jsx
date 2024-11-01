import InfoCard from "@/components/shared/cards/InfoCard";
import SectionHeader from "@/components/shared/others/SectionHeader";

function PlanTopUp() {
  return (
    <section className="sec_common_60">
      <div className="containerX">
        <SectionHeader
          heading="How to do a plan Top up"
          subHeading="Easily Manage Your Data Needs with Yoowifi Top-Up"
          containerClassName="gap-4"
        />
        <div className="w-full flex flex-col gap-6 mt-15">
          <InfoCard
            title="Select Your Device"
            description="Open the Yoowifi app, go to My Data, and select the device you want to top up."
          >
            <span className="text-6xml font-bold text-main-600">1</span>
          </InfoCard>
          <InfoCard
            title="Choose Your Plan"
            description="Click on Add Data, select your desired country and plan, then set the start and end dates."
          >
            <span className="text-6xml font-bold text-main-600">2</span>
          </InfoCard>
          <InfoCard
            title="Proceed to Checkout"
            description="Confirm your selections and proceed to checkout."
          >
            <span className="text-6xml font-bold text-main-600">3</span>
          </InfoCard>
        </div>
      </div>
    </section>
  );
}

export default PlanTopUp;
