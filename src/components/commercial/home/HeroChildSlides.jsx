import useEmblaCarouselDotButtons from "@/hooks/useEmblaCarouselDotButtons";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useTranslation } from "react-i18next";

function HeroChildSlides({
  wrapperClass = "",
  selectedClass = "bg-main-750",
  defaultClass = "bg-main-60",
}) {
  const options = { align: "start", loop: true, watchDrag: false };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 2000 }),
  ]);
  const { selectedIndex, scrollSnaps } = useEmblaCarouselDotButtons(emblaApi);
  return (
    <div
      className={cn(
        "pt-10 sm:pt-12 lg:pt-20 xl:pt-40 pb-6 sm:pb-10 md:pb-16 w-full max-w-[448px]",
        wrapperClass
      )}
    >
      <div className="w-full overflow-hidden cursor-default" ref={emblaRef}>
        <div className="flex w-full">
          <SlideCard />
          <SlideCard />
          <SlideCard />
        </div>
      </div>
      <div className="flex gap-1 mt-4">
        {scrollSnaps?.map((_, index) => (
          <div
            className={cn(
              "w-full h-1 rounded-full duration-300",
              index === selectedIndex ? selectedClass : defaultClass
            )}
            key={index}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default HeroChildSlides;

export const SlideCard = ({ item }) => {
  const { t } = useTranslation();

  return (
    <div className="w-full shrink-0 flex items-center justify-center">
      <div className="w-full flex gap-4">
        <div className="font-meid whitespace-nowrap">
          <h5 className="text-3xl sm:text-4xl md:text-[2.5rem] ">50GB+</h5>
          <h6 className="text-xs sm:text-sm  uppercase">
            {t("heroHome.slides.title")}
          </h6>
        </div>
        <p className="text-xs sm:text-sm max-w-48">
          {t("heroHome.slides.description")}
        </p>
      </div>
    </div>
  );
};
