import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PhoneIcon, WifiSecondaryIcon } from "@/services";

const UnlimitedDayPass = ({ pocketWifiDayPass, regionalCountries }) => {
  return (
    <div className="containerX sec_common_80 xl:px-0">
      <Table className={"rounded-2xl overflow-hidden"}>
        <TableHeader className={"bg-main-600"}>
          <TableRow>
            <TableHead className="text-white flex items-center gap-4 h-[60px] min-w-[512px] px-6 p_common">
              <WifiSecondaryIcon className="w-[22px] h-auto" color="white" />{" "}
              <span>SIM/eSIM-Unlimited Data Plan</span>{" "}
            </TableHead>
            <TableHead className="text-center text-white border border-l-white h-[60px] px-6 p_common">
              1GB/day
            </TableHead>
            <TableHead className="text-center text-white border border-l-white h-[60px] px-6 p_common">
              5GB/day
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className={" !border !border-neutral-300"}>
          {pocketWifiDayPass.map((plan) => (
            <TableRow key={plan.plan} className={"h-[52px] md:h-[82px]"}>
              <TableCell className="font-medium px-6 p_common text-black-700">
                {plan.plan}
              </TableCell>
              {plan.data.map((dataLimit) => (
                <TableCell
                  key={dataLimit.limit}
                  className="text-center p_common text-black-700"
                >
                  {dataLimit.price}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <p className="text-sm !leading-[1.4] font-normal text-black-700 mt-6 md:mt-5">
        {regionalCountries}
      </p>

      <div className="flex items-center justify-center mt-6 md:mt-12 gap-4">
        <Button
          className={
            "h-[51px] text-sm md:text-base font-semibold !leading-[1.2]"
          }
          size="lg"
        >
          Rent a Device Now
        </Button>
        <Button
          className={
            "h-[51px] border border-main-600 text-main-600 text-sm md:text-base font-semibold !leading-[1.2]"
          }
          size="lg"
          variant="outlined"
        >
          <PhoneIcon className="!w-5 !h-5" color="#D81F22" />
          <span>Download APP</span>
        </Button>
      </div>
    </div>
  );
};

export default UnlimitedDayPass;
