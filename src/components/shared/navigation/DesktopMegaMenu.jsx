import { cn } from "@/lib/utils";
import {
  CheckSlideIcon,
  commercialRoutes,
  GroupAffiliateIcon,
  InfoIcon,
  MapCoverageIcon,
  MapPickupIcon,
  TravelIcon,
} from "@/services";
import { NavLink } from "react-router-dom";

const DesktopMegaMenu = ({ isShow = false }) => {
  return (
    <div
      className={cn(
        " hidden xl:block overflow-hidden duration-300 absolute w-[100vw] left-0",
        isShow ? "max-h-[280px]" : "max-h-0"
      )}
    >
      <div className="pt-6">
        <div className="bg-neutral-black text-white px-4 py-8">
          <div className="w-full max-w-[1392px] mx-auto relative ">
            <div className="w-full grid grid-cols-6 gap-3 2xl:gap-6">
              {/* Travel Data */}
              <div className="flex items-start gap-3 flex-1 w-full">
                <div className="w-8 aspect-square flex items-center justify-center bg-main-600 rounded ">
                  <TravelIcon className="shrink-0 w-5 h-5" />
                </div>
                <div>
                  <span className="text-lg font-semibold leading-[140%]">
                    Travel Data
                  </span>
                  <div className="text-sm flex flex-col gap-3 mt-3">
                    <NavLink
                      className={({ isActive }) =>
                        ` hover:text-main-500 duration-300 ${
                          isActive ? "text-main-600" : "text-white"
                        }`
                      }
                      to={commercialRoutes.pocketWifiDetails.path}
                    >
                      Pocket Wifi Details
                    </NavLink>
                    <NavLink
                      to={commercialRoutes.simHome.path}
                      className={({ isActive }) =>
                        ` hover:text-main-500 duration-300 ${
                          isActive ? "text-main-600" : "text-white"
                        }`
                      }
                    >
                      Sim/eSim Details
                    </NavLink>
                  </div>
                </div>
              </div>
              {/* Country Coverage */}
              <div className="flex items-start gap-3 flex-1 w-full">
                <div className="w-8 aspect-square flex items-center justify-center bg-main-600 rounded ">
                  <MapCoverageIcon className="shrink-0 w-5 h-5" />
                </div>
                <div>
                  <span className="text-lg font-semibold leading-[140%]">
                    Country Coverage
                  </span>
                  <div className="text-sm flex flex-col gap-3 mt-3">
                    <NavLink
                      to={`${commercialRoutes.countryCoverage.path}?region=asia`}
                      className={({ isActive }) =>
                        ` hover:text-main-500 duration-300 ${
                          isActive ? "text-main-600" : "text-white"
                        }`
                      }
                    >
                      Asia
                    </NavLink>
                    <NavLink
                      to={`${commercialRoutes.countryCoverage.path}?region=europe`}
                      className={({ isActive }) =>
                        ` hover:text-main-500 duration-300 ${
                          isActive ? "text-main-600" : "text-white"
                        }`
                      }
                    >
                      Europe
                    </NavLink>
                    <NavLink
                      to={`${commercialRoutes.countryCoverage.path}?region=america`}
                      className={({ isActive }) =>
                        ` hover:text-main-500 duration-300 ${
                          isActive ? "text-main-600" : "text-white"
                        }`
                      }
                    >
                      America
                    </NavLink>
                    <NavLink
                      to={`${commercialRoutes.countryCoverage.path}?region=australia`}
                      className={({ isActive }) =>
                        ` hover:text-main-500 duration-300 ${
                          isActive ? "text-main-600" : "text-white"
                        }`
                      }
                    >
                      Australia
                    </NavLink>
                    <NavLink
                      to={`${commercialRoutes.countryCoverage.path}?region=africa`}
                      className={({ isActive }) =>
                        ` hover:text-main-500 duration-300 ${
                          isActive ? "text-main-600" : "text-white"
                        }`
                      }
                    >
                      Africa
                    </NavLink>
                  </div>
                </div>
              </div>
              {/* Pickup/Drop off Location */}
              <div className="flex items-start gap-3 flex-1 w-full">
                <div className="w-8 aspect-square flex items-center justify-center bg-main-600 rounded shrink-0">
                  <MapPickupIcon className="shrink-0 w-5 h-5" />
                </div>
                <div>
                  <span className="text-lg font-semibold leading-[140%]">
                    Pickup/Drop off Location
                  </span>
                  <div className="text-sm flex flex-col gap-3 mt-3">
                    <NavLink
                      to={commercialRoutes.pickDropLocation.path}
                      className={({ isActive }) =>
                        ` hover:text-main-500 duration-300 ${
                          isActive ? "text-main-600" : "text-white"
                        }`
                      }
                    >
                      Pickup Location
                    </NavLink>
                    <NavLink
                      to={commercialRoutes.pickDropLocation.path}
                      className={({ isActive }) =>
                        ` hover:text-main-500 duration-300 ${
                          isActive ? "text-main-600" : "text-white"
                        }`
                      }
                    >
                      Drop off Location
                    </NavLink>
                  </div>
                </div>
              </div>
              {/* How It Works */}
              <div className="flex items-start gap-3 flex-1 w-full">
                <div className="w-8 aspect-square flex items-center justify-center bg-main-600 rounded shrink-0">
                  <CheckSlideIcon className="shrink-0 w-5 h-5" />
                </div>
                <div>
                  <span className="text-lg font-semibold leading-[140%]">
                    How It Works
                  </span>
                  <div className="text-sm flex flex-col gap-3 mt-3">
                    <NavLink
                      to={`${commercialRoutes.howItWorks.path}/#rent`}
                      className={({ isActive }) =>
                        ` hover:text-main-500 duration-300 ${
                          isActive ? "text-main-600" : "text-white"
                        }`
                      }
                    >
                      Rent Yoowifi Pocket WiFi
                    </NavLink>
                    <NavLink
                      to={`${commercialRoutes.howItWorks.path}/#self-return`}
                      className={({ isActive }) =>
                        ` hover:text-main-500 duration-300 ${
                          isActive ? "text-main-600" : "text-white"
                        }`
                      }
                    >
                      Simple Self-Return In less then a minute
                    </NavLink>
                    <NavLink
                      to={`${commercialRoutes.howItWorks.path}/#topup`}
                      className={({ isActive }) =>
                        ` hover:text-main-500 duration-300 ${
                          isActive ? "text-main-600" : "text-white"
                        }`
                      }
                    >
                      Create New Trip or Top-up data
                    </NavLink>
                  </div>
                </div>
              </div>
              {/* Affiliate */}
              <div className="flex items-start gap-3 flex-1 w-full">
                <div className="w-8 aspect-square flex items-center justify-center bg-main-600 rounded shrink-0">
                  <GroupAffiliateIcon className="shrink-0 w-5 h-5" />
                </div>
                <div>
                  <span className="text-lg font-semibold leading-[140%]">
                    Affiliate
                  </span>
                  <div className="text-sm flex flex-col gap-3 mt-3">
                    <NavLink
                      to={`${commercialRoutes.affiliate.path}/#join-affiliate`}
                      className={({ isActive }) =>
                        ` hover:text-main-500 duration-300 ${
                          isActive ? "text-main-600" : "text-white"
                        }`
                      }
                    >
                      Join the Yoowifi Affiliate Yoo Wander Program
                    </NavLink>
                    <NavLink
                      to={`${commercialRoutes.affiliate.path}/#lets-talk`}
                      className={({ isActive }) =>
                        ` hover:text-main-500 duration-300 ${
                          isActive ? "text-main-600" : "text-white"
                        }`
                      }
                    >
                      Contact Us Now!
                    </NavLink>
                  </div>
                </div>
              </div>
              {/* How To */}
              <div className="flex items-start gap-3 flex-1 w-full">
                <div className="w-8 aspect-square flex items-center justify-center bg-main-600 rounded shrink-0">
                  <InfoIcon className="shrink-0 w-5 h-5" />
                </div>
                <div>
                  <span className="text-lg font-semibold leading-[140%]">
                    How To
                  </span>
                  <div className="text-sm flex flex-col gap-3 mt-3">
                    <NavLink
                      to={commercialRoutes.howToSetupSim.path}
                      className={({ isActive }) =>
                        ` hover:text-main-500 duration-300 ${
                          isActive ? "text-main-600" : "text-white"
                        }`
                      }
                    >
                      Set an eSIM
                    </NavLink>
                    <NavLink
                      to={commercialRoutes.howToConnectPocketWifi.path}
                      className={({ isActive }) =>
                        ` hover:text-main-500 duration-300 ${
                          isActive ? "text-main-600" : "text-white"
                        }`
                      }
                    >
                      How to connect Pocketwifi?
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopMegaMenu;
