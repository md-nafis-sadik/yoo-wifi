import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { images } from "@/services";
import useEmblaCarousel from "embla-carousel-react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function Description() {
  const { t } = useTranslation();
const pocketWifiJapan = images.pocketWifiJapan;
  return (
    <div className="pt-12 pb-15 px-4 md:px-10 lg:px-16">
      <div className="containerX">
        <div className="text-black-600 mb-4 text-lg">Unlock your Japan adventure with seamless connectivity. Whether navigating Tokyo’s complex subway system, translating signs in Kyoto, or arranging business meetings in Osaka, reliable internet is vital. Avoid costly mobile roaming from Singapore providers and the hassle of local SIM registration and language navigation.</div>
        <div className="text-black-600 text-lg">In such situations, a pocket WiFi is a better alternative. With fast 4G LTE speeds, unlimited data, and support for multiple devices, it's the easiest and most reliable way to stay online across your entire Japan trip. No tech hassle, no SIM swapping, just instant, secure internet as soon as you land.</div>
        <img src={pocketWifiJapan} className="rounded-xl mt-8 lg:mt-14"/>
      </div>
    </div>
  );
}

export default Description;
