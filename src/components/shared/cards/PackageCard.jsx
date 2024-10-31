function PackageCard({ item = {}, ...props }) {
  return (
    <div className="px-4 py-5 rounded-xl border border-neutral-400 flex items-start gap-5">
      <div className="w-14 aspect-square bg-main-50 rounded-lg flex items-center  justify-center">
        <img
          src={item?.icon}
          alt="icon"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-full flex items-end gap-2">
        <div className="w-full">
          <h3 className="text-2xl font-bold text-black-700">
            Global 50GB with Device
          </h3>
          <p className="text-base text-black-700">Keep Yoowifi Device</p>
          <p className="text-base text-black-700">Top-up Plan only</p>
          <p className="text-base text-black-700">365 Days Validity</p>
          <p className="text-base text-black-700"> Covers 90 Countries</p>
        </div>
        <h4 className="text-2xl font-bold text-black-700 whitespace-nowrap">
          SGD 79
        </h4>
      </div>
    </div>
  );
}

export default PackageCard;
