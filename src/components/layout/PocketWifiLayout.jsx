import useSetLocalData from "@/hooks/useSetLocalData";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import NavBar from "../shared/navigation/NavBar";
import ProductGallery from "../shared/others/ProductGallery";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

function PocketWifiLayout() {
  useSetLocalData("pocketWifi");
  const { product } = useSelector((state) => state.pocketWifi);
  return (
    <main>
      <NavBar />
      <div className="px-4 md:px-10 lg:px-16 pt-24 md:pt-28 relative">
        <div className="containerX">
          <div className="flex flex-col md:flex-row gap-6 sm:gap-10 md:gap-15 pt-6 sm:pt-8 md:pt-10 pb-40 lg:pb-28">
            <div className="w-full max-w-max">
              <div className="w-full md:max-w-[480px] flex flex-col gap-6 sm:gap-8 sticky top-10">
                <ProductGallery items={product?.images} />
                <Accordion
                  type="single"
                  className="flex flex-col gap-4"
                  collapsible
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Information</AccordionTrigger>
                    <AccordionContent>
                      Enjoy High-Speed Internet Access Immediate Connect up to B
                      Devices 4G Internet Speed Up to 12 hours of device battery
                      Ycxywifi 24/7 Customer Support Cornes Pocket Wifi Device,
                      Charging Cable, Pouch Extend the days or add plans anytime
                      https-/&oowifi
                    </AccordionContent>
                  </AccordionItem>
      
                </Accordion>
              </div>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
}

export default PocketWifiLayout;
