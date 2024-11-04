import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activePath: "",
  showSidebar: false,
  submenuOpen: {},
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
};

const sharedSlice = createSlice({
  name: "shared",
  initialState,
  reducers: {
    setActivePath: (state, action) => {
      state.activePath = action.payload;
    },
    setShowSidebar: (state, action) => {
      state.showSidebar = action.payload;
    },
    setSubmenuOpen: (state, action) => {
      const menu = action?.payload;
      Object.keys(state.submenuOpen).forEach((key) => {
        if (state.submenuOpen[key] !== state.submenuOpen[menu]) {
          state.submenuOpen[key] = false;
        }
      });
      state.submenuOpen[menu] = !state.submenuOpen[menu];
    },
  },
});

export const { setActivePath, setSubmenuOpen, setShowSidebar } =
  sharedSlice.actions;
export default sharedSlice.reducer;
