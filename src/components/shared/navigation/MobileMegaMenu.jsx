import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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

function MobileMegaMenu({ setIsShowMenu = () => {} }) {
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
                        to={commercialRoutes.pocketWifiDetails.path}
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
                        to={`${commercialRoutes.howItWorks.path}#self-return`}
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
                        to={`${commercialRoutes.affiliate.path}/#join-affiliate`}
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
                        to={`${commercialRoutes.affiliate.path}/#lets-talk`}
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
}

export default MobileMegaMenu;
