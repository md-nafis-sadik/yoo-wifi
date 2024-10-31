import { cn } from "@/lib/utils";

function CartDeviceCard({ item = {}, isActive = false, ...props }) {
  return (
    <div
      className={cn(
        "p-4 flex flex-col gap-2.5 rounded-xl cursor-pointer bg-neutral-50 border",
        isActive ? "border-main-600" : "border-neutral-200"
      )}
    >
      <p className="text-lg font-semibold text-black-700">Wifi Device</p>
      <p className="text-lg font-semibold text-black-700">ID: 55775254747523</p>
    </div>
  );
}

export default CartDeviceCard;
