import WifiPlans from "@/components/commercial/pocketWifi/pocketWifiChina/WifiPlans";
import DeliveryOptions from "@/components/commercial/pocketWifi/pocketWifiChina/DeliveryOptions";
import Description from "@/components/commercial/pocketWifi/pocketWifiChina/Description";
import WifiFeatures from "@/components/commercial/pocketWifi/pocketWifiChina/WifiFeatures";
import WhyPocketWifi from "@/components/commercial/pocketWifi/pocketWifiChina/WhyPocketWifi";
import GetWifi from "@/components/commercial/pocketWifi/pocketWifiChina/GetWifi";
import Comparison from "@/components/commercial/pocketWifi/pocketWifiChina/pocketWifiDetails/Comparison";
import SupportAndFAQ from "@/components/commercial/pocketWifi/pocketWifiChina/SupportAndFAQ";
import HeroCommon from "@/components/shared/others/HeroCommon";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function Home() {
  const { chinaDataPlan } = useSelector((state) => state.dataPlan);
  const { t } = useTranslation();
  const { chinaWifiFaqs } = useSelector((state) => state.contact);
  return (
    <section>
      <HeroCommon
        title={t("pocketWifiChina.heading")}
        titleClassName="!normal-case"
      />
      <Description />
      <WifiPlans />
      <WifiFeatures />
      <WhyPocketWifi />
      <GetWifi />
      <DeliveryOptions />
      <Comparison chinaDataPlan={chinaDataPlan} />
      <SupportAndFAQ data={chinaWifiFaqs} />
    </section>
  );
}

export default Home;
