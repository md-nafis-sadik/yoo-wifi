import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { images } from "@/services";
import useEmblaCarousel from "embla-carousel-react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function Description() {
  const { t } = useTranslation();
  const eSimChina = images.eSimChina;
  return (
    <div className="pt-12 pb-10 px-4 md:px-10 lg:px-16">
      <div className="containerX">
        <div className="text-black-600 mb-4 text-lg">
          Stay connected on your diverse and dynamic Chinese adventure. Whether
          you're using Google Maps in Beijing or sharing moments on
          WeChat/TikTok from the Great Wall, reliable internet is key to a
          smooth and enriching experience. Avoid costly roaming fees and the
          hassle of searching for local SIM cards upon arrival.
        </div>
        <div className="text-black-600 text-lg">
          That's where Yoowifi’s eSIM steps in. We provide essential seamless
          connectivity for your exploration of China. Confidently navigate and
          share your experiences, always assured of reliable, affordable
          internet access.
        </div>
        <h3 className="text-2xl md:text-4xl mt-20 font-semibold">
          Yoowifi's China Plans
        </h3>
        <img src={eSimChina} className="rounded-xl lg:mt-14" />

        <div className="text-black-600 mb-4 text-lg mt-8">
          Stay connected on your diverse and dynamic Chinese adventure. Whether
          you're using Google Maps in Beijing or sharing moments on
          WeChat/TikTok from the Great Wall, reliable internet is key to a
          smooth and enriching experience. Avoid costly roaming fees and the
          hassle of searching for local SIM cards upon arrival.
        </div>
        <div className="text-black-600 text-lg">
          That's where Yoowifi’s eSIM steps in. We provide essential seamless
          connectivity for your exploration of China. Confidently navigate and
          share your experiences, always assured of reliable, affordable
          internet access.
        </div>
      </div>
    </div>
  );
}

export default Description;
