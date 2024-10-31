import { cn } from "@/lib/utils";
import { InvertedQuotesIcon } from "@/services";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CustomerCard = ({
  name = "Akram Khan",
  designation = "CEO-TechWave Solutions",
  image = "https://images.unsplash.com/photo-1579038773867-044c48829161?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // hovered = false, // Please Enable when passed as prop or added to page
  ...props
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={cn(
        hovered
          ? "bg-secondary-500 ring-0"
          : "bg-white ring-[1px] ring-neutral-200",
        "w-[360px] md:w-[573px] rounded-xl md:rounded-2xl p-4 md:p-6 transition_common"
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      <InvertedQuotesIcon
        className={"h-[36px] md:h-[52px] w-auto"}
        color={hovered ? "#E29800" : "#EDEDED"}
      />

      <p
        className={cn(
          "text-base md:text-2xl !leading-[1.4] mt-4 text-black-900"
        )}
      >
        "Using this eSIM service for the past six months has completely
        transformed our approach to managing connectivity for our projects!"
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
            {name}
          </p>
          <p className="text-xs md:text-base !leading-normal">{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
