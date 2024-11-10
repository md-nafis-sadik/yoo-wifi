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
  commercialRoutes,
  LogoIcon,
  MapCoverageIcon,
  PersonIcon,
  SearchIcon,
  TravelIcon,
} from "@/services";
import { MenuIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { commercialRoutes, LogoIcon } from "@/services";

function NavBar() {
  const { isScrolled, isWhite, isRedBorder } = useGteNavbarStatus();
  const isActive = true;

  return (
    <header
      className={cn(
        "fixed top-0 px-4 py-2 sm:py-4 left-0 w-full z-[999] duration-300",
        isScrolled ? "bg-white" : ""
      )}
    >
      <div className="w-full max-w-[1392px] mx-auto">
        <nav
          className={cn(
            "w-full duration-300 flex items-center lg:gap-10 2xl:gap-15 justify-between",
            isWhite ? "text-white" : "text-white xl:text-black-700"
          )}
        >
          <div className="flex w-full xl:w-auto items-center justify-between">
            <Link to={commercialRoutes.home.path}>
              <LogoIcon color={isWhite ? "#fff" : "#E41F26"} />
            </Link>
            <button
              type="butotn"
              className="outline-none border-none lg:hidden"
            >
              <MenuIcon />
            </button>
          </div>
          <div className="flex-1 hidden xl:flex flex-col xl:flex-row xl:items-center xl:justify-between text-lg xl:text-sm font-semibold fixed xl:relative top-0 left-0 w-full bg-black h-screen xl:bg-transparent xl:h-auto p-4 xl:p-0 overflow-auto">
            <ul className="flex flex-col xl:flex-row xl:items-center 2xl:gap-3">
              <li>
                <Link
                  className={cn(
                    "menuItem",
                    isActive && isRedBorder
                      ? "after:bg-main-600 after:scale-x-100"
                      : "after:bg-white after:scale-x-100",
                    isRedBorder
                      ? "hover:after:bg-main-600"
                      : "hover:after:bg-white"
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
                    isRedBorder
                      ? "hover:after:bg-main-600"
                      : "hover:after:bg-white"
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
                    isRedBorder
                      ? "hover:after:bg-main-600"
                      : "hover:after:bg-white"
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
                    isRedBorder
                      ? "hover:after:bg-main-600"
                      : "hover:after:bg-white"
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
                    isRedBorder
                      ? "hover:after:bg-main-600"
                      : "hover:after:bg-white"
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
                    isRedBorder
                      ? "hover:after:bg-main-600"
                      : "hover:after:bg-white"
                  )}
                  to={commercialRoutes.aboutUs.path}
                >
                  About Us
                </Link>
              </li>
              <li className="">
                <div className="flex items-center justify-between xl:justify-start cursor-pointer w-full max-w-[320px] p-3 rounded-lg xl:rounded-none hover:bg-main-600 xl:w-auto xl:max-w-none xl:p-0 xl:hover:text-inherit xl:hover:bg-transparent hover:text-white">
                  <span>Others</span>
                  <ArrowDownIcon
                    pathClass={
                      isWhite
                        ? "fill-white"
                        : "fill-white xl:fill-neutral-black"
                    }
                  />
                </div>
                <Accordion
                  type="single"
                  className="flex flex-col !bg-transparent max-w-[320px] pl-3 xl:hidden"
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
                            to="/"
                          >
                            Pocket Wifi Details
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="text-white text-lg font-normal p-3 flex"
                            to="/"
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
                            to="/"
                          >
                            Asia
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="text-white text-lg font-normal p-3 flex"
                            to="/"
                          >
                            Europe
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="text-white text-lg font-normal p-3 flex"
                            to="/"
                          >
                            America
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="text-white text-lg font-normal p-3 flex"
                            to="/"
                          >
                            Australia
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="text-white text-lg font-normal p-3 flex"
                            to="/"
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
                          <TravelIcon className="shrink-0" />
                        </div>
                        <span>Pickup/Drop off Location</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-9">
                      <ul>
                        <li>
                          <Link
                            className="text-white text-lg font-normal p-3 flex"
                            to="/"
                          >
                            Pickup Location
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="text-white text-lg font-normal p-3 flex"
                            to="/"
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
                          <TravelIcon className="shrink-0" />
                        </div>
                        <span>How It Works</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-9">
                      <ul>
                        <li>
                          <Link
                            className="text-white text-lg font-normal p-3 flex"
                            to="/"
                          >
                            Rent Yoowifi Pocket WiFi
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="text-white text-lg font-normal p-3 flex"
                            to="/"
                          >
                            Simple Self-Return In less then a minute
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="text-white text-lg font-normal p-3 flex"
                            to="/"
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
                          <TravelIcon className="shrink-0" />
                        </div>
                        <span>Affiliate</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-9">
                      <ul>
                        <li>
                          <Link
                            className="text-white text-lg font-normal p-3 flex"
                            to="/"
                          >
                            Join the Yoowifi Affiliate Yoo Wander Program
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="text-white text-lg font-normal p-3 flex"
                            to="/"
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
                          <TravelIcon className="shrink-0" />
                        </div>
                        <span>How To</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-9">
                      <ul>
                        <li>
                          <Link
                            className="text-white text-lg font-normal p-3 flex"
                            to="/"
                          >
                            Set an eSIM
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="text-white text-lg font-normal p-3 flex"
                            to="/"
                          >
                            How to connect Pocketwifi?
                          </Link>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </li>
            </ul>
            <Link
              className={cn(
                "p-3 xl:p-0",
                isRedBorder ? "text-main-600" : "text-secondary-500"
              )}
            >
              Corporate
            </Link>
            <div className="flex flex-col xl:flex-row xl:items-center gap-3 w-full xl:w-auto flex-1 xl:flex-none justify-end xl:justify-center">
              <label
                htmlFor="search"
                className="w-full hidden xl:block relative"
              >
                <input
                  type="text"
                  className="pl-10 px-3 py-2 border border-neutral-800 placeholder:text-black-600 bg-transparent rounded-lg"
                  placeholder="Search country"
                />
                <SearchIcon
                  className="absolute top-1/2 -translate-y-1/2 left-3"
                  color={isWhite ? "#757575" : "#FAFAFA"}
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
                className={
                  "px-6 md:py-3 rounded-[10px] w-full max-w-[320px] xl:w-auto"
                }
              >
                <CellphoneIcon className="w-5 h-5 shrink-0" />
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
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
