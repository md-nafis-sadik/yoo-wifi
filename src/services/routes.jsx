import CommercialLayout from "@/components/layout/CommercialLayout";
import PocketWifiLayout from "@/components/layout/PocketWifiLayout";
import AboutUs from "@/pages/commercial/AboutUs";
import Contact from "@/pages/commercial/Contact";
import Home from "@/pages/commercial/Home";
import PocketWifi from "@/pages/commercial/pocketWifi/Home";
import PocketWifiCartService from "@/pages/commercial/pocketWifi/PocketWifiCartService";
import PocketWifiOrderSummery from "@/pages/commercial/pocketWifi/PocketWifiOrderSummery";
import PocketWifiPlan from "@/pages/commercial/pocketWifi/PocketWifiPlan";
import PocketWifiPlanSummery from "@/pages/commercial/pocketWifi/PocketWifiPlanSummery";
import PocketWifiRegion from "@/pages/commercial/pocketWifi/PocketWifiRegion";
import PocketWifiSelfPickup from "@/pages/commercial/pocketWifi/PocketWifiSelfPickup";
import PocketWifiShippingOption from "@/pages/commercial/pocketWifi/PocketWifiShippingOption";
import Commercial from "@/pages/corporate/Commercial";
import CorporateHome from "@/pages/corporate/Home";
import Hotel from "@/pages/corporate/Hotel";
import Iot from "@/pages/corporate/Iot";
import MaritimeInternet from "@/pages/corporate/MaritimeInternet";
import Office from "@/pages/corporate/Office";
import TravelAgency from "@/pages/corporate/TravelAgency";

const commercialRoutes = {
  commercialLayout: {
    path: "/",
    name: "Home",
    activePath: "home",
    element: <CommercialLayout />,
  },
  home: {
    path: "/",
    name: "Home",
    activePath: "home",
    element: <Home />,
  },

  // pocket wifi
  pocketWifiLayout: {
    path: "/pocket-wifi",
    name: "Pocket Wifi",
    activePath: "pocketWifi",
    element: <PocketWifiLayout />,
  },
  pocketWifi: {
    path: "/product/pocket-wifi",
    name: "Pocket Wifi",
    activePath: "pocketWifi",
    element: <PocketWifi />,
  },
  pocketWifiRegion: {
    path: "/pocket-wifi/region",
    name: "Pocket Wifi",
    activePath: "pocketWifi",
    element: <PocketWifiRegion />,
  },
  pocketWifiPlan: {
    path: "/pocket-wifi/wifi-plan",
    name: "Pocket Wifi",
    activePath: "pocketWifi",
    element: <PocketWifiPlan />,
  },
  pocketWifiCartService: {
    path: "/pocket-wifi/cart-service",
    name: "Pocket Wifi",
    activePath: "pocketWifi",
    element: <PocketWifiCartService />,
  },
  pocketWifiPlanSummery: {
    path: "/pocket-wifi/wifi-plan-summery",
    name: "Pocket Wifi",
    activePath: "pocketWifi",
    element: <PocketWifiPlanSummery />,
  },
  pocketWifiShippingOption: {
    path: "/pocket-wifi/shipping-option",
    name: "Pocket Wifi",
    activePath: "pocketWifi",
    element: <PocketWifiShippingOption />,
  },
  pocketWifiSelfPickup: {
    path: "/pocket-wifi/shipping-option/self-pickup",
    name: "Pocket Wifi",
    activePath: "pocketWifi",
    element: <PocketWifiSelfPickup />,
  },
  pocketWifiOrderSummery: {
    path: "/pocket-wifi/order-summery",
    name: "Pocket Wifi",
    activePath: "pocketWifi",
    element: <PocketWifiOrderSummery />,
  },

  // about us
  aboutUs: {
    path: "/about-us",
    name: "About Us",
    activePath: "aboutUs",
    element: <AboutUs />,
  },
  contact: {
    path: "/contact",
    name: "Contact Us",
    activePath: "contact",
    element: <Contact />,
  },
};

const corporateRoutes = {
  home: {
    path: "/corporate",
    name: "Home",
    activePath: "home",
    element: <CorporateHome />,
  },
  iot: {
    path: "iot",
    name: "IOT",
    activePath: "iot",
    element: <Iot />,
  },
  hotel: {
    path: "hotel",
    name: "Hotel",
    activePath: "hotel",
    element: <Hotel />,
  },
  travelAgency: {
    path: "travel-agency",
    name: "Travel Agency",
    activePath: "travelAgency",
    element: <TravelAgency />,
  },
  maritimeInternet: {
    path: "maritime-internet",
    name: "MARITIME INTERNET",
    activePath: "maritimeInternet",
    element: <MaritimeInternet />,
  },
  office: {
    path: "office",
    name: "Office",
    activePath: "office",
    element: <Office />,
  },
  commercial: {
    path: "commercial",
    name: "Commercial",
    activePath: "commercial",
    element: <Commercial />,
  },
};

export { commercialRoutes, corporateRoutes };
