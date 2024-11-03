import ProductCard from "@/components/shared/cards/ProductCard";
import { images } from "@/services";

function OtherProducts() {
  return (
    <section className="pt-15 pb-10 sm:pb-16 md:pb-[120px] px-4 md:px-10 lg:px-16">
      <div className="containerX">
        <h2 className="text-2xml sm:text-3xl md:text-5xl lg:text-6xml text-center md:text-left font-bold text-black-900 leading-[120%]">
          Other products you may like
        </h2>
        <div className="flex flex-col md:flex-row justify-between gap-6 mt-6 sm:mt-10 md:mt-20 lg:mt-32">
          <div className="w-full flex flex-col gap-4  md:max-w-[622px] order-2 md:order-1">
            <ProductCard
              title="Router"
              description="Seamless, speedy browsing starts with our top-notch routers. Take your internet experience to new heights with us!"
            />
            <ProductCard
              title=" SIM/eSIM"
              description="Seamless, speedy browsing starts with our top-notch routers. Take your internet experience to new heights with us!"
            />
          </div>
          <div className="w-full max-w-[8.5rem] sm:max-w-max mx-auto md:-mb-24 order-1 md:order-2">
            <img src={images.pocketWifiSimRed2} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OtherProducts;
