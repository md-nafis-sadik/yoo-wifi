import PackageCard from "@/components/shared/cards/PackageCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { commercialRoutes } from "@/services";
import { handleNextSimCart, setSimCartData } from "@/store/module/sim/slice";
import useEmblaCarousel from "embla-carousel-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SimCartService from "./SimCartService";
import RouterCartFooter from "@/components/commercial/sim/RouterCartFooter";

const tabs = ["all", "daily", "monthly", "multi-country"];

function SimPlan() {
  const { recomandedPackages, cart } = useSelector((state) => state.sim);
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
    dispatch(setSimCartData({ package: item }));
  };

  const handleNext = () => {
    navigate(commercialRoutes.simPlanSummery.path);
    dispatch(handleNextSimCart());
  };

  const handlePrev = () => {
    navigate(commercialRoutes.simRegion.path);
  };

  return (
    <div className="w-full overflow-auto">
      <div className="w-full flex flex-col gap-5">
        <h2 className="text-base sm:text-xl md:text-2xl font-semibold md:font-bold text-black-900">
          Select a Plan
        </h2>
        <div ref={emblaRef} className="w-full max-w-full overflow-hidden">
          <div className="flex items-center gap-4">
            {tabs.map((tab) => (
              <Button
                key={tab}
                className={cn(
                  "w-full hover:bg-secondary-500",
                  activeTab === tab ? "text-black-900 font-semibold" : ""
                )}
                variant={activeTab === tab ? "secondary" : "outline"}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 md:mt-12">
        {/* coverage accordion */}
        <Accordion type="single" collapsible="true" defaultValue="item-1">
          <AccordionItem value={`item-1`} className="">
            <AccordionTrigger className="!text-sm md:!text-base !font-bold text-black-700">
              Country Coverage
            </AccordionTrigger>
            <AccordionContent className="!text-xs md:!text-base !leading-[120%] md:!leading-[150%] text-black-700">
              {cart && cart.package.coverage ? (
                cart.package.coverage.map((item, index) => (
                  <span key={index}>
                    {item}
                    {index < cart.package.coverage.length - 1 && ", "}
                  </span>
                ))
              ) : (
                <span>*Select a package first</span>
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* packages */}
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

      {cart?.package?.dataSize && (
        <SimCartService
          multiCountry={activeTab === "multi-country"}
          className="max-w-full mt-6 md:mt-12"
        />
      )}
    </div>
  );
}

export default SimPlan;
