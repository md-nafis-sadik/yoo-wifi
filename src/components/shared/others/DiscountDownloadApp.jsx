import { Button } from "@/components/ui/button";
import { PhoneIcon } from "@/services";
import { qrcode } from "@/services/images";

function DiscountDownloadApp() {
  return (
    <div className="px-8 py-10 rounded-2xl bg-main-600 text-white flex flex-col sm:flex-row md:flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 md:items-start lg:items-center justify-between relative">
      <div className="w-full flex flex-col gap-3">
        <h2 className="text-xl font-semibold uppercase text-status-alert">
          On Mobile App
        </h2>
        <h3 className="text-5xl font-extrabold">8% Off</h3>
        <p className="text-base leading-[140%]">
          Advanced features for an effortless digital experience anytime,
          anywhere!
        </p>
      </div>
      <div className="w-full max-w-[160px] flex flex-col gap-4 sm:items-end md:items-start lg:items-end">
        <div className="w-20 h-20">
          <img src={qrcode} alt="" className="w-full h-full object-contain" />
        </div>
        <Button variant="secondary" className="py-4">
          <PhoneIcon className="!w-5 !h-5" />
          <span>Download APP</span>
        </Button>
      </div>
    </div>
  );
}

export default DiscountDownloadApp;
