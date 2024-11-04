import useSetLocalData from "@/hooks/useSetLocalData";
import { commercialRoutes, corporateRoutes } from "@/services";
import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import Footer from "../shared/navigation/Footer";
import NavBar from "../shared/navigation/NavBar";
import DownloadYoowifi from "../shared/others/DownloadYoowifi";

function CommercialLayout() {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  useSetLocalData("commercialLayout");
  return (
    <main>
      {/* Removable */}
      <div className="flex_center flex-col md:flex-row gap-4 py-4">
        <Button
          type="button"
          onClick={() => handleNavigate(commercialRoutes.pocketWifi.path)}
        >
          Navigate to pocket wifi
        </Button>
        <Button
          type="button"
          onClick={() => handleNavigate(commercialRoutes.home.path)}
        >
          Navigate to commercial
        </Button>
        <Button
          type="button"
          onClick={() => handleNavigate(corporateRoutes.home.path)}
        >
          Navigate to corporate
        </Button>
        <Button
          type="button"
          onClick={() => handleNavigate("/shared-elements")}
        >
          Navigate to s-components
        </Button>
      </div>
      {/* Removable */}
      <NavBar />
      <Outlet />
      <DownloadYoowifi />
      <Footer />
    </main>
  );
}

export default CommercialLayout;
