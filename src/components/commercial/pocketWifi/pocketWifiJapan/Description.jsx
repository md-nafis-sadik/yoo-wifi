import { images } from "@/services";
import { useTranslation } from "react-i18next";

function Description() {
  const { t } = useTranslation();
const pocketWifiJapan = images.pocketWifiJapan;
  return (
    <div className="pt-6 md:pt-10 xl:pt-15 pb-6 md:pb-10 px-4 md:px-10 lg:px-16">
      <div className="containerX">
        <div className="text-black-600 mb-4 text-base lg:text-lg">{t("pocketWifiJapan.hero.para1")}</div>
        <div className="text-black-600 text-base lg:text-lg">{t("pocketWifiJapan.hero.para1")}</div>
        <img src={pocketWifiJapan} className="rounded-xl mt-8 lg:mt-14"/>
      </div>
    </div>
  );
}

export default Description;
