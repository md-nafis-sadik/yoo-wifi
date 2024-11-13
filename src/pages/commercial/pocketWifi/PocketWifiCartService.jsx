import DataSize from "@/components/commercial/pocketWifi/cartService/DataSize";
import ServiceDate from "@/components/commercial/pocketWifi/cartService/ServiceDate";
import WifiDevices from "@/components/commercial/pocketWifi/cartService/WifiDevices";
import PocketWifiCartFooter from "@/components/commercial/pocketWifi/PocketWifiCartFooter";
import CartQuantity from "@/components/shared/others/CartQuantity";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { commercialRoutes, PlusRoundedIcon } from "@/services";
import {
  handleNextPocketWifiCart,
  setPocketWifiCartData,
} from "@/store/module/pocketWifi/slice";
import useEmblaCarousel from "embla-carousel-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function PocketWifiCartService({ className = "", multiCountry = false }) {
  const { cart } = useSelector((state) => state.pocketWifi);
  const dispatch = useDispatch();
  const options = { align: "start" };
  const [emblaRef] = useEmblaCarousel(options);
  const navigate = useNavigate();

  const [addNewCountry, setAddNewCountry] = useState(false);

  const isActivePackage = Boolean(cart?.package?.id || cart?.topup?.planCode);
  const deviceSelect =
    cart?.cartType === "topup" ? Boolean(cart?.device?.deviceId) : true;
  const isCountryAvailable = Boolean(cart?.productCountry?.id);
  const isStartDateAvailable = Boolean(cart?.startDate);

  const isActive =
    isActivePackage &&
    deviceSelect &&
    isCountryAvailable &&
    isStartDateAvailable;

  const handleNext = () => {
    navigate(commercialRoutes.pocketWifiPlanSummery.path);
    dispatch(handleNextPocketWifiCart());
  };

  const handlePrev = () => {
    navigate(commercialRoutes.pocketWifiPlan.path);
  };

  const handleTabSelect = (value) => {
    dispatch(setPocketWifiCartData({ cartType: value }));
  };

  const handleCartQuantity = (value) => {
    dispatch(setPocketWifiCartData({ quantity: value }));
  };

  return (
    <div className={cn("w-full flex flex-col gap-6", className)}>
      <div className="w-full flex flex-col gap-4">
        <h2 className="text-base font-semibold text-black-700">Service</h2>
        <div ref={emblaRef} className="w-full max-w-full overflow-hidden">
          <div className="flex items-center gap-4">
            <Button
              type="button"
              className={cn(
                "hover:bg-main-600 hover:text-white",
                cart?.cartType == "rental" ? "text-white font-semibold" : ""
              )}
              variant={cart?.cartType == "rental" ? "default" : "cancel"}
              onClick={() => handleTabSelect("rental")}
            >
              Rental
            </Button>
            <Button
              type="button"
              className={cn(
                "hover:bg-main-600 hover:text-white",
                cart?.cartType == "topup" ? "text-white font-semibold" : ""
              )}
              variant={cart?.cartType == "topup" ? "default" : "cancel"}
              onClick={() => handleTabSelect("topup")}
            >
              Top Up
            </Button>
          </div>
        </div>
      </div>

      {cart?.cartType == "rental" ? <DataSize /> : <WifiDevices />}
      <ServiceDate multiCountry={multiCountry} />
      {multiCountry && (
        <div className="flex_center flex-col">
          {addNewCountry ? (
            <ServiceDate
              multiCountry={multiCountry}
              className={"w-full my-4 md:my-6"}
              servicedateAdded
            />
          ) : (
            <button
              className="text-sm md:text-base !leading-normal font-medium flex items-center justify-center gap-3 md:gap-[14px] hover:opacity-75"
              onClick={() => setAddNewCountry(true)}
            >
              <PlusRoundedIcon className="h-6 w-6 md:h-8 md:w-8" />
              <span>Add a country</span>
            </button>
          )}
        </div>
      )}

      <div>
        <span className="label mb-2 md:mb-4">Country</span>
        <CartQuantity
          max={10}
          defaultValue={cart?.quantity}
          setter={handleCartQuantity}
        />
      </div>
      <PocketWifiCartFooter
        prevHandler={handlePrev}
        nextHandler={handleNext}
        isActive={isActive}
      />
    </div>
  );
}

export default PocketWifiCartService;
