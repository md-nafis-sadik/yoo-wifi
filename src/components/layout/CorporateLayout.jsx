import { Outlet, useNavigate } from "react-router-dom";
import DevFAB from "../shared/others/DevFAB";

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
