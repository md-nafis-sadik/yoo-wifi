import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { commercialRoutes, corporateRoutes } from "@/services";

function CommercialLayout() {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <main>
      {/* Removable */}
      <div className="flex_center flex-col md:flex-row gap-4 py-4">
        <Button
          type="button"
          onClick={() => handleNavigate(commercialRoutes.home.path)}
        >
          Navigate to commercial
        </Button>
        <Button
          type="button"
          onClick={() => handleNavigate(corporateRoutes.home.path)}
        >
          Navigate to corporate
        </Button>
        <Button
          type="button"
          onClick={() => handleNavigate("/shared-elements")}
        >
          Navigate to s-components
        </Button>
      </div>
      {/* Removable */}
      <Outlet />
    </main>
  );
}

export default CommercialLayout;
