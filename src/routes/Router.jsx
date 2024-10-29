import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import { comRoutes } from "./comRoutes";
import { corpRoutes } from "./corpRoutes";
export const routes = createBrowserRouter([
  ...comRoutes,
  ...corpRoutes,
  {
    path: "*",
    element: <NotFound />,
  },
]);
