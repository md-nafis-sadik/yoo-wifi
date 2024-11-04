import { commercialRoutes as routes } from "@/services";

const {
  aboutUs,
  commercialLayout,
  home,
  pocketWifiLayout,
  pocketWifi,
  pocketWifiRegion,
  pocketWifiPlan,
  pocketWifiCartService,
  pocketWifiPlanSummery,
  pocketWifiOrderSummery,
  pocketWifiSelfPickup,
  pocketWifiShippingOption,
} = routes || {};

export const comRoutes = [
  {
    path: commercialLayout.path,
    element: commercialLayout.element,
    children: [
      {
        path: home.path,
        element: home.element,
      },
      {
        path: pocketWifi.path,
        element: pocketWifi.element,
      },
      {
        path: aboutUs.path,
        element: aboutUs.element,
      },
    ],
  },
  {
    path: pocketWifiLayout.path,
    element: pocketWifiLayout.element,
    children: [
      {
        path: pocketWifiRegion.path,
        element: pocketWifiRegion.element,
      },
      {
        path: pocketWifiPlan.path,
        element: pocketWifiPlan.element,
      },
      {
        path: pocketWifiCartService.path,
        element: pocketWifiCartService.element,
      },
      {
        path: pocketWifiPlanSummery.path,
        element: pocketWifiPlanSummery.element,
      },
      {
        path: pocketWifiShippingOption.path,
        element: pocketWifiShippingOption.element,
      },
      {
        path: pocketWifiSelfPickup.path,
        element: pocketWifiSelfPickup.element,
      },
      {
        path: pocketWifiOrderSummery.path,
        element: pocketWifiOrderSummery.element,
      },
    ],
  },
];
