import { cn } from "@/lib/utils";
import { InvertedQuotesIcon } from "@/services";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CustomerCard = ({
  author = "",
  designation = "",
  image = "",
  description = "",
  hovered = false,
  containerClassName,
  ...props
}) => {
  return (
    <div
      className={cn(
        hovered
          ? "bg-secondary-500 ring-0"
          : "bg-white ring-[1px] ring-neutral-200",
        "rounded-xl md:rounded-2xl p-4 md:p-6 transition_common w-full shrink-0 select-none",
        containerClassName
      )}
      {...props}
    >
      <InvertedQuotesIcon
        className={"h-[32px] md:h-[52px] w-auto"}
        color={hovered ? "#E29800" : "#EDEDED"}
      />

      <p
        className={cn("text-sm md:text-2xl !leading-[1.4] mt-4 text-black-900")}
      >
        {description}
      </p>

      <hr className="h-[1px] w-full bg-[#d7d7d7] my-4 md:my-6" />

      <div className="flex items-center gap-3">
        <div className="h-12 w-12 md:h-[52px] md:w-[52px] rounded-full overflow-hidden relative">
          <LazyLoadImage
            src={image}
            alt={name}
            height={1000}
            width={1000}
            className="absolute_center min-w-full min-h-full object-cover"
          />
        </div>
        <div className="">
          <p className="text-base md:text-xl font-medium tracking-[-0.5px]">
            {author}
          </p>
          <p className="text-xs md:text-base !leading-normal">{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
