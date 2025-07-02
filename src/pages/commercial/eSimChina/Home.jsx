import WifiPlans from "@/components/commercial/sim/eSimChina/WifiPlans";
import DeliveryOptions from "@/components/commercial/sim/eSimChina/DeliveryOptions";
import Description from "@/components/commercial/sim/eSimChina/Description";
import WifiFeatures from "@/components/commercial/sim/eSimChina/WifiFeatures";
import WhyPocketWifi from "@/components/commercial/sim/eSimChina/WhyPocketWifi";
import GetWifi from "@/components/commercial/sim/eSimChina/GetWifi";
import Comparison from "@/components/commercial/sim/eSimChina/pocketWifiDetails/Comparison";
import SupportAndFAQ from "@/components/commercial/sim/eSimChina/SupportAndFAQ";
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
        title="eSIM China"
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
