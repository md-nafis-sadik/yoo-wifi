import { cn } from "@/lib/utils";
import { LazyLoadImage } from "react-lazy-load-image-component";

function RegionCard({ item = {}, index = 0, isActive = false, ...props }) {
  return (
    <div
      className={cn(
        index > 2 ? "lg:col-span-3" : "lg:col-span-2",
        isActive ? "bg-[#EFB800]" : "bg-white",
        "shadow-card-secondary col-span-6 md:col-span-3 h-[256px] md:h-[358px] flex flex-col items-center px-4 md:px-6 pt-6 md:pt-9 pb-6 rounded-2xl md:rounded-3xl group hover:bg-[#EFB800] duration-300 cursor-pointer"
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
        <h2 className="text-base md:text-2xl !leading-[1.4] text-center text-black-700">
          {item?.title}
        </h2>
      </div>
    </div>
  );
}

export default RegionCard;
