import PocketWifiCartFooter from "@/components/commercial/pocketWifi/PocketWifiCartFooter";
import RouterCartFooter from "@/components/commercial/router/RouterCartFooter";
import PackageCard from "@/components/shared/cards/PackageCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { commercialRoutes } from "@/services";
import {
  handleNextRouterCart,
  setRouterCartData,
} from "@/store/module/router/slice";
import useEmblaCarousel from "embla-carousel-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function SimPlan() {
  const { recomandedPackages, cart } = useSelector((state) => state.router);
  const [activeTab, setActiveTab] = useState("all");
  const dispatch = useDispatch();
  const isActive = cart?.package?.id ? true : false;
  const options = { align: "start" };
  const [emblaRef] = useEmblaCarousel(options);
  const navigate = useNavigate();

  const filterByCategory = (item) => {
    if (activeTab == "all") return true;
    else return item?.category == activeTab;
  };

  const handleSelectPlan = (item) => {
    dispatch(setRouterCartData({ package: item }));
  };

  const handleNext = () => {
    navigate(commercialRoutes.routerCartService.path);
    dispatch(handleNextRouterCart());
  };

  const handlePrev = () => {
    navigate(commercialRoutes.routerRegion.path);
  };

  return (
    <div className="w-full">
      <div className="w-full flex flex-col gap-5">
        <h2>Select a Plan</h2>
        <div ref={emblaRef} className="w-full max-w-full overflow-hidden">
          <div className="flex items-center gap-4">
            <Button
              className={cn(
                "w-full hover:bg-secondary-500",
                activeTab == "all" ? "text-black-900 font-semibold" : ""
              )}
              variant={activeTab == "all" ? "secondary" : "outline"}
              onClick={() => setActiveTab("all")}
            >
              All
            </Button>
            <Button
              className={cn(
                "w-full hover:bg-secondary-500",
                activeTab == "daily" ? "text-black-900 font-semibold" : ""
              )}
              variant={activeTab == "daily" ? "secondary" : "outline"}
              onClick={() => setActiveTab("daily")}
            >
              Daily
            </Button>
            <Button
              className={cn(
                "w-full hover:bg-secondary-500",
                activeTab == "monthly" ? "text-black-900 font-semibold" : ""
              )}
              variant={activeTab == "monthly" ? "secondary" : "outline"}
              onClick={() => setActiveTab("monthly")}
            >
              Monthly
            </Button>
            <Button
              className={cn(
                "w-full hover:bg-secondary-500",
                activeTab == "volumn" ? "text-black-900 font-semibold" : ""
              )}
              variant={activeTab == "volumn" ? "secondary" : "outline"}
              onClick={() => setActiveTab("volumn")}
            >
              Volume
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 md:mt-12">
        {recomandedPackages?.filter(filterByCategory)?.map((item, index) => (
          <PackageCard
            wrapperClass={`cursor-pointer ${
              cart?.package?.id == item?.id ? "border-main-600" : ""
            }`}
            item={item}
            key={index}
            onClick={() => handleSelectPlan(item)}
          />
        ))}
      </div>
      <RouterCartFooter
        prevHandler={handlePrev}
        nextHandler={handleNext}
        isActive={isActive}
      />
    </div>
  );
}

export default SimPlan;
