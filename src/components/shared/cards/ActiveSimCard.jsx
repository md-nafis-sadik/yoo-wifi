import { cn } from "@/lib/utils";

function ActiveSimCard({ item = {}, wrapperClass = "" }) {
  return (
    <div
      className={cn(
        "flex  flex-col-reverse items-center gap-6 sm:gap-10 md:gap-[4.5rem]",
        wrapperClass
      )}
    >
      <div className="w-full md:max-w-none h-[270px] sm:h-[340px] lg:h-[480px] bg-neutral-200 rounded-3xl px-4 pt-5 sm:pt-7 md:pt-10 overflow-hidden">
        <img
          src={item?.image}
          alt={item?.title}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-full md:max-w-[520px]">
        <h3 className="uppercase text-sm sm:text-lg md:text-2xl font-light text-main-600">
          {item?.title}
        </h3>
        <h4 className="text-lg sm:text-2xl lg:text-4xl font-bold text-black-900 mt-2 mb-4 leading-[140%]">
          {item?.description}
        </h4>
        <ul className="list-decimal text-sm sm:text-base md:text-lg text-black-700 pl-3 sm:pl-4 leading-[140%]">
          {item?.steps?.map((step, index) => (
            <li className="" key={index}>
              {step}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ActiveSimCard;
