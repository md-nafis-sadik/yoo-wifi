import { Outlet, useNavigate } from "react-router-dom";
import DevFAB from "../shared/others/DevFAB";
import useScrollToTop from "@/hooks/useScrollToTop";

function CorporateLayout() {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  useScrollToTop();

  return (
    <main>
      {/* Removable */}
      <DevFAB />
      {/* Removable */}
      <Outlet />
    </main>
  );
}

export default CorporateLayout;
