import ProductCard from "@/components/shared/cards/ProductCard";
import { images, productsData } from "@/services";
import { useMemo, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Products = () => {
  const [selectedCard, setSelectedCard] = useState(0);
  const products = useMemo(() => productsData(), []);

  return (
    <section className="sec_common_80 bg-main-20">
      <div className="containerX overflow-visible px-4 min-[1176px]:px-0">
        <h2 className="title text-center md:text-start">Our Products</h2>

        <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-8 lg:gap-[60px] trasition_common mt-6 md:mt-10 lg:mt-[60px]">
          <div className="w-full md:w-1/2 min-[950px]:w-[55%] flex flex-col justify-center items-start gap-6 md:gap-9">
            <div className="w-full flex flex-col gap-4 order-2 md:order-1">
              {products.cardData.map((item, index) => (
                <ProductCard
                  key={index}
                  item={item}
                  eventHandler={() => setSelectedCard(index)}
                  selected={selectedCard === index}
                />
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 min-[950px]:w-[45%] overflow-visible relative h-[328px] md:h-auto">
            <LazyLoadImage
              src={products.productImages[selectedCard]}
              height={2000}
              width={2000}
              alt="why choose us"
              className="absolute_center w-auto h-full md:h-auto max-h-[431px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
