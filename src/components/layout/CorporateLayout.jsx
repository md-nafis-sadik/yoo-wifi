import React from "react";
import { Outlet } from "react-router-dom";

function CorporateLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default CorporateLayout;
