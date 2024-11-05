import { Outlet, useNavigate } from "react-router-dom";

function CorporateLayout() {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default CorporateLayout;
