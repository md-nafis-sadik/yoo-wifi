import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CallMadeIcon } from "@/services";
import { useState } from "react";

const ProductCard = ({
  title = "",
  description = "",
  containerClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  //   selected = false, //Enable it when needed
  ...props
}) => {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className={cn(
        selected ? "ring-main-600" : "ring-black-600",
        "ring-1 w-full h-fit rounded-lg md:rounded-2xl p-4 md:p-5 flex flex-col md:flex-row gap-6 md:gap-10 hover:ring-main-600 group transition_common",
        containerClassName
      )}
      onClick={() => setSelected((prev) => !prev)} //Please remove when added to page
      {...props}
    >
      {/* 1 */}
      <div
        className={cn(
          selected
            ? "flex-col w-full md:w-2/3"
            : "flex-col md:flex-row w-full items-center",
          "flex  gap-x-4 gap-y-3"
        )}
      >
        <h4
          className={cn(
            selected
              ? "text-base md:text-xl lg:text-[28px] text-main-600 w-auto"
              : "text-2xl md:text-[28px] lg:text-4xl text-black-700 w-full md:w-2/5",
            "font-bold !leading-[1.1] group-hover:text-main-600 transition_common shrink-0",
            titleClassName
          )}
        >
          {title}
        </h4>

        <p
          className={cn(
            "text-sm md:text-base text-black-700 !leading-normal flex-grow",
            descriptionClassName
          )}
        >
          Small device, big connectivity! Enjoy high-speed internet access,
          without worrying about expensive roaming charges or unreliable hotel
          wifi.
        </p>
      </div>

      {/* 2 */}
      {selected && (
        <div className="flex flex-col items-end gap-4 w-full md:w-1/3">
          <p className="text-black-900 text-base md:text-xl !leading-[1.4] font-bold italic w-fit">
            50% OFF
          </p>
          <Button size="lg" className="text-base">
            Buy Now{" "}
            <CallMadeIcon color="#FAFAFA" className={"!h-6 !w-6 shrink-0"} />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
