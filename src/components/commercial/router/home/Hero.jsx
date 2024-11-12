import ProductGallery from "@/components/shared/others/ProductGallery";
import { Button } from "@/components/ui/button";
import {
  commercialRoutes,
  DollarLabelIcon,
  GlobeIcon,
  WifiIcon,
} from "@/services";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Hero() {
  const { product } = useSelector((state) => state.router);
  const navigate = useNavigate();
  return (
    <section className="pt-6 sm:pt-8 md:pt-10 px-4 sm:px-8">
      <div className="containerX">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-10 lg:gap-15">
          <div className="w-full lg:max-w-[532px]">
            <ProductGallery items={product?.images} />
          </div>
          <div className="w-full">
            <h2 className="text-2xl sm:text-4xl md:text-6xml leading-[120%] text-black-900 font-bold">
              {product?.name}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-black-600 leading-[120%] mt-2 sm:mt-3 md:mt-4">
              {product?.description}
            </p>
            <div className="flex flex-col gap-4 mt-10">
              <div className="flex items-center gap-4">
                <div className="w-9 md:w-11 aspect-square bg-main-10 rounded-full flex items-center justify-center">
                  <WifiIcon className="" />
                </div>
                <span className="text-sm sm:text-base">
                  Stay Connected Anywhere
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-9 md:w-11 aspect-square bg-main-10 rounded-full flex items-center justify-center">
                  <GlobeIcon />
                </div>
                <span className="text-sm sm:text-base">
                  Save BIG on International Roaming
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-9 md:w-11 aspect-square bg-main-10 rounded-full flex items-center justify-center">
                  <DollarLabelIcon />
                </div>
                <span className="text-sm sm:text-base">
                  Unbeatable Pricing Guarantee
                </span>
              </div>
            </div>
            <div className="flex flex-col md:items-end gap-4">
              <div className="w-full mt-4 sm:mt-7 md:mt-12 flex flex-col  justify-end md:items-end gap-2">
                <h4 className="text-sm sm:text-lg md:text-2xl text-black-900">
                  From{" "}
                  <span className="text-2xl sm:text-3xl md:text-5xl font-bold">
                    {product?.price?.currency} {product?.price?.amount}
                  </span>
                </h4>
                <Button
                  className="w-full sm:max-w-max text-base font-semibold leading-[120%]"
                  type="button"
                  onClick={() => navigate(commercialRoutes.routerRegion.path)}
                >
                  View Plans
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
