import useSetLocalData from "@/hooks/useSetLocalData";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import ProductGallery from "../shared/others/ProductGallery";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import NavBarSecondary from "../shared/navigation/NavBarSecondary";

function SimLayout() {
  useSetLocalData("sim");
  const { product } = useSelector((state) => state.sim);
  return (
    <main>
      <NavBarSecondary />
      <div className="px-4 md:px-10 lg:px-16 pt-24 md:pt-28 relative">
        <div className="containerX">
          <div className="flex flex-col md:flex-row gap-6 sm:gap-10 md:gap-15 pt-6 sm:pt-8 md:pt-10 pb-40 lg:pb-28 overflow-hidden">
            <div className="w-full max-w-max">
              <div className="w-full  md:max-w-[480px] flex flex-col gap-6 sm:gap-8 sticky top-10">
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
    </main>
  );
}

export default SimLayout;
