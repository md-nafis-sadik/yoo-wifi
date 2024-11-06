import DataSize from "@/components/commercial/router/cartService/DataSize";
import ServiceDate from "@/components/commercial/router/cartService/ServiceDate";
import NumberOfDays from "@/components/commercial/sim/cartService/NumberOfDays";
import SimAccounts from "@/components/commercial/sim/cartService/SimAccounts";
import SimInformation from "@/components/commercial/sim/cartService/SimInformation";
import RouterCartFooter from "@/components/commercial/sim/RouterCartFooter";
import CartQuantity from "@/components/shared/others/CartQuantity";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { commercialRoutes } from "@/services";
import { handleNextSimCart, setSimCartData } from "@/store/module/sim/slice";
import useEmblaCarousel from "embla-carousel-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function SimCartService() {
  const { cart } = useSelector((state) => state.sim);
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

  const handleNext = () => {
    navigate(commercialRoutes.simPlanSummery.path);
    dispatch(handleNextSimCart());
  };

  const handlePrev = () => {
    navigate(commercialRoutes.simPlan.path);
  };

  const handleTabSelect = (value) => {
    dispatch(setSimCartData({ cartType: value }));
  };

  const handleCartQuantity = (value) => {
    dispatch(setSimCartData({ quantity: value }));
  };

  return (
    <div className="w-full flex flex-col gap-6 overflow-hidden">
      <div className="w-full flex flex-col gap-4">
        <h2 className="text-base font-semibold text-black-700">SIM Type</h2>
        <div ref={emblaRef} className="w-full max-w-full overflow-hidden">
          <div className="flex items-center gap-4">
            <Button
              type="button"
              className={cn(
                "hover:bg-main-600 hover:text-white",
                cart?.cartType == "sim" ? "text-white font-semibold" : ""
              )}
              variant={cart?.cartType == "sim" ? "default" : "cancel"}
              onClick={() => handleTabSelect("sim")}
            >
              SIM
            </Button>
            <Button
              type="button"
              className={cn(
                "hover:bg-main-600 hover:text-white",
                cart?.cartType == "esim" ? "text-white font-semibold" : ""
              )}
              variant={cart?.cartType == "esim" ? "default" : "cancel"}
              onClick={() => handleTabSelect("esim")}
            >
              eSIM
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

      {cart?.cartType == "topup" && <SimAccounts />}
      <DataSize />
      <NumberOfDays />
      <ServiceDate />
      <CartQuantity
        max={10}
        defaultValue={cart?.quantity}
        setter={handleCartQuantity}
        label="No of SIM/eSIM:"
        labelClass="font-semibold"
      />
      <SimInformation />
      <RouterCartFooter
        prevHandler={handlePrev}
        nextHandler={handleNext}
        isActive={isActive}
      />
    </div>
  );
}

export default SimCartService;
