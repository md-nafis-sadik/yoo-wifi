import ProductGallery from "@/components/shared/others/ProductGallery";
import { Button } from "@/components/ui/button";
import {
  commercialRoutes,
  DollarLabelIcon,
  EyeIcon,
  GlobeIcon,
  WifiIcon,
} from "@/services";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Hero() {
  const { product } = useSelector((state) => state.pocketWifi);
  const [activeColor, setActiveColor] = useState(product?.colors[0]);
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <section className="pt-6 sm:pt-8 md:pt-10 px-4 sm:px-8">
      <div className="containerX">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-10 lg:gap-15">
          <div className="w-full lg:max-w-[532px]">
            <ProductGallery items={product?.images} />
          </div>
          <div className="w-full">
            <h2 className="text-2xl sm:text-4xl md:text-6xml leading-[120%] text-black-900 font-bold">
              {t("pocketWifi.product.name")}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-black-600 leading-[120%] mt-2 sm:mt-3 md:mt-4">
              {t("pocketWifi.product.description")}
            </p>
            <div className="flex flex-col gap-4 mt-10">
              <div className="flex items-center gap-4">
                <div className="w-9 md:w-11 aspect-square bg-main-10 rounded-full flex items-center justify-center">
                  <WifiIcon className="" />
                </div>
                <span className="text-sm sm:text-base">
                  {t("pocketWifi.product.features.0")}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-9 md:w-11 aspect-square bg-main-10 rounded-full flex items-center justify-center">
                  <GlobeIcon />
                </div>
                <span className="text-sm sm:text-base">
                  {t("pocketWifi.product.features.1")}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-9 md:w-11 aspect-square bg-main-10 rounded-full flex items-center justify-center">
                  <DollarLabelIcon />
                </div>
                <span className="text-sm sm:text-base">
                  {t("pocketWifi.product.features.2")}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-9 md:w-11 aspect-square bg-main-10 rounded-full flex items-center justify-center">
                  <EyeIcon />
                </div>
                <span className="text-sm sm:text-base">
                  {t("pocketWifi.product.features.3")}
                </span>
              </div>
            </div>

            <Button
              className="w-full sm:max-w-[280px] text-base font-semibold leading-[120%] mt-6 lg:mt-12"
              type="button"
              onClick={() => navigate(commercialRoutes.pocketWifiRegion.path)}
            >
              {t("pocketWifi.product.buttons.text2")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
