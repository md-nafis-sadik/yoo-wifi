import RouterCartFooter from "@/components/commercial/router/RouterCartFooter";
import DiscountDownloadApp from "@/components/shared/others/DiscountDownloadApp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { commercialRoutes } from "@/services";
import {
  handleNextPocketWifiCart,
  setPocketWifiCartData,
} from "@/store/module/pocketWifi/slice";
import {
  handleNextRouterCart,
  setRouterCartData,
} from "@/store/module/router/slice";
import { handleNextSimCart, setSimCartData } from "@/store/module/sim/slice";
import useEmblaCarousel from "embla-carousel-react";
import { useState } from "react";
import { CountrySelect } from "react-country-state-city";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

function RouterRegion() {
  const tabs = [
    { name: "Pocket WIFI", route: commercialRoutes.pocketWifiRegion.path },
    { name: "SIM/eSIM", route: commercialRoutes.simRegion.path },
    { name: "Router", route: commercialRoutes.routerRegion.path },
  ];

  const { cart } = useSelector((state) => state.router);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pathname = useLocation().pathname;

  const isActive = cart?.productCountry?.id ? true : false;

  const [activeTab, setActiveTab] = useState(
    tabs.find((tab) => tab.route === pathname)?.name
  );

  const options = { align: "start" };
  const [emblaRef] = useEmblaCarousel(options);

  const handleCountrySelect = (value) => {
    dispatch(setPocketWifiCartData({ productCountry: value }));
    dispatch(setRouterCartData({ productCountry: value }));
    dispatch(setSimCartData({ productCountry: value }));
  };

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    dispatch(setPocketWifiCartData({ [name]: value }));
    dispatch(setRouterCartData({ [name]: value }));
    dispatch(setSimCartData({ [name]: value }));
  };

  const handleNext = () => {
    if (activeTab === "Pocket WIFI") {
      navigate(commercialRoutes.pocketWifiPlan.path);
      dispatch(handleNextPocketWifiCart());
    } else if (activeTab === "SIM/eSIM") {
      navigate(commercialRoutes.simPlan.path);
      dispatch(handleNextSimCart());
    } else if (activeTab === "Router") {
      navigate(commercialRoutes.routerPlan.path);
      dispatch(handleNextRouterCart());
    }
  };

  const handlePrev = () => {
    navigate(commercialRoutes.routerHome.path);
  };

  return (
    <div className="w-full flex flex-col gap-6 sm:gap-8 md:gap-12">
      <div className="w-full flex flex-col gap-5">
        <h2 className="text-base md:text-2xl !leading-[1.2] md:!leading-[1.4] font-semibold md:font-bold">
          Select Product
        </h2>
        <div ref={emblaRef} className="w-full max-w-full overflow-hidden">
          <div className="flex items-center gap-4">
            {tabs.map(({ name }) => (
              <Button
                key={name}
                className={cn(
                  "w-full hover:bg-secondary-500",
                  activeTab === name ? "text-black-900 font-semibold" : ""
                )}
                variant={activeTab === name ? "secondary" : "outline"}
                onClick={() => setActiveTab(name)}
              >
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-full flex flex-col gap-4 sm:gap-6">
          <div className="flex flex-col gap-2">
            <span className="label">Country</span>
            <CountrySelect
              name="country"
              defaultValue={cart?.productCountry}
              onChange={(value) => handleCountrySelect(value)}
              containerClassName="country-select bg-neutral-50"
              inputClassName="!border-none !outline-none bg-transparent"
              placeHolder="Select Country"
            />
          </div>
          <Input
            name="promoCode"
            placeholder="Promo code"
            label="Promo code"
            required
            onChange={handleInputChange}
            defaultValue={cart?.promoCode}
          />
          <Input
            name="memberId"
            placeholder="Enter member id"
            label="Member ID"
            required
            onChange={handleInputChange}
            defaultValue={cart?.memberId}
          />
          <RouterCartFooter
            prevHandler={handlePrev}
            nextHandler={handleNext}
            isActive={isActive}
          />
        </div>
      </div>
      <DiscountDownloadApp />
    </div>
  );
}

export default RouterRegion;
