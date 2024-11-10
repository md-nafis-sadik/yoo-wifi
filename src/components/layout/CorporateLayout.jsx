import useScrollToTop from "@/hooks/useScrollToTop";
import { Outlet } from "react-router-dom";
import CorporateNavbar from "../shared/navigation/CorporateNavbar";
import Footer from "../shared/navigation/Footer";
import DevFAB from "../shared/others/DevFAB";
import DownloadYoowifi from "../shared/others/DownloadYoowifi";

function CorporateLayout() {
  useScrollToTop();

  return (
    <main>
      <CorporateNavbar />
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
