import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: {
    name: "Pocket Wifi",
    description:
      "The Yoowifi Pocket Wifi device offers fast and reliable internet access wherever you go. Perfect for travelers and remote workers, it allows you to connect up to 8 devices simultaneously. Yoowifi provides a variety of data plans tailored to your needs, whether you're heading out for a weekend or traveling for an extended period. With coverage in multiple countries, it's the ideal travel companion.",
    features: [
      "Stay Connected Anywhere",
      "Save BIG on International Roaming",
      "Unbeatable Pricing Guarantee",
    ],
    colors: [
      { name: "Red", hex: "#7d0907" },
      { name: "Purple", hex: "#541553" },
      { name: "Blue", hex: "#34547d" },
    ],
    price: {
      currency: "SGD",
      amount: 50,
      starting: true,
    },
    buttons: [
      {
        text: "View Plans",
        action: "openPlans",
      },
    ],
    tabs: [
      {
        title: "Descriptions",
        content:
          "It is easy to use and boasts a sleek, minimalist design. Simply turn it on, connect your devices, and you're good to go! No more worrying about complicated setup processes or bulky equipment. But that's not all — our Pocket Wifi devices also offer strong and reliable connectivity, ensuring that you stay connected no matter where you are. Whether you're on a business trip or a family vacation, you can enjoy high-speed internet without any interruptions.",
      },
      {
        title: "Specifications",
        content: [
          "Enjoy High-Speed Internet Access Immediately",
          "Connect up to 8 Devices",
          "4G Internet Speed",
          "Up to 12 hours of device battery",
          "Yoowifi 24/7 Customer Support",
          "Comes with Pocket Wifi Device, Charging Cable, Pouch",
          "Extend the days or add plans anytime",
          "Website: https://yoowifi",
        ],
      },
      {
        title: "Country Coverage",
        content: [
          "Algeria",
          "Anguilla",
          "Antigua and Barbuda",
          "Argentina",
          "Aruba",
          "Azerbaijan",
          "Bolivia",
          "Brazil",
          "British Virgin Islands",
          "Chile",
          "Colombia",
          "Costa Rica",
        ],
      },
      {
        title: "Terms & Conditions",
        content: [
          "50GB global data is applicable to 90 countries.",
          "Speed of service is dependent on the mobile network partner.",
          "For order cancellation, a charge of 10% of the order will apply.",
          "General terms and conditions apply.",
          "Yoowifi reserves the right to make changes anytime.",
        ],
      },
    ],
    images: [
      {
        url: "https://www.startech.com.bd/image/cache/catalog/router/tp-link/m7000/m7000-01-228x228.jpg",
        alt: "Pocket Wifi device front view",
      },
      {
        url: "https://imi-link.com/wp-content/uploads/2020/09/MiFi-4G-Router-1.jpg",
        alt: "Pocket Wifi device side view",
      },
      {
        url: "https://media.e-valy.com/cms/products/images/bbe4a836-5bb6-4518-892d-6a9f1209f4ca",
        alt: "Pocket Wifi device top view",
      },
      {
        url: "https://i5.walmartimages.com/asr/f4800de2-17a0-4da3-bf6e-8be2a937007f.b3c36da4108836973cdb96d091f57a7e.jpeg",
        alt: "Pocket Wifi device bottom view",
      },
      {
        url: "https://electronics.mrinmoy.com.bd/wp-content/uploads/2024/01/22.jpg",
        alt: "Pocket Wifi device with case",
      },
      {
        url: "https://alflip.com/uploads/all/1701333936_4G%20Pocket%20Wifi%20with%2010000mAh%20Power%20Bank0.webp",
        alt: "Pocket Wifi device with case",
      },
    ],
  },
};

const pocketWifiSlice = createSlice({
  name: "pocketWifiSlice",
  initialState,
  reducers: {},
});

export const { saveAuthData, logout } = pocketWifiSlice.actions;
export default pocketWifiSlice.reducer;
