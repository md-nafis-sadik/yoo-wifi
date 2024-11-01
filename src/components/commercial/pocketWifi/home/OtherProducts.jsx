import ProductCard from "@/components/shared/cards/ProductCard";
import { images } from "@/services";

function OtherProducts() {
  return (
    <section className="pt-15 pb-[120px]">
      <div className="containerX">
        <h2 className="text-6xml font-bold text-black-900 leading-[120%]">
          Other products you may like
        </h2>
        <div className="flex justify-between gap-6 mt-32">
          <div className="w-full flex flex-col gap-4 max-w-[622px]">
            <ProductCard
              title="Router"
              description="Seamless, speedy browsing starts with our top-notch routers. Take your internet experience to new heights with us!"
            />
            <ProductCard
              title=" SIM/eSIM"
              description="Seamless, speedy browsing starts with our top-notch routers. Take your internet experience to new heights with us!"
            />
          </div>
          <div className="w-full max-w-max -mb-24">
            <img src={images.pocketWifiSimRed2} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OtherProducts;
