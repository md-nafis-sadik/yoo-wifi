import InternetPackageCard from "@/components/shared/cards/InternetPackageCard";
import SectionHeader from "@/components/shared/others/SectionHeader";
import { Button } from "@/components/ui/button";

function InternetPackage() {
  return (
    <div className="sec_common_80 px-4 min-[1176px]:px-0 bg-neutral-50">
      <SectionHeader
        heading={"Perfect Internet Packages"}
        subHeading={"Choose Your Dream Destination and Perfect Package Now"}
      />
      <div className="containerX flex_center flex-col">
        <form className="w-full max-w-[420px] bg-neutral-100 rounded-xl mt-6 lg:mt-10 mb-6 md:mb-8 ring-1 ring-neutral-300">
          <label
            htmlFor="searchCountry"
            className="flex items-center gap-[10px] w-full py-2 pl-4 sm:pl-6 pr-2 bg-transparent rounded-xl"
          >
            <input
              id="searchCountry"
              type="text"
              placeholder="Search country.."
              className="flex-1 h-full w-[100px] bg-transparent border-none outline-none text-sm md:text-base text-black placeholder:text-black-600"
            />
            <Button
              className={"font-medium text-sm max-h-8 md:max-h-9"}
              size={"sm"}
            >
              Search
            </Button>
          </label>
        </form>
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-8">
          {Array(6)
            .fill(1)
            .map((_, index) => (
              <InternetPackageCard key={index} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default InternetPackage;
