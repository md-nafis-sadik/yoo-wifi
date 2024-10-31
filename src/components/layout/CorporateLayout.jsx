import React from "react";
import { Outlet } from "react-router-dom";

function CorporateLayout() {
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default CorporateLayout;
