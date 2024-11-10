import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import useGteNavbarStatus from "@/hooks/useGteNavbarStatus";
import { cn } from "@/lib/utils";
import {
  ArrowDownIcon,
  CellphoneIcon,
  CheckSlideIcon,
  CloseIcon,
  commercialRoutes,
  GroupAffiliateIcon,
  InfoIcon,
  LogoIcon,
  MapCoverageIcon,
  MapPickupIcon,
  PersonIcon,
  SearchIcon,
  TravelIcon,
} from "@/services";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const { isScrolled, isWhite, isRedBorder, isHome, isBlack, isBannerRoutes } =
    useGteNavbarStatus();
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showSearchbar, setShowSearchbar] = useState(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-[999] duration-300",
        isScrolled || showMegaMenu ? "bg-black" : "",
        !isHome && !isBannerRoutes ? "border-b border-neutral-200" : ""
      )}
    >
      <div className="w-full max-w-[1392px] mx-auto relative">
        <nav
          className={cn(
            "w-full duration-300 flex items-center lg:gap-10 2xl:gap-15 justify-between px-4 py-2 sm:py-4",
            isBlack || isScrolled
              ? "text-white"
              : isBannerRoutes
              ? "text-white"
              : "text-white xl:text-black-700"
          )}
        >
          <div className="flex w-full xl:w-auto items-center gap-2 sm:gap-6  justify-between">
            <Link to={commercialRoutes.home.path}>
              <LogoIcon
                className="max-w-[100px] sm:max-w-[112px]"
                color={isBlack || isBannerRoutes ? "#fff" : "#E41F26"}
              />
            </Link>
            <div className="w-full max-w-[200px] xs:max-w-full  items-center justify-end xs:gap-1 flex xl:hidden">
              <label
                htmlFor="search"
                className={cn(
                  "overflow-hidden  w-full relative duration-300 origin-left",
                  showSearchbar ? "max-w-[200px] xs:max-w-full" : "max-w-0"
                )}
              >
                <input
                  type="text"
                  className={cn(
                    "pr-3 pl-10 w-full text-sm py-2 border outline-none  bg-transparent rounded-lg",
                    isRedBorder
                      ? "border-neutral-800 placeholder:text-black-600"
                      : isScrolled || !isHome
                      ? "border-neutral-800 placeholder:text-black-600"
                      : "border-neutral-50 placeholder:text-black-100"
                  )}
                  placeholder="Search country"
                />
                <SearchIcon
                  className="absolute h-5 w-5 top-1/2 -translate-y-1/2 left-3"
                  color={
                    isRedBorder
                      ? "#757575"
                      : isScrolled || !isHome
                      ? "#757575"
                      : "#FAFAFA"
                  }
                />
              </label>
              {showSearchbar ? (
                <button
                  type="button"
                  className="border-none outline-none"
                  onClick={() => setShowSearchbar(false)}
                >
                  <CloseIcon
                    className="w-6 h-6"
                    color={
                      isRedBorder
                        ? "#757575"
                        : isScrolled || !isHome
                        ? "#757575"
                        : "#FAFAFA"
                    }
                  />
                </button>
              ) : (
                <button
                  type="button"
                  className="border-none outline-none"
                  onClick={() => setShowSearchbar(true)}
                >
                  <SearchIcon
                    className="w-6 h-6"
                    color={
                      isRedBorder
                        ? "#757575"
                        : isScrolled || !isHome
                        ? "#757575"
                        : "#FAFAFA"
                    }
                  />
                </button>
              )}
            </div>
            <button
              type="butotn"
              className="outline-none border-none xl:hidden"
              onClick={() => setIsShowMenu(true)}
            >
              <MenuIcon color={isBlack || isScrolled ? "#fff" : "#000"} />
            </button>
          </div>
          <div
            className={cn(
              "flex-1 xl:flex flex-col xl:flex-row xl:items-center xl:justify-between text-lg xl:text-sm font-semibold fixed xl:relative top-0 left-0 w-full bg-black h-screen xl:bg-transparent xl:h-auto p-4 xl:p-0 overflow-auto duration-500",
              isShowMenu ? "translate-x-0" : "translate-x-full xl:translate-x-0"
            )}
          >
            <div className="max-w-[360px] pt-10 xl:pt-0 xl:max-w-none mx-auto flex-1 xl:flex flex-col xl:flex-row xl:items-center xl:justify-between">
              <div className="flex xl:hidden w-full xl:w-auto items-center justify-between pb-10">
                <Link to={commercialRoutes.home.path}>
                  <LogoIcon color="#E41F26" />
                </Link>
                <button
                  type="butotn"
                  className="outline-none border-none xl:hidden absolute top-4 right-4"
                  onClick={() => setIsShowMenu(false)}
                >
                  <CloseIcon />
                </button>
              </div>
              <ul className="flex flex-col xl:flex-row xl:items-center 2xl:gap-3">
                <li>
                  <Link
                    className={cn(
                      "menuItem",
                      !isRedBorder && isHome
                        ? "hover:after:bg-white"
                        : "hover:after:bg-main-600"
                    )}
                    to={commercialRoutes.home.path}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className={cn(
                      "menuItem",
                      !isRedBorder && isHome
                        ? "hover:after:bg-white"
                        : "hover:after:bg-main-600"
                    )}
                    to={commercialRoutes.pocketWifiHome.path}
                  >
                    Pocket WIFI
                  </Link>
                </li>
                <li>
                  <Link
                    className={cn(
                      "menuItem",
                      !isRedBorder && isHome
                        ? "hover:after:bg-white"
                        : "hover:after:bg-main-600"
                    )}
                    to={commercialRoutes.routerHome.path}
                  >
                    Router
                  </Link>
                </li>
                <li>
                  <Link
                    className={cn(
                      "menuItem",
                      !isRedBorder && isHome
                        ? "hover:after:bg-white"
                        : "hover:after:bg-main-600"
                    )}
                    to={commercialRoutes.simHome.path}
                  >
                    SIM/eSIM
                  </Link>
                </li>
                <li>
                  <Link
                    className={cn(
                      "menuItem",
                      !isRedBorder && isHome
                        ? "hover:after:bg-white"
                        : "hover:after:bg-main-600"
                    )}
                    to={commercialRoutes.contact.path}
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className={cn(
                      "menuItem",
                      !isRedBorder && isHome
                        ? "hover:after:bg-white"
                        : "hover:after:bg-main-600"
                    )}
                    to={commercialRoutes.aboutUs.path}
                  >
                    About Us
                  </Link>
                </li>
                {/* mega menu  */}
                <li className="hidden xl:block">
                  <div
                    className="flex items-center justify-between xl:justify-start cursor-pointer w-full max-w-[320px] p-3 rounded-lg xl:rounded-none hover:bg-main-600 xl:w-auto xl:max-w-none xl:p-0 xl:hover:text-inherit xl:hover:bg-transparent hover:text-white"
                    onClick={() => setShowMegaMenu(!showMegaMenu)}
                  >
                    <span>Others</span>
                    <ArrowDownIcon
                      pathClass={
                        isWhite && !isScrolled && !isBannerRoutes
                          ? "fill-neutral-black"
                          : isHome || isScrolled || isBannerRoutes
                          ? "fill-white"
                          : "fill-white xl:fill-neutral-black"
                      }
                    />
                  </div>
                </li>
                <MobileMegaMenu />
              </ul>
              <Link
                className={cn(
                  "menuItem p-3 xl:p-0 text-white ",
                  isRedBorder && !isBannerRoutes
                    ? "xl:text-main-600"
                    : isHome || isBannerRoutes
                    ? "xl:text-secondary-500"
                    : "xl:text-main-600"
                )}
                to="/"
              >
                Corporate
              </Link>
              <div className="flex flex-col xl:flex-row xl:items-center gap-3 w-full xl:w-auto flex-1 xl:flex-none justify-end xl:justify-center mt-6 xl:mt-0">
                <label
                  htmlFor="search"
                  className="w-full hidden xl:block relative"
                >
                  <input
                    type="text"
                    className={cn(
                      "pr-3 pl-10  py-2 border outline-none  bg-transparent rounded-lg",
                      isRedBorder
                        ? "border-neutral-800 placeholder:text-black-600"
                        : isScrolled || (!isHome && !isBannerRoutes)
                        ? "border-neutral-800 placeholder:text-black-600"
                        : "border-neutral-50 placeholder:text-black-100"
                    )}
                    placeholder="Search country"
                  />
                  <SearchIcon
                    className="absolute top-1/2 -translate-y-1/2 left-3"
                    color={
                      isRedBorder
                        ? "#757575"
                        : isScrolled || (!isHome && !isBannerRoutes)
                        ? "#757575"
                        : "#FAFAFA"
                    }
                  />
                </label>
                <Button
                  variant="secondary"
                  className={
                    "px-6 md:py-3 rounded-[10px] w-full max-w-[320px] xl:w-auto hidden"
                  }
                >
                  <span>Login</span>
                </Button>
                <Button
                  variant="outline"
                  className={
                    "px-6 md:py-3 bg-transparent border-main-600 text-main-600 hover:bg-main-600 hover:text-white rounded-[10px] w-full max-w-[320px] xl:w-auto xl:hidden"
                  }
                >
                  <span>Login</span>
                </Button>
                <Button
                  className={cn(
                    "px-6 md:py-3 rounded-[10px] w-full max-w-[320px] xl:w-auto",
                    (!isRedBorder && !isScrolled && isHome) || isBannerRoutes
                      ? "bg-main-600 text-white xl:bg-white xl:text-black-900"
                      : "bg-main-600 text-white"
                  )}
                >
                  <CellphoneIcon
                    color={
                      (!isRedBorder && !isScrolled && isHome) || isBannerRoutes
                        ? "#212121"
                        : "#fff"
                    }
                    className="w-5 h-5 shrink-0"
                  />
                  <span>Download APP</span>
                </Button>
                <Button
                  className={"w-10 h-10 rounded-[10px] hidden xl:flex"}
                  variant="secondary"
                >
                  <PersonIcon className="h-6 w-6 shrink-0" />
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <DesktopMegaMenu isShow={showMegaMenu} />
    </header>
  );
}

export default NavBar;

export const MobileMegaMenu = ({ isWhite = false }) => {
  return (
    <li className="xl:hidden">
      <Accordion
        type="single"
        className="flex flex-col !bg-transparent p-0 xl:hidden"
        collapsible
      >
        <AccordionItem value="parent-1" className="bg-transparent border-none ">
          <AccordionTrigger
            className="menuItem text-lg text-white [&[data-state=open]]:bg-main-600"
            iconClass="text-white w-5"
          >
            <div>
              <span>Others</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <Accordion
              type="single"
              className="flex flex-col !bg-transparent pl-3 xl:hidden"
              collapsible
            >
              {/* travel data  */}
              <AccordionItem
                value="item-1"
                className="bg-transparent border-none"
              >
                <AccordionTrigger
                  className="p-3 text-white text-lg font-normal flex items-center justify-between"
                  iconClass="text-white w-5"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-6 aspect-square flex items-center justify-center bg-main-600 rounded">
                      <TravelIcon className="shrink-0" />
                    </div>
                    <span>Travel Data</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-9">
                  <ul>
                    <li>
                      <Link
                        className="text-white text-lg font-normal p-3 flex"
                        to={commercialRoutes.home.path}
                      >
                        Pocket Wifi Details
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-white text-lg font-normal p-3 flex"
                        to={commercialRoutes.home.path}
                      >
                        Sim/eSim Details
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              {/* Country Coverage  */}

              <AccordionItem
                value="item-2"
                className="bg-transparent border-none"
              >
                <AccordionTrigger
                  className="p-3 text-white text-lg font-normal flex items-center justify-between"
                  iconClass="text-white w-5"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-6 aspect-square flex items-center justify-center bg-main-600 rounded">
                      <MapCoverageIcon className="shrink-0" />
                    </div>
                    <span>Country Coverage</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-9">
                  <ul>
                    <li>
                      <Link
                        className="text-white text-lg font-normal p-3 flex"
                        to={commercialRoutes.home.path}
                      >
                        Asia
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-white text-lg font-normal p-3 flex"
                        to={commercialRoutes.home.path}
                      >
                        Europe
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-white text-lg font-normal p-3 flex"
                        to={commercialRoutes.home.path}
                      >
                        America
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-white text-lg font-normal p-3 flex"
                        to={commercialRoutes.home.path}
                      >
                        Australia
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-white text-lg font-normal p-3 flex"
                        to={commercialRoutes.home.path}
                      >
                        Africa
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              {/* Pickup/Drop off Location  */}

              <AccordionItem
                value="item-3"
                className="bg-transparent border-none"
              >
                <AccordionTrigger
                  className="p-3 text-white text-lg font-normal flex items-center justify-between"
                  iconClass="text-white w-5"
                >
                  <div className="flex items-center gap-3 flex-1 whitespace-nowrap">
                    <div className="w-6 aspect-square flex items-center justify-center bg-main-600 rounded">
                      <MapPickupIcon className="shrink-0" />
                    </div>
                    <span>Pickup/Drop off Location</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-9">
                  <ul>
                    <li>
                      <Link
                        className="text-white text-lg font-normal p-3 flex"
                        to={commercialRoutes.home.path}
                      >
                        Pickup Location
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-white text-lg font-normal p-3 flex"
                        to={commercialRoutes.home.path}
                      >
                        Drop off Location
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              {/* How It Works  */}

              <AccordionItem
                value="item-4"
                className="bg-transparent border-none"
              >
                <AccordionTrigger
                  className="p-3 text-white text-lg font-normal flex items-center justify-between"
                  iconClass="text-white w-5"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-6 aspect-square flex items-center justify-center bg-main-600 rounded">
                      <CheckSlideIcon className="shrink-0" />
                    </div>
                    <span>How It Works</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-9">
                  <ul>
                    <li>
                      <Link
                        className="text-white text-lg font-normal p-3 flex"
                        to={commercialRoutes.home.path}
                      >
                        Rent Yoowifi Pocket WiFi
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-white text-lg font-normal p-3 flex"
                        to={commercialRoutes.home.path}
                      >
                        Simple Self-Return In less then a minute
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-white text-lg font-normal p-3 flex"
                        to={commercialRoutes.home.path}
                      >
                        Create New Trip or Top-up data
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              {/* Affiliate  */}

              <AccordionItem
                value="item-5"
                className="bg-transparent border-none"
              >
                <AccordionTrigger
                  className="p-3 text-white text-lg font-normal flex items-center justify-between"
                  iconClass="text-white w-5"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-6 aspect-square flex items-center justify-center bg-main-600 rounded">
                      <GroupAffiliateIcon className="shrink-0" />
                    </div>
                    <span>Affiliate</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-9">
                  <ul>
                    <li>
                      <Link
                        className="text-white text-lg font-normal p-3 flex"
                        to={commercialRoutes.home.path}
                      >
                        Join the Yoowifi Affiliate Yoo Wander Program
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-white text-lg font-normal p-3 flex"
                        to={commercialRoutes.home.path}
                      >
                        Contact Us Now!
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              {/* How To  */}

              <AccordionItem
                value="item-6"
                className="bg-transparent border-none"
              >
                <AccordionTrigger
                  className="p-3 text-white text-lg font-normal flex items-center justify-between"
                  iconClass="text-white w-5"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-6 aspect-square flex items-center justify-center bg-main-600 rounded">
                      <InfoIcon className="shrink-0" />
                    </div>
                    <span>How To</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-9">
                  <ul>
                    <li>
                      <Link
                        className="text-white text-lg font-normal p-3 flex"
                        to={commercialRoutes.home.path}
                      >
                        Set an eSIM
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-white text-lg font-normal p-3 flex"
                        to={commercialRoutes.home.path}
                      >
                        How to connect Pocketwifi?
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </li>
  );
};

export const DesktopMegaMenu = ({ isShow = false }) => {
  return (
    <div
      className={cn(
        "bg-neutral-black text-white hidden xl:block overflow-hidden duration-300",
        isShow ? "max-h-[280px]" : "max-h-0"
      )}
    >
      <div className=" px-4 py-8">
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
                  <Link
                    to={commercialRoutes.home.path}
                    className="hover:text-main-500 duration-300"
                  >
                    Pocket Wifi Details
                  </Link>
                  <Link
                    to={commercialRoutes.home.path}
                    className="hover:text-main-500 duration-300"
                  >
                    Sim/eSim Details
                  </Link>
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
                  <Link
                    to={commercialRoutes.home.path}
                    className="hover:text-main-500 duration-300"
                  >
                    Asia
                  </Link>
                  <Link
                    to={commercialRoutes.home.path}
                    className="hover:text-main-500 duration-300"
                  >
                    Europe
                  </Link>
                  <Link
                    to={commercialRoutes.home.path}
                    className="hover:text-main-500 duration-300"
                  >
                    America
                  </Link>
                  <Link
                    to={commercialRoutes.home.path}
                    className="hover:text-main-500 duration-300"
                  >
                    Australia
                  </Link>
                  <Link
                    to={commercialRoutes.home.path}
                    className="hover:text-main-500 duration-300"
                  >
                    Africa
                  </Link>
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
                  <Link
                    to={commercialRoutes.home.path}
                    className="hover:text-main-500 duration-300"
                  >
                    Pickup Location
                  </Link>
                  <Link
                    to={commercialRoutes.home.path}
                    className="hover:text-main-500 duration-300"
                  >
                    Drop off Location
                  </Link>
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
                  <Link
                    to={commercialRoutes.home.path}
                    className="hover:text-main-500 duration-300"
                  >
                    Rent Yoowifi Pocket WiFi
                  </Link>
                  <Link
                    to={commercialRoutes.home.path}
                    className="hover:text-main-500 duration-300"
                  >
                    Simple Self-Return In less then a minute
                  </Link>
                  <Link
                    to={commercialRoutes.home.path}
                    className="hover:text-main-500 duration-300"
                  >
                    Create New Trip or Top-up data
                  </Link>
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
                  <Link
                    to={commercialRoutes.home.path}
                    className="hover:text-main-500 duration-300"
                  >
                    Join the Yoowifi Affiliate Yoo Wander Program
                  </Link>
                  <Link
                    to={commercialRoutes.home.path}
                    className="hover:text-main-500 duration-300"
                  >
                    Contact Us Now!
                  </Link>
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
                  <Link
                    to={commercialRoutes.home.path}
                    className="hover:text-main-500 duration-300"
                  >
                    Set an eSIM
                  </Link>
                  <Link
                    to={commercialRoutes.home.path}
                    className="hover:text-main-500 duration-300"
                  >
                    How to connect Pocketwifi?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
