import { corporateRoutes as routes } from "@/services";
import CorporateLayout from "../components/layout/CorporateLayout";

const { home, iot, hotel, travelAgency, maritimeInternet, office, commercial } = routes || {};

export const corpRoutes = [
  {
    path: home.path,
    element: <CorporateLayout />,
    children: [
      {
        path: home.path,
        element: home.element,
      },
      {
        path: iot.path,
        element: iot.element,
      },
      {
        path: hotel.path,
        element: hotel.element,
      },
      {
        path: travelAgency.path,
        element: travelAgency.element,
      },
      {
        path: maritimeInternet.path,
        element: maritimeInternet.element,
      },
      {
        path: office.path,
        element: office.element,
      },
      {
        path: commercial.path,
        element: commercial.element,
      },
    ],
  },
];
