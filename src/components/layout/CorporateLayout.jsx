import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../shared/navigation/NavBar";

function CorporateLayout() {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <main>
      <NavBar />
      <Outlet />
    </main>
  );
}

export default CorporateLayout;
