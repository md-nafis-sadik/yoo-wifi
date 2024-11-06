import { FacebookIcon, images, InstagramIcon, LinkedInIcon, XIcon, YoutubeIcon } from "@/services";
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
  socialLinks: [
    {
      _id: 1,
      name: "Facebook",
      link: "#",
      icon: () => <FacebookIcon className="w-6 h-6 lg:w-8 lg:h-8" />
    },
    {
      _id: 2,
      name: "Youtube",
      link: "#",
      icon: () => <YoutubeIcon className="w-6 h-6 lg:w-8 lg:h-8" />
    },
    {
      _id: 3,
      name: "LinkedIn",
      link: "#",
      icon: () => <LinkedInIcon className="w-6 h-6 lg:w-8 lg:h-8" />
    },
    {
      _id: 4,
      name: "Instagram",
      link: "#",
      icon: () => <InstagramIcon className="w-6 h-6 lg:w-8 lg:h-8" />
    },
    {
      _id: 5,
      name: "X",
      link: "#",
      icon: () => <XIcon className="w-6 h-6 lg:w-8 lg:h-8" />
    },
  ]
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
});

export default contactSlice.reducer;
