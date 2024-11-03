import { Button } from "@/components/ui/button";
import { addZeroToNumber, MinusIcon, PlusIcon } from "@/services";
import { useState } from "react";

function CartQuantity({ max = 1, defaultValue = 1, setter = () => {} }) {
  const [count, setCount] = useState(defaultValue);

  // TODO: add quantity logic
  const handleQuantity = (type = "increment") => {
    if (type === "increment") {
      if (count < max) {
        setCount((prev) => prev + 1);
        setter(count);
      }
    } else {
      if (count > 1) {
        setCount((prev) => prev - 1);
        setter(count);
      }
    }
  };

  return (
    <div className="flex items-stretch gap-4">
      <Button
        variant="outline"
        className="min-w-[100px] bg-neutral-100"
        onClick={() => handleQuantity("decrement")}
      >
        <MinusIcon />
      </Button>
      <div className="w-full p-4 bg-neutral-100 border border-neutral-200 rounded-xl text-center text-base font-bold text-black-900">
        {addZeroToNumber(count)}
      </div>
      <Button
        variant="outline"
        className="min-w-[100px] bg-neutral-100"
        onClick={() => handleQuantity("increment")}
      >
        <PlusIcon />
      </Button>
    </div>
  );
}

export default CartQuantity;
