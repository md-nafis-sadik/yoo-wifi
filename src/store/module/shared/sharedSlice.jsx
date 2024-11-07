import {
  commercialRoutes,
  PocketWifiIcon,
  RouterMiniIcon,
  SimMiniIcon,
} from "@/services";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activePath: "",
  packages: [{}],
  shippingOptions: [
    {
      shippingId: "001",
      title: "Self Pickup",
      subtitle: "Choose your location",
      description: "Device Collection: 5 days before travel",
      price: "Free",
    },
    {
      shippingId: "002",
      title: "Domestic",
      subtitle: "",
      description:
        "Within 5 business days before trip for Dec with return mailer bag. For advance orders, delivery will be within 3 days before trip",
      price: "SGD 0",
    },
    {
      shippingId: "003",
      title: "Domestic Express",
      subtitle: "",
      description:
        "Within 2 business days for orders before 2pm with return mailer bag",
      price: "SGD 10",
    },
    {
      shippingId: "004",
      title: "Domestic Super Express",
      subtitle: "",
      description: "Same business day before 2pm with return mailer bag",
      price: "SGD 20",
    },
  ],
  products: [
    {
      name: "Pocket Wifi",
      path: commercialRoutes.pocketWifiHome.path,
      icon: ({ pocketWifiColor = "", routerColor = "", simColor = "" }) => {
        return pocketWifiColor ? (
          <PocketWifiIcon color={pocketWifiColor} />
        ) : (
          <PocketWifiIcon />
        );
      },
    },
    {
      name: "Router",
      path: commercialRoutes.routerHome.path,
      icon: ({ pocketWifiColor = "", routerColor = "", simColor = "" }) => {
        return routerColor ? (
          <RouterMiniIcon color={routerColor} />
        ) : (
          <RouterMiniIcon />
        );
      },
    },
    {
      name: "SIM/eSIM",
      path: commercialRoutes.simHome.path,
      icon: ({ pocketWifiColor = "", routerColor = "", simColor = "" }) => {
        return simColor ? <SimMiniIcon color={simColor} /> : <SimMiniIcon />;
      },
    },
  ],
};

const sharedSlice = createSlice({
  name: "shared",
  initialState,
  reducers: {
    setActivePath: (state, action) => {
      state.activePath = action.payload;
    },
  },
});

export const { setActivePath } = sharedSlice.actions;
export default sharedSlice.reducer;
