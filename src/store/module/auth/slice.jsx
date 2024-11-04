import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: {},
  wifiDevices: [
    {
      id: 1,
      name: "Wifi Device",
      deviceId: "55775254747523",
    },
    {
      id: 2,
      name: "Wifi Device",
      deviceId: "55775254222892",
    },
  ],
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    saveAuthData: (state, action) => {
      state.auth = { ...state.auth, ...action?.payload };
      localStorage.setItem("netrosystems_admin", JSON.stringify(state.auth));
    },
    logout: (state) => {
      state.auth = {};
      localStorage.removeItem("netrosystems_admin");
    },
  },
});

export const { saveAuthData, logout } = authSlice.actions;
export default authSlice.reducer;
