import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CallMadeIcon } from "@/services";
import { Link } from "react-router-dom";
import CountDown from "../others/CountDown";

const ProductCard = ({
  item,
  containerClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  eventHandler = () => {},
  selected = false,
  showCountDown,
  ...props
}) => {
  return (
    <div
      className={cn(
        selected ? "ring-main-600 bg-main-50" : "ring-black-600",
        "ring-1 w-full h-fit rounded-lg md:rounded-2xl p-4 md:p-5 flex flex-col min-[1176px]:flex-row gap-6 md:gap-10 hover:ring-main-600 group transition_common",
        containerClassName
      )}
      onClick={eventHandler}
      {...props}
    >
      {/* 1 */}
      <div
        className={cn(
          selected
            ? "flex-col w-full min-[1176px]:w-2/3"
            : "flex-col min-[1176px]:flex-row w-full items-center",
          "flex  gap-x-4 gap-y-3"
        )}
      >
        <h4
          className={cn(
            selected
              ? "text-base md:text-xl lg:text-[28px] text-main-600 w-auto"
              : "text-2xl md:text-[28px] lg:text-4xl text-black-700 w-full min-[1176px]:w-2/5",
            "font-bold !leading-[1.1] group-hover:text-main-600 transition_common shrink-0",
            titleClassName
          )}
        >
          {item?.title}
        </h4>

        <p
          className={cn(
            selected ? "select-text" : "select-none",
            "text-sm md:text-base text-black-700 !leading-normal flex-grow w-full text-start",
            descriptionClassName
          )}
        >
          {item?.description}
        </p>
      </div>

      {/* 2 */}
      {selected && (
        <div className="flex flex-row min-[1176px]:flex-col items-center min-[1176px]:items-end justify-between min-[1176px]:justify-start gap-4 w-full min-[1176px]:w-1/3">
          {item?.offer && (
            <p className="text-black-900 text-base md:text-xl !leading-[1.4] font-bold italic w-fit flex flex-col min-[1176px]:flex-row min-[1176px]:whitespace-nowrap">
              <span>{item?.offer}</span>
              {showCountDown && (
                <>
                  <span className="hidden min-[1176px]:inline-block">
                    ,&nbsp;
                  </span>{" "}
                  <CountDown
                    className={"!font-normal !text-xs min-[1176px]:!text-xl"}
                    targetUnixTime={item?.deadline}
                  />
                </>
              )}
            </p>
          )}
          <Link to={item?.link}>
            <Button
              size="lg"
              className="text-base"
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              Buy Now{" "}
              <CallMadeIcon color="#FAFAFA" className={"!h-6 !w-6 shrink-0"} />
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
