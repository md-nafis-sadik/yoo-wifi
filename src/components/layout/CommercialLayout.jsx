import React from "react";
import { Outlet } from "react-router-dom";

function CommercialLayout() {
  return (
    <div>
      
      <Outlet />
    </div>
  );
}

export default CommercialLayout;
