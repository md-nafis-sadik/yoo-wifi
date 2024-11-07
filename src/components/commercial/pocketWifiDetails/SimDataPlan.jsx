import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { WifiSecondaryIcon } from "@/services";

const SimDataPlan = ({ simDataPlan }) => {
  return (
    <div className="containerX sec_common_80 xl:px-0">
      <Table className={"rounded-2xl overflow-hidden"}>
        <TableHeader className={"bg-main-600"}>
          <TableRow>
            <TableHead className="text-white flex items-center gap-4 h-[60px] min-w-[512px] px-6 p_common">
              <WifiSecondaryIcon className="w-[22px] h-auto" color="white" />{" "}
              <span>SIM/eSIM-Unlimited Data Plan</span>{" "}
            </TableHead>
            <TableHead className="text-center text-white border border-l-white min-h-[60px] px-6 p_common">
              500MB/day
            </TableHead>
            <TableHead className="text-center text-white border border-l-white min-h-[60px] px-6 p_common">
              1GB/day
            </TableHead>
            <TableHead className="text-center text-white border border-l-white min-h-[60px] px-6 p_common">
              2GB/day
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className={"!border !border-neutral-300"}>
          {simDataPlan.map((plan) => (
            <TableRow key={plan.plan} className={"h-[52px] md:h-[82px]"}>
              <TableCell className="font-medium px-6 p_common text-black-900">
                {plan.plan}
              </TableCell>
              {plan.data.map((dataLimit) => (
                <TableCell
                  key={dataLimit.limit}
                  className="text-center p_common text-black-900"
                >
                  {dataLimit.price}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SimDataPlan;
