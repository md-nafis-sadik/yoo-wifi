import Products from "@/components/commercial/home/Products";
import SimDataPlan from "@/components/commercial/pocketWifiDetails/SimDataPlan";
import UnlimitedDayPass from "@/components/commercial/pocketWifiDetails/UnlimitedDayPass";
import CollaborateMarquee from "@/components/shared/CollaborateMarquee";
import CustomerTestimonial from "@/components/shared/others/CustomerTestimonial";
import { useSelector } from "react-redux";

const PocketWifiDetails = () => {
  const { simDataPlan, pocketWifiDayPass, regionalCountries } = useSelector(
    (state) => state.dataPlan
  );

  return (
    <div className="overflow-hidden w-full">
      <Products className={"bg-white"} showProductDeadline />
      <UnlimitedDayPass
        pocketWifiDayPass={pocketWifiDayPass}
        regionalCountries={regionalCountries}
      />
      <CustomerTestimonial />
      <SimDataPlan simDataPlan={simDataPlan} />
      <CollaborateMarquee />
    </div>
  );
};

export default PocketWifiDetails;
