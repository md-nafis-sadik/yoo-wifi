import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { commercialRoutes, corporateRoutes } from "@/services";
import DevFAB from "../shared/others/DevFab";

function CorporateLayout() {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <main>
      {/* Removable */}
      <DevFAB />
      {/* Removable */}
      <Outlet />
    </main>
  );
}

export default CorporateLayout;
