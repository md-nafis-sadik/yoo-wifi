import { ArrowUpRightIcon } from "@/services";

function ProductRouteCard({ item, ...props }) {
  return (
    <div
      className="py-5 px-2 sm:px-4 rounded-xl bg-black-800 flex flex-col text-center items-center justify-center gap-2 cursor-pointer w-full"
      {...props}
    >
      <div className="w-8 sm:w-10 aspect-square flex items-center justify-center mx-auto">
        {item?.icon()}
      </div>
      <h4 className="text-sm sm:text-base md:text-lg font-semibold">
        {item?.name}
      </h4>
      <button
        type="button"
        className="outline-none flex items-center justify-center gap-1 xs:gap-2 text-main-600 text-xs xs:text-sm sm:text-base md:text-lg font-semibold"
      >
        <span>Buy Now</span>
        <ArrowUpRightIcon className="w-4 sm:w-6" color="#d81f22" />
      </button>
    </div>
  );
}

export default ProductRouteCard;
