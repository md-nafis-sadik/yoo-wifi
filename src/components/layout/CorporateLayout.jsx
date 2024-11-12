import useScrollToTop from "@/hooks/useScrollToTop";
import { Outlet } from "react-router-dom";
import CorporateNavbar from "../shared/navigation/CorporateNavbar";
import Footer from "../shared/navigation/Footer";
import DevFAB from "../shared/others/DevFAB";
import DownloadYoowifi from "../shared/others/DownloadYoowifi";
import useModal from "@/hooks/useModal";

function CorporateLayout() {
  useScrollToTop();
  const { authModal, loginModal } = useModal();

  return (
    <main>
      <CorporateNavbar />
      <Outlet />
      <DownloadYoowifi />
      <Footer />
      {authModal}
      {loginModal}
    </main>
  );
}

export default CorporateLayout;
