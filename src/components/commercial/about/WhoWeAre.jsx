import { LazyLoadImage } from "react-lazy-load-image-component";

const WhoWeAre = ({ data = {} }) => {
  return (
    <div className="container2X sec_common_60 xl:px-0 flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-10">
      <div className="w-full lg:w-1/2">
        <h2 className="title text-start">{data.title}</h2>
        <p className="mt-4 md:mt-6 p_common whitespace-pre-wrap">
          {data.description}
        </p>
      </div>
      <div className="w-full lg:w-1/2 flex_center">
        <div className="aspect-[1.5/1] w-full relative overflow-hidden rounded-xl md:rounded-s-3xl">
          <LazyLoadImage
            src={data.image || ""}
            alt={data.title}
            className="absolute_center min-w-full min-h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
