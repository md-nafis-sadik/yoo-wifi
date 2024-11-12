import useEmblaCarouselDotButtons from "@/hooks/useEmblaCarouselDotButtons";
import { cn } from "@/lib/utils";
import { setHeroIndex } from "@/store/module/shared/sharedSlice";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useDispatch } from "react-redux";
import HeroConnected from "./HeroConnected";
import HeroDiscover from "./HeroDiscover";
import HeroTravel from "./HeroTravel";

function Hero() {
  const options = {
    loop: true,
    watchDrag: false,
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 6000 }),
  ]);
  const dispatch = useDispatch();
  const handleUpdateHeroSelectedIndex = (index) => {
    dispatch(setHeroIndex(index));
  };
  const { selectedIndex, scrollSnaps } = useEmblaCarouselDotButtons(
    emblaApi,
    handleUpdateHeroSelectedIndex
  );

  return (
    <section className="w-full relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div
          className={cn(
            "flex",
            selectedIndex == 0 &&
              "h-[740px] sm:h-[640px] md:h-[1190px] lg:h-[920px]",
            selectedIndex == 1 &&
              "h-[740px] sm:h-[948px] md:h-[1008px] lg:h-[920px]",
            selectedIndex == 2 &&
              "h-[740px] sm:h-[760px] md:h-[960px] lg:h-[920px]"
          )}
        >
          <HeroConnected />
          <HeroTravel />
          <HeroDiscover />
        </div>
      </div>
      <div className="absolute md:right-16 md:bottom-24 z-50 hidden md:flex md:flex-col items-center gap-2.5">
        {scrollSnaps?.map((_, index) => (
          <div
            className={cn(
              "w-3 rounded-xl duration-300",
              selectedIndex == index
                ? index == 2
                  ? "h-3 w-8 md:w-3 md:h-8 bg-main-600"
                  : "h-3 w-8 md:w-3 md:h-8 bg-secondary-500"
                : "h-3 bg-white-rgb"
            )}
            key={index}
          ></div>
        ))}
      </div>
    </section>
  );
}

export default Hero;
