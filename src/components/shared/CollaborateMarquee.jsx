import { images } from "@/services";
import Marquee from "react-fast-marquee";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CollaborateMarquee = () => {
  return (
    <div
      className="w-full mb-10 lg:mb-20 bg-primary-darkDAD bg-[#FFFBEC]"
      id={"companies"}
    >
      <Marquee className="flex transition-all duration-300 items-center h-[92px] md:h-[112px] lg:h-[128px] !select-none">
        {Array(6)
          .fill({ image: images.airtelIndia, alt: "airtel" })
          .map(({ image, alt }, index) => (
            <div
              className="flex items-center justify-center mx-8 md:mx-16 h-full"
              key={`${alt}_${index}`}
            >
              <LazyLoadImage
                src={image}
                alt={alt}
                height={200}
                width={400}
                className="h-auto w-full object-contain"
              />
            </div>
          ))}
      </Marquee>
    </div>
  );
};

export default CollaborateMarquee;
