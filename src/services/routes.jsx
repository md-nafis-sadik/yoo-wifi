import CommercialHome from "@/pages/commercial/home/Home";
import CorporateHome from "@/pages/corporate/Home";

const comercialRoutes = {
  home: {
    path: "/",
    name: "Home",
    activePath: "home",
    element: <CommercialHome />,
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

export { comercialRoutes, corporateRoutes };
