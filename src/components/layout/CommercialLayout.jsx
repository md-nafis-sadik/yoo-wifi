import useSetLocalData from "@/hooks/useSetLocalData";
import { Outlet } from "react-router-dom";
import Footer from "../shared/navigation/Footer";
import NavBar from "../shared/navigation/NavBar";
import DownloadYoowifi from "../shared/others/DownloadYoowifi";
import DevFAB from "../shared/others/DevFab";

function CommercialLayout() {
  useSetLocalData("commercialLayout");

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
