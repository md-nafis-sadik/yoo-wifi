function PackageCard({ item = {}, ...props }) {
  return (
    <div className="px-4 py-5 rounded-xl border border-neutral-400 flex items-start gap-5">
      <div className="w-14 aspect-square bg-main-50 p-1 rounded-lg flex items-center  justify-center">
        <img
          src={item?.image}
          alt="icon"
          className="w-full h-full object-contain rounded"
        />
      </div>
      <div className="w-full flex items-end gap-2">
        <div className="w-full">
          <h3 className="text-2xl font-bold text-black-700">{item?.title}</h3>
          {item?.features?.map((feature, index) => (
            <p key={index} className="text-base text-black-700">
              {feature}
            </p>
          ))}
        </div>
        <h4 className="text-2xl font-bold text-black-700 whitespace-nowrap">
          {item?.price?.currency} {item?.price?.amount}
        </h4>
      </div>
    </div>
  );
}

export default PackageCard;
