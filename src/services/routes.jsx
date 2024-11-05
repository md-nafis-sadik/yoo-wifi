import CommercialLayout from "@/components/layout/CommercialLayout";
import PocketWifiLayout from "@/components/layout/PocketWifiLayout";
import RouterLayout from "@/components/layout/RouterLayout";
import AboutUs from "@/pages/commercial/AboutUs";
import Home from "@/pages/commercial/Home";
import PocketWifiHome from "@/pages/commercial/pocketWifi/Home";
import PocketWifiCartService from "@/pages/commercial/pocketWifi/PocketWifiCartService";
import PocketWifiOrderSummery from "@/pages/commercial/pocketWifi/PocketWifiOrderSummery";
import PocketWifiPlan from "@/pages/commercial/pocketWifi/PocketWifiPlan";
import PocketWifiPlanSummery from "@/pages/commercial/pocketWifi/PocketWifiPlanSummery";
import PocketWifiRegion from "@/pages/commercial/pocketWifi/PocketWifiRegion";
import PocketWifiSelfPickup from "@/pages/commercial/pocketWifi/PocketWifiSelfPickup";
import PocketWifiShippingOption from "@/pages/commercial/pocketWifi/PocketWifiShippingOption";
import RouterHome from "@/pages/commercial/router/Home";
import RouterCartService from "@/pages/commercial/router/RouterCartService";
import RouterOrderSummery from "@/pages/commercial/router/RouterOrderSummery";
import RouterPlan from "@/pages/commercial/router/RouterPlan";
import RouterPlanSummery from "@/pages/commercial/router/RouterPlanSummery";
import RouterRegion from "@/pages/commercial/router/RouterRegion";
import RouterSelfPickup from "@/pages/commercial/router/RouterSelfPickup";
import RouterShippingOption from "@/pages/commercial/router/RouterShippingOption";
import CorporateHome from "@/pages/corporate/Home";

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
  pocketWifiHome: {
    path: "/product/pocket-wifi",
    name: "Pocket Wifi",
    activePath: "pocketWifi",
    element: <PocketWifiHome />,
  },
  routerHome: {
    path: "/product/router",
    name: "Router",
    activePath: "router",
    element: <RouterHome />,
  },

  // pocket wifi
  pocketWifiLayout: {
    path: "/pocket-wifi",
    name: "Pocket Wifi",
    activePath: "pocketWifi",
    element: <PocketWifiLayout />,
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

  // router
  routerLayout: {
    path: "/router",
    name: "Router",
    activePath: "router",
    element: <RouterLayout />,
  },

  routerRegion: {
    path: "/router/region",
    name: "Router Region",
    activePath: "router",
    element: <RouterRegion />,
  },
  routerPlan: {
    path: "/router/router-plan",
    name: "Router Plan",
    activePath: "router",
    element: <RouterPlan />,
  },
  routerCartService: {
    path: "/router/cart-service",
    name: "Router Cart Service",
    activePath: "router",
    element: <RouterCartService />,
  },
  routerPlanSummery: {
    path: "/router/router-plan-summery",
    name: "Router Plan Summery",
    activePath: "router",
    element: <RouterPlanSummery />,
  },
  routerShippingOption: {
    path: "/router/shipping-option",
    name: "Router Shipping Option",
    activePath: "router",
    element: <RouterShippingOption />,
  },
  routerSelfPickup: {
    path: "/router/shipping-option/self-pickup",
    name: "Router Self Pickup",
    activePath: "router",
    element: <RouterSelfPickup />,
  },
  routerOrderSummery: {
    path: "/router/order-summery",
    name: "Router Order Summery",
    activePath: "router",
    element: <RouterOrderSummery />,
  },

  // about us
  aboutUs: {
    path: "/about-us",
    name: "About Us",
    activePath: "aboutUs",
    element: <AboutUs />,
  },
};

const corporateRoutes = {
  home: {
    path: "/corporate",
    name: "Home",
    activePath: "home",
    element: <CorporateHome />,
  },
};

export { commercialRoutes, corporateRoutes };
