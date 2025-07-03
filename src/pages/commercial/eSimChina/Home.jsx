import HowToGet from "@/components/commercial/sim/eSimChina/HowToGet";
import Description from "@/components/commercial/sim/eSimChina/Description";
import SimFeatures from "@/components/commercial/sim/eSimChina/SimFeatures";
import ThingsToKnow from "@/components/commercial/sim/eSimChina/ThingsToKnow";
import SupportAndFAQ from "@/components/commercial/sim/eSimChina/SupportAndFAQ";
import HeroCommon from "@/components/shared/others/HeroCommon";
import { useTranslation } from "react-i18next";
import SimComparison from "@/components/commercial/sim/eSimChina/SimComparison";
import SetupActivationGuide from "@/components/commercial/sim/eSimChina/SetupActivationGuide";
import DeliveryPickup from "@/components/commercial/sim/eSimChina/DeliveryPickup";

function Home() {
  const { t } = useTranslation();
  return (
    <section>
      <HeroCommon
        title={t("eSimChina.heading")}
        titleClassName="!normal-case"
      />
      <Description />
      <HowToGet />
      <SimComparison/>
      <SimFeatures />
      <DeliveryPickup/>
      <SetupActivationGuide/>
      <ThingsToKnow />
      <SupportAndFAQ />
    </section>
  );
}

export default Home;
