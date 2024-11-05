import { images, YooWifiLogoIcon } from "@/services";
import { appStore, googlePlay, qrcode } from "@/services/images";

function DownloadYoowifi() {
  return (
    <section className="py-9 md:py-[60px] pt-0 px-4 bg-main-600 relative overflow-hidden">
      <YooWifiLogoIcon className="absolute top-1/2 left-0 -translate-y-1/2 z-[1] w-[326px] md:w-[880px] h-full" />
      <div className="w-full max-w-[1220px] mx-auto relative z-[3]">
        <div className="w-full max-w-[650px] sec_common_60 px-0 md:px-10 lg:px-0">
          <h2 className="text-base md:text-3xl md:font-semibold text-status-alert leading-[120%] md:uppercase">
            Download the
          </h2>
          <h3 className="text-5xl md:text-[5rem] font-bold md:font-extrabold text-white mt-1 md:mt-4">
            Yoowifi
          </h3>
          <p className="text-sm md:text-2xl text-white">
            Advanced features for an effortless digital experience anytime,
            anywhere!
          </p>
          <div className="mt-10 flex flex-col md:flex-row items-start lg:items-center gap-4 md:gap-10">
            <div className="flex flex-col gap-2 md:gap-4">
              <a href="#" className="">
                <img
                  src={googlePlay}
                  alt="google play"
                  className="w-[113px] md:w-[210px] h-auto"
                />
              </a>
              <a href="#" className="">
                <img
                  src={appStore}
                  alt="google play"
                  className="w-[113px] md:w-[210px] h-auto"
                />
              </a>
            </div>
            <div>
              <img
                src={qrcode}
                alt="google play"
                className="w-[60px] md:w-[160px] aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-[-5%] h-auto w-3/5 sm:w-1/2 md:w-2/5 lg:w-1/2 z-[2]">
        <img src={images.download} alt="" />
      </div>
    </section>
  );
}

export default DownloadYoowifi;
