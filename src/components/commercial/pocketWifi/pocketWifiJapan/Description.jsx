import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { images } from "@/services";
import useEmblaCarousel from "embla-carousel-react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function Description() {
  const { t } = useTranslation();
const pocketWifiChina = images.pocketWifiChina;
  return (
    <div className="pt-12 pb-15 px-4 md:px-10 lg:px-16">
      <div className="containerX">
        <div className="text-black-600 mb-4 text-lg">{t("pocketWifiChina.hero.para1")}</div>
        <div className="text-black-600 text-lg">{t("pocketWifiChina.hero.para1")}</div>
        <img src={pocketWifiChina} className="rounded-xl mt-8 lg:mt-14"/>
      </div>
    </div>
  );
}

export default Description;
