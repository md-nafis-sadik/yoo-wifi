import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../shared/navigation/NavBar";
import DevFAB from "../shared/others/DevFab";

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
    </main>
  );
}

export default CorporateLayout;
