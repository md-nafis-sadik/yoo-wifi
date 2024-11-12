import useSetLocalData from "@/hooks/useSetLocalData";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../shared/navigation/Footer";
import NavBar from "../shared/navigation/NavBar";
import DevFAB from "../shared/others/DevFAB";
import DownloadYoowifi from "../shared/others/DownloadYoowifi";
import useScrollToTop from "@/hooks/useScrollToTop";
import NavBarSecondary from "../shared/navigation/NavBarSecondary";
import AppDownloadDialog from "../shared/navigation/AppDownloadDialog";

function CommercialLayout() {
  useSetLocalData("commercialLayout");
  useScrollToTop();
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <main>
      {isHome ? <NavBar /> : <NavBarSecondary />}

      <Outlet />
      <DownloadYoowifi />
      <Footer />

      <AppDownloadDialog />
    </main>
  );
}

export default CommercialLayout;
