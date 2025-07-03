import HowToGet from "@/components/commercial/sim/eSimThailand/HowToGet";
import Description from "@/components/commercial/sim/eSimThailand/Description";
import SimFeatures from "@/components/commercial/sim/eSimThailand/SimFeatures";
import ThingsToKnow from "@/components/commercial/sim/eSimThailand/ThingsToKnow";
import SupportAndFAQ from "@/components/commercial/sim/eSimThailand/SupportAndFAQ";
import HeroCommon from "@/components/shared/others/HeroCommon";
import { useTranslation } from "react-i18next";
import SimComparison from "@/components/commercial/sim/eSimThailand/SimComparison";
import SetupActivationGuide from "@/components/commercial/sim/eSimThailand/SetupActivationGuide";
import DeliveryPickup from "@/components/commercial/sim/eSimThailand/DeliveryPickup";

function Home() {
  const { t } = useTranslation();
  return (
    <section>
      <HeroCommon
        title={t("eSimThailand.heading")}
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
