import CartDeviceCard from "@/components/shared/cards/CartDeviceCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { setPocketWifiCartData } from "@/store/module/pocketWifi/slice";
import useEmblaCarousel from "embla-carousel-react";
import { useDispatch, useSelector } from "react-redux";

function DataSize({}) {
  const options = { align: "start" };
  const [emblaRef] = useEmblaCarousel(options);
  const { cart, topupPlans } = useSelector((state) => state.pocketWifi);
  const { wifiDevices } = useSelector((state) => state?.auth);
  const dispatch = useDispatch();

  const handleTopupSelect = (item) => {
    dispatch(setPocketWifiCartData({ topup: item }));
  };

  const handleDeviceSelect = (item) => {
    dispatch(setPocketWifiCartData({ device: item }));
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <h2 className="text-base font-semibold text-black-700">Data Size</h2>
      {cart?.cartType == "rental" ? (
        <Button
          className={cn(
            "hover:bg-main-600 hover:text-white text-white font-semibold"
          )}
          variant="default"
        >
          {cart?.package?.dataSize} {cart?.package?.desc}
        </Button>
      ) : (
        <div>
          <div ref={emblaRef} className="w-full max-w-full overflow-hidden">
            <div className="flex items-center gap-4 mb-6">
              {topupPlans?.map((item, index) => (
                <Button
                  className={cn(
                    "hover:bg-main-600 hover:text-white",
                    cart?.topup?.planCode == item?.planCode
                      ? "text-white font-semibold"
                      : ""
                  )}
                  variant={
                    cart?.topup?.planCode == item?.planCode
                      ? "default"
                      : "cancel"
                  }
                  onClick={() => handleTopupSelect(item)}
                  key={index}
                >
                  {item?.dataSize} {item?.desc}
                </Button>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-base font-semibold text-black-700">
                Select Device
              </span>
              <Accordion
                type="single"
                className="flex flex-col gap-4"
                collapsible
              >
                <AccordionItem
                  className="border-none bg-transparent"
                  value="topup-device"
                >
                  <AccordionTrigger className="border rounded-xl text-base font-normal">
                    Select Device to Top Up
                  </AccordionTrigger>
                  <AccordionContent className="px-0 pt-4">
                    <div className="flex flex-col gap-4">
                      {wifiDevices?.map((item, index) => (
                        <CartDeviceCard
                          onClick={() => handleDeviceSelect(item)}
                          key={index}
                          item={item}
                          isActive={cart?.device?.deviceId == item?.deviceId}
                        />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DataSize;
