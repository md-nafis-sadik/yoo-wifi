import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "@/services";

function ProductRouteCard({
  item,
  wrapperClass = "",
  pocketWifiColor = "",
  routerColor = "",
  simColor = "",
  ...props
}) {
  return (
    <div
      className={cn(
        "py-5 px-2 sm:px-4 rounded-xl bg-black-800 flex flex-col text-center items-center justify-center gap-2 cursor-pointer w-full",
        wrapperClass
      )}
      {...props}
    >
      <div className="w-8 h-8 flex items-center justify-center mx-auto">
        {item?.icon({ pocketWifiColor, routerColor, simColor })}
      </div>
      <h4 className="text-sm sm:text-base md:text-lg font-semibold leading-[140%]">
        {item?.name}
      </h4>
      <button
        type="button"
        className="outline-none flex items-center justify-center gap-1 xs:gap-2 text-main-600 text-xs xs:text-sm font-semibold"
      >
        <span>Buy Now</span>
        <ArrowUpRightIcon className="w-4 " color="#d81f22" />
      </button>
    </div>
  );
}

export default ProductRouteCard;
