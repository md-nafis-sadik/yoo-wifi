import Home from "@/pages/commercial/Home";
import CorporateHome from "@/pages/corporate/Home";

const commercialRoutes = {
  home: {
    path: "/",
    name: "Home",
    activePath: "home",
    element: <Home />,
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
