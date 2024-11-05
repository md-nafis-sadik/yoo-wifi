import InfoCard from "@/components/shared/cards/InfoCard";
import SectionHeader from "@/components/shared/others/SectionHeader";

function HowToTopUp() {
  return (
    <section className="sec_common_60">
      <div className="containerX">
        <SectionHeader
          heading="How to Top up SIM/eSIM"
          subHeading="3 Simple Steps to Top Up Your SIM/eSIM"
          containerClassName="gap-4"
        />
        <div className="w-full flex flex-col gap-6 mt-15">
          <InfoCard
            title="Open the Yoowifi App"
            description="In the Yoowifi app, navigate to My Data and select the SIM or eSIM you want to top up."
          >
            <span className="text-5xl sm:text-6xl md:text-6xml font-bold text-main-600">1</span>
          </InfoCard>
          <InfoCard
            title="Add Data"
            description="Tap on Add Data, then choose your destination country, plan, data size, and select number of days."
          >
            <span className="text-5xl sm:text-6xl md:text-6xml font-bold text-main-600">2</span>
          </InfoCard>
          <InfoCard
            title="Proceed to Checkout"
            description="Confirm your selections and proceed to checkout."
          >
            <span className="text-5xl sm:text-6xl md:text-6xml font-bold text-main-600">3</span>
          </InfoCard>
        </div>
      </div>
    </section>
  );
}

export default HowToTopUp;
