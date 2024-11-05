import PocketWifiCartFooter from "@/components/commercial/pocketWifi/PocketWifiCartFooter";
import DataSize from "@/components/commercial/router/cartService/DataSize";
import ServiceDate from "@/components/commercial/router/cartService/ServiceDate";
import RouterCartFooter from "@/components/commercial/router/RouterCartFooter";
import CartQuantity from "@/components/shared/others/CartQuantity";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { commercialRoutes } from "@/services";
import {
  handleNextRouterCart,
  setRouterCartData,
} from "@/store/module/router/slice";
import useEmblaCarousel from "embla-carousel-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function RouterCartService() {
  const { cart } = useSelector((state) => state.router);
  const dispatch = useDispatch();
  const options = { align: "start" };
  const [emblaRef] = useEmblaCarousel(options);
  const navigate = useNavigate();

  console.log(cart);

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
    navigate(commercialRoutes.routerPlanSummery.path);
    dispatch(handleNextRouterCart());
  };

  const handlePrev = () => {
    navigate(commercialRoutes.routerPlan.path);
  };

  const handleTabSelect = (value) => {
    dispatch(setRouterCartData({ cartType: value }));
  };

  const handleCartQuantity = (value) => {
    dispatch(setRouterCartData({ quantity: value }));
  };

  return (
    <div className="w-full flex flex-col gap-6">
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

      {/* data size : for select or change data plan. this will work   */}
      <DataSize />
      <ServiceDate />
      <CartQuantity
        max={10}
        defaultValue={cart?.quantity}
        setter={handleCartQuantity}
      />
      <RouterCartFooter
        prevHandler={handlePrev}
        nextHandler={handleNext}
        isActive={isActive}
      />
    </div>
  );
}

export default RouterCartService;
