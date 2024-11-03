import { images } from "@/services";
import Marquee from "react-fast-marquee";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CollaborateMarquee = () => {
  return (
    <div
      className="w-full bg-[#FFFBEC] pb-6 pt-6 md:pb-[60px] md:pt-10"
      id={"companies"}
    >
      <p className="text-center text-black-700 text-base md:text-2xl !leading-[1.4]">
        Operators We Collaborate With
      </p>

      <Marquee
        className="flex transition-transform duration-300 items-center justify-between overflow-hidden !select-none mt-6 md:mt-8 h-20 md:h-24 lg:h-28"
        gradient={false}
        speed={50}
      >
        {Array(6)
          .fill({ image: images.airtelIndia, alt: "airtel" })
          .map(({ image, alt }, index) => (
            <div
              className="flex items-center justify-center mx-10 md:mx-16 lg:mx-20 h-full"
              key={`${alt}_${index}`}
            >
              <LazyLoadImage
                src={image}
                alt={alt}
                height={200}
                width={400}
                className="h-6 md:h-10 lg:h-12 w-full object-contain grayscale"
              />
            </div>
          ))}
      </Marquee>
    </div>
  );
};

export default CollaborateMarquee;
