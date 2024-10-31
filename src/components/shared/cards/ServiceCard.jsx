function ServiceCard({ item = {}, ...props }) {
  return (
    <div className="px-4 py-8 border border-main-300 rounded-2xl flex flex-col items-center  gap-4">
      <div className="mb-2 w-[60px] h-[60px] flex items-center justify-center">
        <img
          src={item?.icon}
          alt="service icon"
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-lg font-semibold text-black-900 leading-[140%]">
        Management Portal
      </h3>
      <p className="text-base text-black-600">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been .
      </p>
    </div>
  );
}

export default ServiceCard;
