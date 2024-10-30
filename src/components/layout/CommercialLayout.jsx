import React from "react";
import { Outlet } from "react-router-dom";

function CommercialLayout() {
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default CommercialLayout;
