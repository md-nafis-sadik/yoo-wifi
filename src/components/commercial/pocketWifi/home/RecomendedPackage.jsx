import PackageCard from "@/components/shared/cards/PackageCard";
import SectionHeader from "@/components/shared/others/SectionHeader";
import { useState } from "react";
import { useSelector } from "react-redux";

function RecomendedPackage() {
  const { recomandedPackages } = useSelector((state) => state.pocketWifi);
  const [packages, setPackages] = useState(
    recomandedPackages?.slice(0, 4) || []
  );
  console.log({ packages });
  return (
    <section className="px-4 py-[60px]">
      <div className="containerX">
        <SectionHeader
          heading="Recommended Package"
          subHeading="Discover Our Recommended Packages for Your Needs"
          containerClassName="gap-4"
        />
        <div className="grid sm:grid-cols-2 gap-5 mt-15 text-8xl">
          {packages?.map((item, index) => (
            <PackageCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecomendedPackage;
