import RegionCard from "@/components/shared/cards/RegionCard";
import HeadingWithSubHeading from "@/components/shared/HeadingWithSubHeading";
import { images } from "@/services";

const StayConnectedRegions = () => {
  const regionsData = [
    {
      _id: 1,
      image: images.asiaRegionBlack,
      title: "Asia",
    },
    {
      _id: 2,
      image: images.americaRegionBlack,
      title: "America",
    },
    {
      _id: 3,
      image: images.africaRegionBlack,
      title: "Africa",
    },
    {
      _id: 4,
      image: images.australiaRegionBlack,
      title: "Australia",
    },
    {
      _id: 5,
      image: images.europeRegionBlack,
      title: "Europe",
    },
  ];

  return (
    <section className="container3X sec_common_60 rounded-2xl md:rounded-3xl bg-[#ececec]">
      <HeadingWithSubHeading
        heading={"Stay Connected Everywhere"}
        subHeading={"Choose Your Dream Destination and Perfect Package Now"}
      />

      <div className="containerX grid grid-cols-6 gap-6 mt-6 md:mt-10 lg:mt-20">
        {regionsData.map((region, index) => (
          <RegionCard
            item={region}
            index={index}
            key={index}
            isActive={index === 0}
          />
        ))}
      </div>
    </section>
  );
};

export default StayConnectedRegions;
