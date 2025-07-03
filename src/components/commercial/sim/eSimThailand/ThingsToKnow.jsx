import InfoCard from "@/components/shared/cards/InfoCard";
import SectionHeader from "@/components/shared/others/SectionHeader";
import { useTranslation } from "react-i18next";

function ThingsToKnow() {
  const { t } = useTranslation();
  const steps = [0, 1, 2, 3];

  return (
    <section className="sec_common_60">
      <div className="containerX">
        <SectionHeader
          heading={t("eSimThailand.thingsToKnow.title")}
          subHeading={t("eSimThailand.thingsToKnow.titlefollow")}
          containerClassName="gap-4"
          headingClassName="text-4xl"
        />
        <div className="w-full flex flex-col gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-10 md:mt-15">
          {steps.map((step) => (
            <InfoCard
              key={step}
              title={t(`eSimThailand.thingsToKnow.steps.${step}.title`)}
              description={t(
                `eSimThailand.thingsToKnow.steps.${step}.description`
              )}
            >
              <span className="text-5xl sm:text-6xl md:text-6xml font-bold text-main-600">
                {step + 1}
              </span>
            </InfoCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ThingsToKnow;
