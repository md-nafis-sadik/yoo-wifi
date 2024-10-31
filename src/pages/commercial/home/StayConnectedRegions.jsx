import HeadingWithSubHeading from "@/components/shared/HeadingWithSubHeading";
import { cn } from "@/lib/utils";
import {
  africaRegionBlack,
  americaRegionBlack,
  asiaRegionBlack,
  australiaRegionBlack,
  europeRegionBlack,
} from "@/services";
import { LazyLoadImage } from "react-lazy-load-image-component";

const StayConnectedRegions = () => {
  const regionsData = [
    {
      _id: 1,
      image: asiaRegionBlack,
      title: "Asia",
    },
    {
      _id: 2,
      image: americaRegionBlack,
      title: "America",
    },
    {
      _id: 3,
      image: africaRegionBlack,
      title: "Africa",
    },
    {
      _id: 4,
      image: australiaRegionBlack,
      title: "Australia",
    },
    {
      _id: 5,
      image: europeRegionBlack,
      title: "Europe",
    },
  ];

  return (
    <section className="container2X sec_common rounded-2xl md:rounded-3xl bg-[#ececec]">
      <HeadingWithSubHeading
        heading={"Stay Connected Everywhere"}
        subHeading={"Choose Your Dream Destination and Perfect Package Now"}
      />

      <div className="containerX grid grid-cols-6 gap-6 mt-6 md:mt-10 lg:mt-20">
        {regionsData.map((region, index) => (
          <div
            className={cn(
              index > 2 ? "lg:col-span-3" : "lg:col-span-2",
              index === 0 ? "bg-[#EFB800]" : "bg-white",
              "shadow-card-secondary col-span-6 md:col-span-3 h-[256px] md:h-[358px] flex flex-col items-center px-4 md:px-6 pt-6 md:pt-9 pb-6 rounded-2xl md:rounded-3xl group hover:bg-[#EFB800]"
            )}
            key={region._id}
          >
            <LazyLoadImage
              src={region.image}
              alt={region.title}
              className={cn(
                index === 0 ? "opacity-100" : "opacity-25",
                "w-auto h-[80%] !aspect-square object-cover group-hover:opacity-100 transition_common"
              )}
            />

            <div className="mt-4 md:mt-6">
              <h2 className="text-base md:text-2xl !leading-[1.4] text-center text-black-700">
                {region.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StayConnectedRegions;
