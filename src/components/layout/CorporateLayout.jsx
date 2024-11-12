import useScrollToTop from "@/hooks/useScrollToTop";
import { Outlet } from "react-router-dom";
import CorporateNavbar from "../shared/navigation/CorporateNavbar";
import Footer from "../shared/navigation/Footer";
import DevFAB from "../shared/others/DevFAB";
import DownloadYoowifi from "../shared/others/DownloadYoowifi";
import AppDownloadDialog from "../shared/navigation/AppDownloadDialog";

function CorporateLayout() {
  useScrollToTop();

  return (
    <main>
      <CorporateNavbar />
      <Outlet />
      <DownloadYoowifi />
      <Footer />

      <AppDownloadDialog />
    </main>
  );
}

export default CorporateLayout;
