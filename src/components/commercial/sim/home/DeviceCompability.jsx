import SectionHeader from "@/components/shared/others/SectionHeader";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ArrowDownIcon } from "@/services";

function DeviceCompability() {
  return (
    <section className="sec_common_60">
      <div className="containerX">
        <SectionHeader
          heading="Check Device Compatibility"
          subHeading="If you are using eSIM for the first time, you may need to check if your device supports eSlM. And we would like to help you With just that. Select your device brand and see if your models are listed. You can confirm further by checking the Settings page of your device."
          containerClassName="gap-4"
        />

        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="black" className="w-full">
                <span>Apple</span>
                <ArrowDownIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 bg-black text-white rounded-3xl pb-2 custom pl-10 pr-6 pt-8 ">
              <div className="grid gap-4 pr-4 max-h-[411px] overflow-auto"></div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </section>
  );
}

export default DeviceCompability;
