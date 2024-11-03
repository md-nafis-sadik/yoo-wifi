import DataSize from "@/components/commercial/pocketWifi/cartService/DataSize";
import ServiceDate from "@/components/commercial/pocketWifi/cartService/ServiceDate";
import PocketWifiCartFooter from "@/components/commercial/pocketWifi/PocketWifiCartFooter";
import CartQuantity from "@/components/shared/others/CartQuantity";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { commercialRoutes } from "@/services";
import {
  handleNextPocketWifiCart,
  setPocketWifiCartData,
} from "@/store/module/pocketWifi/slice";
import useEmblaCarousel from "embla-carousel-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function PocketWifiCartService() {
  const { cart } = useSelector((state) => state.pocketWifi);
  const dispatch = useDispatch();
  const options = { align: "start" };
  const [emblaRef] = useEmblaCarousel(options);
  const navigate = useNavigate();
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

  const handleSubmit = (event) => {
    event.preventDefault();
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
    <form
      action="#"
      onSubmit={handleSubmit}
      className="w-full flex flex-col gap-6"
    >
      <div className="w-full flex flex-col gap-4">
        <h2 className="text-base font-semibold text-black-700">Service</h2>
        <div ref={emblaRef} className="w-full max-w-full overflow-hidden">
          <div className="flex items-center gap-4">
            <Button
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
      <DataSize />
      <ServiceDate />
      <CartQuantity
        max={10}
        defaultValue={cart?.quantity}
        setter={handleCartQuantity}
      />
      <PocketWifiCartFooter prevHandler={handlePrev} isActive={isActive} />
    </form>
  );
}

export default PocketWifiCartService;
