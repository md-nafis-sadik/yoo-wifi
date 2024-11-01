import { commercialRoutes as routes } from "@/services";
import CommercialLayout from "../components/layout/CommercialLayout";

const { home } = routes || {};

export const comRoutes = [
  {
    path: home.path,
    element: <CommercialLayout />,
    children: [
      {
        path: home.path,
        element: home.element,
      },
    ],
  },
];
