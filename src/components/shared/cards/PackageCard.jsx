import { Button } from "@/components/ui/button";
import { images } from "@/services";
import { LazyLoadImage } from "react-lazy-load-image-component";

const PackageCard = () => {
  return (
    <div className="bg-white rounded-2xl md:rounded-3xl p-4 ring-[2px] ring-neutral-200 hover:ring-0 hover:shadow-card-primary tranistion_common">
      <div className="w-full aspect-[1.06/1] relative overflow-hidden rounded-lg md:rounded-2xl">
        <LazyLoadImage
          src={images.middleEast}
          alt={"middel east"}
          height={1000}
          width={2000}
          className="absolute_center min-h-full min-w-full object-cover"
        />
      </div>

      <h2 className="text-base md:text-[28px] !leading-[1.1] font-bold text-center mt-4">
        Middle East
      </h2>

      <hr className="my-4 h-[1px] bg-neutral-100" />

      <div className="flex justify-between items-center gap-4">
        <div className="felx flex-col">
          <p className="text-xs md:text-base text-black-700 !leading-normal">
            From
          </p>
          <h2 className="text-lg md:text-2xl lg:text-[28px] text-black-700 font-bold !leading-[1.1]">
            SGD 25.49
          </h2>
        </div>
        <Button>Find Out More</Button>
      </div>
    </div>
  );
};

export default PackageCard;
