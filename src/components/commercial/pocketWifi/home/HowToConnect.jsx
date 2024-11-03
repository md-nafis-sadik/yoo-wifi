import InfoCard from "@/components/shared/cards/InfoCard";
import SectionHeader from "@/components/shared/others/SectionHeader";

function HowToConnect() {
  return (
    <section className="sec_common_60">
      <div className="containerX">
        <SectionHeader
          heading="How to connect Pocketwifi?"
          subHeading="Effortlessly Connect to Your Pocket WiFi in Just a Few Simple Steps"
          containerClassName="gap-4"
        />
        <div className="w-full flex flex-col gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-10 md:mt-15">
          <InfoCard
            title="Turn On the Pocket WiFi"
            description="Press the power button to turn it on and wait for it to connect to the network."
          >
            <span className="text-5xl sm:text-6xl md:text-6xml font-bold text-main-600">
              1
            </span>
          </InfoCard>
          <InfoCard
            title="Find the WiFi Name"
            description="Check the device's screen for the WiFi network name (SSID)."
          >
            <span className="text-5xl sm:text-6xl md:text-6xml font-bold text-main-600">
              2
            </span>
          </InfoCard>
          <InfoCard
            title="Connect to WiFi"
            description="On your smartphone, tablet, or laptop, open WiFi settings, select the SSID, enter the password displayed on the device, and you will be connected to the internet."
          >
            <span className="text-5xl sm:text-6xl md:text-6xml font-bold text-main-600">
              3
            </span>
          </InfoCard>
        </div>
      </div>
    </section>
  );
}

export default HowToConnect;
