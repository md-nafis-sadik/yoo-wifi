import { cn } from "@/lib/utils";
import { CallMadeIcon, RentIcon } from "@/services";
import { Link } from "react-router-dom";

const ConnectCard = ({ ...props }) => {
  return (
    <div
      className={cn(
        "rounded-2xl md:rounded-3xl bg-white py-6 md:py-10 px-4 md:px-6 shadow-card-secondary w-[312px] md:w-[376px]"
      )}
      {...props}
    >
      <div className="h-14 md:h-20 w-1/4 md:w-20 rounded-xl md:rounded-[22px] bg-main-50 flex_center">
        <RentIcon className={""} color="#D81F22" />
      </div>

      <h2 className="text-black-700 text-base md:text-2xl !leading-[1.4] mt-6 md:mt-12 lg:mt-[60px] font-bold">
        How To Rent
      </h2>

      <p className="text-base md:text-lg text-black-600 !leading-[1.4] mt-3 line-clamp-3">
        Stay connected with Yoowifi in just 3 simple steps! Download the app,
        choose your destination, and select the package that fits your needs.
      </p>

      <Link
        to="/"
        className={cn(
          "text-sm md:text-base text-main-600 !leading-[1.2] mt-4 lg:mt-6 font-semibold flex items-center gap-2"
        )}
      >
        <span>Find Out More</span>
        <CallMadeIcon className={"h-5 w-5 md:h-6 md:w-6"} color="#D81F22" />
      </Link>
    </div>
  );
};

export default ConnectCard;
