function ServiceCard({ item = {}, ...props }) {
  return (
    <div
      className="px-4 py-8 border border-main-300 rounded-2xl flex flex-col items-center gap-4"
      {...props}
    >
      <div className="mb-2 w-[60px] h-[60px] flex items-center justify-center">
        {item?.icon && item?.icon()}
        {item?.image && (
          <img
            src={item?.image}
            alt={`service icon ${item?.title}`}
            className="w-full h-full object-contain"
          />
        )}
      </div>
      <h3 className="text-lg font-semibold text-black-900 leading-[140%] text-center">
        {item?.title}
      </h3>
      <p className="text-sm md:text-base text-black-600 text-center line-clamp-5">
        {item?.description}
      </p>
    </div>
  );
}

export default ServiceCard;
