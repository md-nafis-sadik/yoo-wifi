import { Outlet, useNavigate } from "react-router-dom";
import DevFAB from "../shared/others/DevFAB";
import DownloadYoowifi from "../shared/others/DownloadYoowifi";
import Footer from "../shared/navigation/Footer";

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
      <DownloadYoowifi />
      <Footer />
    </main>
  );
}

export default CorporateLayout;
