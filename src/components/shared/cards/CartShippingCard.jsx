import { cn } from "@/lib/utils";

function CartShippingCard({ item = {}, isActive = false, ...props }) {
  return (
    <div
      className={cn(
        "p-6 min-h-[154px] flex items-center rounded-xl border-2 cursor-pointer",
        isActive ? "border-main-600" : "border-neutral-400"
      )}
      {...props}
    >
      <div className="flex w-full items-end gap-2">
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-black-900">Self Pickup</h2>
          <p className="text-base text-black-700">Choose your location</p>
          <p className="text-base text-black-700">
            Device Collection: 5 days before travel
          </p>
        </div>
        <span className="text-2xl font-bold text-main-600">Free</span>
      </div>
    </div>
  );
}

export default CartShippingCard;
