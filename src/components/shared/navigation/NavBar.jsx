import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import useActiveMenuItem from "@/hooks/useActiveMenuItem";
import useGteNavbarStatus from "@/hooks/useGteNavbarStatus";
import useModal from "@/hooks/useModal";
import { cn } from "@/lib/utils";
import {
  ArrowDownIcon,
  CellphoneIcon,
  CheckSlideIcon,
  CloseIcon,
  commercialRoutes,
  corporateRoutes,
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
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  const { isScrolled, isWhite, isRedBorder, isHome, isBlack, isBannerRoutes } =
    useGteNavbarStatus();
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showSearchbar, setShowSearchbar] = useState(false);
  const { setIsAuthDialogOpen, setLoginRequiredDialogOpen } = useModal();

  const commercialMenuItems = [
    {
      name: "Home",
      path: commercialRoutes.home.path,
      activePath: commercialRoutes.home.activePath,
    },
    {
      name: "Pocket WIFI",
      path: commercialRoutes.pocketWifiHome.path,
      activePath: commercialRoutes.pocketWifiHome.activePath,
    },
    {
      name: "Router",
      path: commercialRoutes.routerHome.path,
      activePath: commercialRoutes.routerHome.activePath,
    },
    {
      name: "SIM/eSIM",
      path: commercialRoutes.simHome.path,
      activePath: commercialRoutes.simHome.activePath,
    },
    {
      name: "Contact Us",
      path: commercialRoutes.contact.path,
      activePath: commercialRoutes.contact.activePath,
    },
    {
      name: "About Us",
      path: commercialRoutes.aboutUs.path,
      activePath: commercialRoutes.aboutUs.activePath,
    },
  ];

  const menuItems = useActiveMenuItem(commercialMenuItems);

  const handleModalOpen = (name = "auth", value) => {
    if (name == "auth") {
      setIsAuthDialogOpen(value);
    } else {
      setLoginRequiredDialogOpen(value);
    }
    setIsShowMenu(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-40 duration-300",
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
                    isRedBorder || isScrolled
                      ? "border-neutral-800 placeholder:text-black-600 "
                      : "border-neutral-50 placeholder:text-black-100 ",
                    isWhite ? "text-black-900" : ""
                  )}
                  placeholder="Search country"
                />
                <SearchIcon
                  className="absolute h-5 w-5 top-1/2 -translate-y-1/2 left-3"
                  color={
                    isRedBorder ? "#757575" : isScrolled ? "#757575" : "#FAFAFA"
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
                        : isScrolled
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
                        : isScrolled
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
              <ul className="flex flex-col xl:flex-row xl:items-center gap-y-1 gap-x-2">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      className={cn(
                        "menuItem hover:after:bg-main-600",
                        item.isActive
                          ? "after:scale-x-100 font-semibold after:bg-main-600 bg-main-600 xl:bg-transparent"
                          : ""
                      )}
                      onClick={() => setIsShowMenu(false)}
                      to={item.path}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}

                {/* mega menu  */}
                <li className="hidden xl:block">
                  <div
                    className="flex items-center justify-between xl:justify-start cursor-pointer w-full max-w-[320px] p-3 rounded-lg xl:rounded-none hover:bg-main-600 xl:w-auto xl:max-w-none xl:p-0 xl:hover:text-inherit xl:hover:bg-transparent hover:text-white"
                    onClick={() => setShowMegaMenu(!showMegaMenu)}
                  >
                    <span>Others</span>
                    <ArrowDownIcon
                      className={cn(
                        showMegaMenu ? "-rotate-180" : "-rotate-0",
                        "transform transition_common duration-150"
                      )}
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
                <MobileMegaMenu setIsShowMenu={setIsShowMenu} />
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
                to={corporateRoutes.home.path}
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
                      isRedBorder && !showMegaMenu
                        ? "border-neutral-800 placeholder:text-black-600 text-black-900"
                        : isScrolled ||
                          (!isHome && !isBannerRoutes && !showMegaMenu)
                        ? "border-neutral-800 placeholder:text-black-600 text-black-900"
                        : "border-neutral-50 placeholder:text-black-100 text-white"
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
                  onClick={() => handleModalOpen("auth", true)}
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
                  onClick={() => handleModalOpen("login", true)}
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
                  className={
                    "min-w-10 min-h-10 p-0 rounded-[10px] hidden xl:flex"
                  }
                  variant="secondary"
                  onClick={() => handleModalOpen("auth", true)}
                >
                  <PersonIcon className="!h-6 !w-6 shrink-0" />
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

export const MobileMegaMenu = ({ setIsShowMenu = () => {} }) => {
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
                <AccordionContent className="pl-9 pt-0">
                  <ul>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          ` text-lg font-normal p-3 flex ${
                            isActive ? "text-main-600" : "text-white"
                          }`
                        }
                        to={commercialRoutes.pocketWifiHome.path}
                        onClick={() => setIsShowMenu(false)}
                      >
                        Pocket Wifi Details
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          ` text-lg font-normal p-3 flex ${
                            isActive ? "text-main-600" : "text-white"
                          }`
                        }
                        to={commercialRoutes.simHome.path}
                        onClick={() => setIsShowMenu(false)}
                      >
                        Sim/eSim Details
                      </NavLink>
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
                <AccordionContent className="pl-9 pt-0">
                  <ul>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          ` text-lg font-normal p-3 flex ${
                            isActive ? "text-main-600" : "text-white"
                          }`
                        }
                        to={`${commercialRoutes.countryCoverage.path}?region=asia`}
                        onClick={() => setIsShowMenu(false)}
                      >
                        Asia
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          ` text-lg font-normal p-3 flex ${
                            isActive ? "text-main-600" : "text-white"
                          }`
                        }
                        to={`${commercialRoutes.countryCoverage.path}?region=europe`}
                        onClick={() => setIsShowMenu(false)}
                      >
                        Europe
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          ` text-lg font-normal p-3 flex ${
                            isActive ? "text-main-600" : "text-white"
                          }`
                        }
                        to={`${commercialRoutes.countryCoverage.path}?region=america`}
                        onClick={() => setIsShowMenu(false)}
                      >
                        America
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          ` text-lg font-normal p-3 flex ${
                            isActive ? "text-main-600" : "text-white"
                          }`
                        }
                        to={`${commercialRoutes.countryCoverage.path}?region=australia`}
                        onClick={() => setIsShowMenu(false)}
                      >
                        Australia
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          ` text-lg font-normal p-3 flex ${
                            isActive ? "text-main-600" : "text-white"
                          }`
                        }
                        to={`${commercialRoutes.countryCoverage.path}?region=africa`}
                        onClick={() => setIsShowMenu(false)}
                      >
                        Africa
                      </NavLink>
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
                <AccordionContent className="pl-9 pt-0">
                  <ul>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          ` text-lg font-normal p-3 flex ${
                            isActive ? "text-main-600" : "text-white"
                          }`
                        }
                        to={commercialRoutes.pickDropLocation.path}
                        onClick={() => setIsShowMenu(false)}
                      >
                        Pickup Location
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          ` text-lg font-normal p-3 flex ${
                            isActive ? "text-main-600" : "text-white"
                          }`
                        }
                        to={commercialRoutes.pickDropLocation.path}
                        onClick={() => setIsShowMenu(false)}
                      >
                        Drop off Location
                      </NavLink>
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
                <AccordionContent className="pl-9 pt-0">
                  <ul>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          ` text-lg font-normal p-3 flex ${
                            isActive ? "text-main-600" : "text-white"
                          }`
                        }
                        to={`${commercialRoutes.howItWorks.path}#rent`}
                        onClick={() => setIsShowMenu(false)}
                      >
                        Rent Yoowifi Pocket WiFi
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          ` text-lg font-normal p-3 flex ${
                            isActive ? "text-main-600" : "text-white"
                          }`
                        }
                        to={`${commercialRoutes.howItWorks.path}#self-rent`}
                        onClick={() => setIsShowMenu(false)}
                      >
                        Simple Self-Return In less then a minute
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          ` text-lg font-normal p-3 flex ${
                            isActive ? "text-main-600" : "text-white"
                          }`
                        }
                        to={`${commercialRoutes.howItWorks.path}#topup`}
                        onClick={() => setIsShowMenu(false)}
                      >
                        Create New Trip or Top-up data
                      </NavLink>
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
                <AccordionContent className="pl-9 pt-0">
                  <ul>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          ` text-lg font-normal p-3 flex ${
                            isActive ? "text-main-600" : "text-white"
                          }`
                        }
                        to={commercialRoutes.affiliate.path}
                        onClick={() => setIsShowMenu(false)}
                      >
                        Join the Yoowifi Affiliate Yoo Wander Program
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          ` text-lg font-normal p-3 flex ${
                            isActive ? "text-main-600" : "text-white"
                          }`
                        }
                        to={`${commercialRoutes.affiliate.path}#contact-us`}
                        onClick={() => setIsShowMenu(false)}
                      >
                        Contact Us Now!
                      </NavLink>
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
                <AccordionContent className="pl-9 pt-0">
                  <ul>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          ` text-lg font-normal p-3 flex ${
                            isActive ? "text-main-600" : "text-white"
                          }`
                        }
                        to={commercialRoutes.howToSetupSim.path}
                        onClick={() => setIsShowMenu(false)}
                      >
                        Set an eSIM
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          ` text-lg font-normal p-3 flex ${
                            isActive ? "text-main-600" : "text-white"
                          }`
                        }
                        to={commercialRoutes.howToConnectPocketWifi.path}
                        onClick={() => setIsShowMenu(false)}
                      >
                        How to connect Pocketwifi?
                      </NavLink>
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
        "bg-neutral-black text-white hidden xl:block overflow-hidden duration-300 absolute w-full left-0",
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
                  <NavLink
                    className={({ isActive }) =>
                      ` hover:text-main-500 duration-300 ${
                        isActive ? "text-main-600" : "text-white"
                      }`
                    }
                    to={commercialRoutes.pocketWifiHome.path}
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
                    to={`${commercialRoutes.howItWorks.path}#rent`}
                    className={({ isActive }) =>
                      ` hover:text-main-500 duration-300 ${
                        isActive ? "text-main-600" : "text-white"
                      }`
                    }
                  >
                    Rent Yoowifi Pocket WiFi
                  </NavLink>
                  <NavLink
                    to={`${commercialRoutes.howItWorks.path}#self-rent`}
                    className={({ isActive }) =>
                      ` hover:text-main-500 duration-300 ${
                        isActive ? "text-main-600" : "text-white"
                      }`
                    }
                  >
                    Simple Self-Return In less then a minute
                  </NavLink>
                  <NavLink
                    to={`${commercialRoutes.howItWorks.path}#topup`}
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
                    to={commercialRoutes.affiliate.path}
                    className={({ isActive }) =>
                      ` hover:text-main-500 duration-300 ${
                        isActive ? "text-main-600" : "text-white"
                      }`
                    }
                  >
                    Join the Yoowifi Affiliate Yoo Wander Program
                  </NavLink>
                  <NavLink
                    to={`${commercialRoutes.affiliate.path}#contact-us`}
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
  );
};
