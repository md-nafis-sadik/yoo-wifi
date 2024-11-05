import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "@/services";
import { LazyLoadImage } from "react-lazy-load-image-component";

const DetailsCard = ({ item, titleClassName, descriptionClassName }) => {
  return (
    <div className="w-full p-3 md:p-4 border-2 border-neutral-200 rounded-xl md:rounded-3xl">
      <div className="w-full aspect-[1.06/1] rounded-[8px] md:rounded-2xl relative overflow-hidden">
        <LazyLoadImage
          src={item?.image}
          alt={item?.title}
          height={1000}
          width={1060}
          className="absolute_center min-w-full min-h-full object-cover"
        />
      </div>

      <p
        className={cn(
          "text-[28px] font-bold !leading-[1.1] text-black-900 mt-3 md:mt-4",
          titleClassName
        )}
      >
        {item?.title}
      </p>
      <p
        className={cn(
          "p_common line-clamp-3 mt-3 md:mt-4",
          descriptionClassName
        )}
      >
        {item?.description}
      </p>

      <Button className={"mt-3 md:mt-4 w-full md:w-fit h-11 md:h-[51px]"}>
        <span>Explore Products</span>
        <ArrowUpRightIcon className={"!h-6 !w-6 shrink-0"} />
      </Button>
    </div>
  );
};

export default DetailsCard;
