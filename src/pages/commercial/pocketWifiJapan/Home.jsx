import WifiPlans from "@/components/commercial/pocketWifi/pocketWifiJapan/WifiPlans";
import DeliveryOptions from "@/components/commercial/pocketWifi/pocketWifiJapan/DeliveryOptions";
import Description from "@/components/commercial/pocketWifi/pocketWifiJapan/Description";
import WifiFeatures from "@/components/commercial/pocketWifi/pocketWifiJapan/WifiFeatures";
import WhyPocketWifi from "@/components/commercial/pocketWifi/pocketWifiJapan/WhyPocketWifi";
import GetWifi from "@/components/commercial/pocketWifi/pocketWifiJapan/GetWifi";
import Comparison from "@/components/commercial/pocketWifi/pocketWifiJapan/pocketWifiDetails/Comparison";
import SupportAndFAQ from "@/components/commercial/pocketWifi/pocketWifiJapan/SupportAndFAQ";
import HeroCommon from "@/components/shared/others/HeroCommon";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import HowItWorks from "@/components/commercial/pocketWifi/pocketWifiJapan/HowItWorks";

function Home() {
  const { japanDataPlan } = useSelector((state) => state.dataPlan);
  const { t } = useTranslation();
  return (
    <section>
      <HeroCommon
        title={t("pocketWifiJapan.heading")}
        titleClassName="!normal-case"
      />
      <Description />
      <WifiPlans />
      <WifiFeatures />
      <WhyPocketWifi />
      <GetWifi />
      <DeliveryOptions />
      <HowItWorks />
      <Comparison japanDataPlan={japanDataPlan} />
      <SupportAndFAQ />
    </section>
  );
}

export default Home;
