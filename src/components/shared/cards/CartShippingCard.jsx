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
        <div className="flex-1 flex flex-col gap-2">
          <h2 className="text-lg font-semibold text-black-900">
            {item?.title}
          </h2>
          {item?.subtitle && (
            <p className="text-base text-black-700">{item?.subtitle}</p>
          )}
          <p className="text-base text-black-700">{item?.description}</p>
        </div>
        <span className="text-2xl font-bold text-main-600">{item?.price}</span>
      </div>
    </div>
  );
}

export default CartShippingCard;
