import { corporateRoutes as routes } from "@/services";
import CorporateLayout from "../components/layout/CorporateLayout";

const { home } = routes || {};
export const corpRoutes = [
  {
    path: home.path,
    element: <CorporateLayout />,
    children: [
      {
        path: home.path,
        element: home.element,
      },
    ],
  },
];
