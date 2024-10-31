import { cn } from "@/lib/utils";

function CartLocationCard({ item = {}, ...props }) {
  return (
    <div
      className={cn(
        "px-8 py-6 hover:bg-neutral-200 cursor-pointer duration-300"
      )}
      {...props}
    >
      <h2 className="text-base font-semibold text-black-900 mb-2">
        ALBERT VILLAGE COURT HOTEL
      </h2>
      <span className="tag">Singapore</span>
      <p className="text-sm font-semibold text-black-700 mb-1 mt-3">
        SG-ALBERT-VILLAGE
      </p>
      <p className="text-sm text-black-600">180 Albert St</p>
      <p className="text-sm text-black-600">189971 Singapore</p>
    </div>
  );
}

export default CartLocationCard;
