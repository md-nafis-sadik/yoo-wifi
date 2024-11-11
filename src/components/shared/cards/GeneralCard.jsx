import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "@/services";
import { Link } from "react-router-dom";

const GeneralCard = ({
  title,
  description,
  buttonText = "View Locations",
  stepsButton,
  onClick = () => {},
  className = "",
}) => (
  <div
    className={cn(
      "p-6 sm:pl-8 md:pl-10 rounded-2xl bg-neutral-100 h-full flex flex-col justify-between gap-4",
      className
    )}
  >
    <div>
      <h3 className="text-sm sm:text-base md:text-2xl font-bold text-black-900">
        {title}
      </h3>
      <p className="text-sm sm:text-base md:text-lg text-black-600 leading-[140%] mt-2 sm:mt-3 md:mt-4">
        {description}
      </p>
    </div>

    <div className="flex items-center gap-4">
      <Button
        className="p-2.5 sm:px-4 md:px-6 sm:py-3 md:py-4 rounded sm:rounded-xl"
        onClick={onClick}
      >
        <span>{buttonText}</span>
        <ArrowUpRightIcon />
      </Button>
      {stepsButton && (
        <Link to={stepsButton.to}>
          <Button variant="secondary" className={"px-6 md:px-8"}>
            {stepsButton.text}
          </Button>
        </Link>
      )}
    </div>
  </div>
);

export default GeneralCard;
