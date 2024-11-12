import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { commercialRoutes, PhoneIcon, WifiSecondaryIcon } from "@/services";
import DataPlanTable from "./DataPlanTable";
import { Link } from "react-router-dom";

const UnlimitedDayPass = ({
  pocketWifiDayPass,
  restOfTheWorldDayPass,
  regionalCountries,
}) => {
  return (
    <div className="containerX sec_common_80 xl:px-0">
      <DataPlanTable
        headers={["Pocket Wifi-Unlimited Daypass", "1GB/day", "5GB/day"]}
        dataPlans={pocketWifiDayPass}
      />

      <DataPlanTable
        headers={["Rest of the World-Unlimited Daypass", "1GB/day", "5GB/day"]}
        dataPlans={restOfTheWorldDayPass}
        className={"mt-12"}
      />

      <p className="text-sm !leading-[1.4] font-normal text-black-700 mt-6 md:mt-5">
        {regionalCountries}
      </p>

      <div className="flex items-center justify-center mt-6 md:mt-12 gap-4">
        <Link to={commercialRoutes.howItWorks.path} className="w-max">
          <Button
            className={
              "w-[156px] md:w-[223px] h-11 md:h-[51px] text-sm md:text-base font-semibold !leading-[1.2]"
            }
          >
            Rent a Device Now
          </Button>
        </Link>

        <a href="https://play.google.com/store/apps/details?id=com.netrocreative.flypers&hl=en" className="w-max">
          <Button
            className={
              "w-[156px] md:w-[160px] h-11 md:h-[51px] border border-main-600 text-main-600 text-sm md:text-base font-semibold !leading-[1.2] rounded-[10px]"
            }
            size="sm"
            variant="outlined"
          >
            <PhoneIcon className="!w-5 !h-5" color="#D81F22" />
            <span>Download APP</span>
          </Button>
        </a>
      </div>
    </div>
  );
};

export default UnlimitedDayPass;
