import { cn } from "@/lib/utils";

function InfoCard({
  title = "",
  icon = "",
  description = "",
  children,
  ...props
}) {
  return (
    <div
      className={cn("flex items-center gap-10 bg-neutral-100 rounded-2xl p-6")}
      {...props}
    >
      {children ? (
        children
      ) : (
        <div className="w-20 aspect-square flex items-center justify-center">
          <img src={icon} alt="icon" className="w-full h-full object-contain" />
        </div>
      )}
      <div>
        <h3 className="text-black-900 text-2xl font-bold">
          The battery capacity is shown by different color
        </h3>
        {description && (
          <p className="text-black-600 text-lg mt-4">
            Lorem Ipsum is simply dummy text of the printing and typeset
            industry.Lorem Ipsum is simply
          </p>
        )}
      </div>
    </div>
  );
}

export default InfoCard;
