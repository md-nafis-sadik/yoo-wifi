import PackageFilterList from "@/components/commercial/countryCoverage/PackageFilterList";
import StayConnectedEverywhere from "@/components/commercial/countryCoverage/StayConnectedEverywhere";
import HowItWorks from "@/components/commercial/home/HowItWorks";
import CustomerTestimonial from "@/components/shared/others/CustomerTestimonial";

const CountryCoverageFilter = () => {
  return (
    <div className="overflow-hidden w-full">
      <PackageFilterList />
      <CustomerTestimonial />
      <StayConnectedEverywhere />
      <HowItWorks />
    </div>
  );
};

export default CountryCoverageFilter;
