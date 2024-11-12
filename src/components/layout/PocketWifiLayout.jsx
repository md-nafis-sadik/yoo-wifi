import useModal from "@/hooks/useModal";
import useSetLocalData from "@/hooks/useSetLocalData";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import NavBarSecondary from "../shared/navigation/NavBarSecondary";
import ProductGallery from "../shared/others/ProductGallery";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import AppDownloadDialog from "../shared/navigation/AppDownloadDialog";

function PocketWifiLayout() {
  useSetLocalData("pocketWifi");
  const { product } = useSelector((state) => state.pocketWifi);
  const { authModal, loginModal, appDownloadModal } = useModal();

  return (
    <main>
      <NavBarSecondary />
      <div className="px-4 md:px-10 lg:px-16 relative">
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
                  {product.tabs.map((tab, index) => (
                    <AccordionItem value={`item-${index + 1}`} key={index}>
                      <AccordionTrigger>{tab.title}</AccordionTrigger>
                      <AccordionContent>{tab.content}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
      {authModal}
      {loginModal}
      {appDownloadModal}
    </main>
  );
}

export default PocketWifiLayout;
