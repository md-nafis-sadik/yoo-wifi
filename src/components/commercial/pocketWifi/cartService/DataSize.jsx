import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSelector } from "react-redux";

function DataSize({}) {
  const { cart } = useSelector((state) => state.pocketWifi);

  return (
    <div className="w-full flex flex-col gap-4">
      <h2 className="text-base font-semibold text-black-700">Data Size</h2>
      <Button
        type="button"
        className={cn(
          "hover:bg-main-600 hover:text-white text-white font-semibold"
        )}
        variant="default"
      >
        {cart?.package?.dataSize} {cart?.package?.desc}
      </Button>
    </div>
  );
}

export default DataSize;
