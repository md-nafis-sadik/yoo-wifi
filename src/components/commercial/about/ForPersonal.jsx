import SectionHeader from "@/components/shared/others/SectionHeader";
import DetailsCard from "./DetailsCard";

const ForPersonal = ({ data }) => {
  return (
    <div className="containerX sec_common_60 xl:px-0">
      <SectionHeader
        heading="For Personal"
        subHeading="Reliable Solutions for Your Personal Connectivity"
      />

      <div className="mt-4 md:mt-8 lg:mt-[60px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-8">
          {data?.map((item, index) => (
            <DetailsCard
              item={item}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForPersonal;
