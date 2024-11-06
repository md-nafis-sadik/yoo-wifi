import { images } from "@/services";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contact: [
    {
      _id: 1,
      name: "WhatsApp",
      text: "Whatsapp Us",
      value: "(+65) 6100 9998",
      image: images.whatsapp,
    },
    {
      _id: 2,
      name: "Email",
      text: "Email Address",
      value: "business@yoowifi.com",
      image: images.email,
    },
  ],
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
});

export default contactSlice.reducer;
