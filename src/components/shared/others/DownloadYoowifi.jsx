import { images } from "@/services";
import { appStore, googlePlay, qrcode } from "@/services/images";

function DownloadYoowifi() {
  return (
    <section className="py-[60px] pt-0 px-4 bg-main-600">
      <div className="w-full max-w-[1220px] mx-auto">
        <div className="flex items-end justify-between gap-10">
          <div className="w-full max-w-[650px]">
            <h2 className="text-3xl font-semibold text-status-alert leading-[120%] uppercase">
              Download the
            </h2>
            <h3 className="text-[5rem] font-extrabold text-white">Yoowifi</h3>
            <p className="text-2xl text-white">
              Advanced features for an effortless digital experience anytime,
              anywhere!
            </p>
            <div className="mt-10 flex items-center gap-10">
              <div className="flex flex-col gap-4">
                <a href="#" className="">
                  <img
                    src={googlePlay}
                    alt="google play"
                    className="w-[210px] h-[72px]"
                  />
                </a>
                <a href="#" className="">
                  <img
                    src={appStore}
                    alt="google play"
                    className="w-[210px] h-[72px]"
                  />
                </a>
              </div>
              <div>
                <img
                  src={qrcode}
                  alt="google play"
                  className="w-[160] h-[160px]"
                />
              </div>
            </div>
          </div>
          <div className="w-full max-w-[540px] -mb-[60px]">
            <img src={images.download} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DownloadYoowifi;
