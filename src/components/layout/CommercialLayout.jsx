import useModal from "@/hooks/useModal";
import useScrollToTop from "@/hooks/useScrollToTop";
import useSetLocalData from "@/hooks/useSetLocalData";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../shared/navigation/Footer";
import NavBar from "../shared/navigation/NavBar";
import NavBarSecondary from "../shared/navigation/NavBarSecondary";
import DownloadYoowifi from "../shared/others/DownloadYoowifi";
import AppDownloadDialog from "../shared/navigation/AppDownloadDialog";

function CommercialLayout() {
  useSetLocalData("commercialLayout");
  useScrollToTop();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { authModal, loginModal } = useModal();

  return (
    <main>
      {isHome ? <NavBar /> : <NavBarSecondary />}

      <Outlet />
      <DownloadYoowifi />
      <Footer />
      {authModal}
      {loginModal}

      <AppDownloadDialog />
    </main>
  );
}

export default CommercialLayout;
