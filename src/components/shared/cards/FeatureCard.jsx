import { cn } from "@/lib/utils";

function FeatureCard({ icon, title, ...props }) {
  return (
    <div
      className={cn(
        "py-8 px-4 bg-white rounded-2xl flex flex-col items-center justify-center gap-6"
      )}
      {...props}
    >
      <div className="w-[60px] aspect-square flex items-center justify-center">
        <img src={icon} alt="icon" className="w-full h-full object-contain" />
      </div>
      <h3 className="text-black-900 text-lg font-semibold">
        Up To 4G LTE Speed
      </h3>
    </div>
  );
}

export default FeatureCard;
