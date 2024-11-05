import ServiceCard from "@/components/shared/cards/ServiceCard";

const WhatWeDo = ({ data = [] }) => {
  return (
    <div className="containerX sec_common_60 xl:px-0">
      <h2 className="title">What We Do</h2>

      <div className="mt-4 md:mt-6 lg:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data?.map((item, index) => (
          <ServiceCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
