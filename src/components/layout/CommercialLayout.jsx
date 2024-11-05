import useSetLocalData from "@/hooks/useSetLocalData";
import { Outlet, useNavigate } from "react-router-dom";
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
      <NavBar />
      <Outlet />
      <DownloadYoowifi />
      <Footer />
    </main>
  );
}

export default CommercialLayout;
