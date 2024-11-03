import { cn } from "@/lib/utils";
import { LazyLoadImage } from "react-lazy-load-image-component";

function RegionCard({
  item = {},
  index = 0,
  isActive = false,
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        "shadow-card-secondary h-[136px] sm:h-[222px] md:h-[358px] flex flex-col items-center px-4 md:px-6 pt-6 md:pt-9 pb-6 rounded-[9.45px] md:rounded-3xl group bg-white hover:bg-[#EFB800] duration-300 cursor-pointer",
        className
      )}
      key={item?._id}
      {...props}
    >
      <LazyLoadImage
        src={item?.image}
        alt={item?.title}
        className={cn(
          isActive ? "opacity-100" : "opacity-25",
          "w-auto h-[80%] !aspect-square object-cover group-hover:opacity-100 transition_common duration-300"
        )}
      />
      <div className="mt-4 md:mt-6">
        <h2 className="text-xs sm:text-base md:text-2xl !leading-[1.4] text-center text-black-700">
          {item?.title}
        </h2>
      </div>
    </div>
  );
}

export default RegionCard;
