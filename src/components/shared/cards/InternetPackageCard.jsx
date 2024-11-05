import { Button } from "@/components/ui/button";
import { images } from "@/services";
import { LazyLoadImage } from "react-lazy-load-image-component";

const InternetPackageCard = () => {
  return (
    <div className="bg-white rounded-[8px] md:rounded-3xl p-2 md:p-4 ring-[2px] ring-neutral-200 hover:ring-0 hover:shadow-card-primary tranistion_common">
      <div className="w-full aspect-[1.06/1] relative overflow-hidden rounded-[4px] md:rounded-2xl">
        <LazyLoadImage
          src={images.middleEast}
          alt={"middel east"}
          height={1000}
          width={2000}
          className="absolute_center min-h-full min-w-full object-cover"
        />
      </div>

      <h2 className="text-base md:text-[28px] !leading-[1.1] font-bold text-center mt-2 md:mt-4">
        Middle East
      </h2>

      <hr className="my-1 md:my-4 h-[1px] bg-neutral-100" />

      <div className="flex justify-between items-center gap-4">
        <div className="felx flex-col">
          <p className="text-[10px] sm:text-sm md:text-base text-black-700 !leading-normal">
            From
          </p>
          <h2 className="text-[10px] sm:text-sm md:text-2xl lg:text-[28px] text-black-700 font-semibold md:font-bold !leading-[1.2] md:!leading-[1.1]">
            SGD 25.49
          </h2>
        </div>
        <Button
          className={
            "!px-2 !py-[5px] md:!px-6 md:!py-4 text-[10px] md:text-base !leading-[1.2] rounded-sm md:rounded-xl"
          }
        >
          Find Out More
        </Button>
      </div>
    </div>
  );
};

export default InternetPackageCard;
