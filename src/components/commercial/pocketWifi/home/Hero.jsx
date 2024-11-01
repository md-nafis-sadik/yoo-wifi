import ProductGallery from "@/components/shared/others/ProductGallery";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DollarLabelIcon, GlobIcon, WifiIcon } from "@/services";
import { useState } from "react";
import { useSelector } from "react-redux";

function Hero() {
  const { product } = useSelector((state) => state.pocketWifi);
  const [activeColor, setActiveColor] = useState(product?.colors[0]);
  return (
    <section className="pt-10 px-4">
      <div className="containerX">
        <div className="flex gap-[60px]">
          <div className="w-full max-w-[532px]">
            <ProductGallery items={product?.images} />
          </div>
          <div className="w-full">
            <h2 className="text-[4rem] leading-[120%] text-black-900 font-bold">
              {product?.name}
            </h2>
            <p className="text-lg text-black-600 leading-[120%] mt-4">
              {product?.description}
            </p>
            <div className="flex flex-col gap-4 mt-10">
              <div className="flex items-center gap-4">
                <div className="w-11 aspect-square bg-main-10 rounded-full flex items-center justify-center">
                  <WifiIcon />
                </div>
                <span>Stay Connected Anywhere</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 aspect-square bg-main-10 rounded-full flex items-center justify-center">
                  <GlobIcon />
                </div>
                <span>Save BIG on International Roaming</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 aspect-square bg-main-10 rounded-full flex items-center justify-center">
                  <DollarLabelIcon />
                </div>
                <span>Unbeatable Pricing Guarantee</span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-4">
              <div className="w-full mt-12 flex items-center justify-between gap-2">
                <div>
                  <h3 className="text-2xl text-black-700 font-bold leading-[140%]">
                    Color
                  </h3>
                  <div className="flex items-center gap-4">
                    {product?.colors?.map((item, index) => (
                      <button
                        type="button"
                        className={cn(
                          "w-7 aspect-square border rounded-full",
                          activeColor?.hex == item.hex
                            ? "border-secondary-500"
                            : "border-transparent"
                        )}
                        style={{ background: item?.hex }}
                        key={index}
                        onClick={() => setActiveColor(item)}
                      ></button>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl text-black-900">
                    From{" "}
                    <span className="text-5xl font-bold">
                      {product?.price?.currency} {product?.price?.amount}
                    </span>
                  </h4>
                </div>
              </div>
              <Button
                className="text-base font-semibold leading-[120%]"
                type="button"
              >
                View Plans
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
