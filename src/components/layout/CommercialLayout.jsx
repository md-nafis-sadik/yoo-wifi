import useSetLocalData from "@/hooks/useSetLocalData";
import { Outlet } from "react-router-dom";
import Footer from "../shared/navigation/Footer";
import NavBar from "../shared/navigation/NavBar";
import DevFAB from "../shared/others/DevFAB";
import DownloadYoowifi from "../shared/others/DownloadYoowifi";
import useScrollToTop from "@/hooks/useScrollToTop";

function CommercialLayout() {
  useSetLocalData("commercialLayout");
  useScrollToTop();

  return (
    <main>
      {/* Removable */}
      <DevFAB />
      {/* Removable */}
      <NavBar />
      <Outlet />
      <DownloadYoowifi />
      <Footer />
    </main>
  );
}

export default CommercialLayout;
