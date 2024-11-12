import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { appStore, googlePlay, qrcode } from "@/services/images";

const AppDownloadDialog = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
      <DialogContent
        showCloseIcon={true}
        className={cn(
          "bg-main-600 w-[calc(100vw-32px)] max-w-[540px] h-auto min-h-[286px] sm:min-h-[438px] rounded-xl md:rounded-3xl flex flex_center flex-col px-4 md:px-8 lg:px-[60px] pt-10 md:pt-[60px] pb-6 md:pb-[60px] gap-6 md:gap-12 border-0 ring-0 outline-0"
        )}
      >
        <DialogTitle className={"hidden"} />

        <div className="w-full max-w-[400px] md:max-w-[650px] mb-9 md:mb-0 px-0 relative z-[3]">
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
      </DialogContent>
    </Dialog>
  );
};

export default AppDownloadDialog;
