import { cn } from "@/lib/utils";

function CartDeviceCard({ item = {}, isActive = false, ...props }) {
  return (
    <div
      className={cn(
        "p-4 flex flex-col gap-2.5 rounded-xl cursor-pointer bg-neutral-50 border",
        isActive ? "border-main-600" : "border-neutral-200"
      )}
      {...props}
    >
      <p className="text-lg font-semibold text-black-700">{item?.name}</p>
      <p className="text-lg font-semibold text-black-700">
        ID: {item?.deviceId}
      </p>
    </div>
  );
}

export default CartDeviceCard;
