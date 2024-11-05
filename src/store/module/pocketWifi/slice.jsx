import {
  AppCustomizationIcon,
  BatteryIcon,
  CloudIcon,
  CustomSolutionIcon,
  EmployeeIcon,
  GlobDataIcon,
  InternetCoverageIcon,
  LteSpeedIcon,
  MoneyIcon,
  MultihomingNetwrokIcon,
  OrganizationIcon,
  PartnershipIcon,
  ProjectIcon,
  ShareGroupIcon,
} from "@/services";
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
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSskzXnZfymqU-VhKuUhNF-Bsc4BtoHudI0pg&s",
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
  recomandedPackages: [
    {
      id: 1,
      title: "Basic Package",
      features: [
        "Keep Yoowifi Device",
        "Top-up Plan only",
        "365 Days Validity",
        "Covers 90 Countries",
      ],
      price: {
        currency: "SGD",
        amount: 30,
      },
      image:
        "https://www.startech.com.bd/image/cache/catalog/router/tp-link/m7000/m7000-01-228x228.jpg",
      category: "daily",
      planCode: "plan_1",
      dataSize: 3,
      validity: 30,
      desc: "GB",
    },
    {
      id: 2,

      title: "Traveler Package",
      features: [
        "Keep Yoowifi Device",
        "Top-up Plan only",
        "365 Days Validity",
        "Covers 90 Countries",
      ],
      price: {
        currency: "SGD",
        amount: 50,
      },
      image:
        "https://www.startech.com.bd/image/cache/catalog/router/tp-link/m7000/m7000-01-228x228.jpg",
      category: "daily",
      planCode: "plan_1",
      dataSize: 3,
      validity: 30,
      desc: "GB",
    },
    {
      id: 3,

      title: "Extended Package",
      features: [
        "Keep Yoowifi Device",
        "Top-up Plan only",
        "365 Days Validity",
        "Covers 90 Countries",
      ],
      price: {
        currency: "SGD",
        amount: 100,
      },
      image:
        "https://www.startech.com.bd/image/cache/catalog/router/tp-link/m7000/m7000-01-228x228.jpg",
      category: "daily",
      planCode: "plan_1",
      dataSize: 3,
      validity: 30,
      desc: "GB",
    },
    {
      id: 4,

      title: "Unlimited Package",
      features: [
        "Keep Yoowifi Device",
        "Top-up Plan only",
        "365 Days Validity",
        "Covers 90 Countries",
      ],
      price: {
        currency: "SGD",
        amount: 150,
      },
      image:
        "https://www.startech.com.bd/image/cache/catalog/router/tp-link/m7000/m7000-01-228x228.jpg",
      category: "daily",
      planCode: "plan_1",
      dataSize: 3,
      validity: 30,
      desc: "GB",
    },
    {
      id: 5,

      title: "Lite Package",
      features: [
        "Keep Yoowifi Device",
        "Top-up Plan only",
        "180 Days Validity",
        "Covers 60 Countries",
      ],
      price: {
        currency: "SGD",
        amount: 20,
      },
      image:
        "https://www.startech.com.bd/image/cache/catalog/router/tp-link/m7000/m7000-01-228x228.jpg",
      category: "monthly",
      planCode: "plan_1",
      dataSize: 3,
      validity: 30,
      desc: "GB",
    },
    {
      id: 6,

      title: "Business Package",
      features: [
        "Keep Yoowifi Device",
        "Top-up Plan only",
        "365 Days Validity",
        "Priority support",
        "Covers 100 Countries",
      ],
      price: {
        currency: "SGD",
        amount: 200,
      },
      image:
        "https://www.startech.com.bd/image/cache/catalog/router/tp-link/m7000/m7000-01-228x228.jpg",
      category: "volumn",
      planCode: "plan_1",
      dataSize: 3,
      validity: 30,
      desc: "GB",
    },
    {
      id: 7,

      title: "Premium Package",
      features: [
        "Keep Yoowifi Device",
        "Top-up Plan only",
        "365 Days Validity",
        "Unlimited data in selected countries",
        "Covers 90 Countries",
      ],
      price: {
        currency: "SGD",
        amount: 250,
      },
      image:
        "https://www.startech.com.bd/image/cache/catalog/router/tp-link/m7000/m7000-01-228x228.jpg",
      category: "daily",
    },
    {
      id: 8,

      title: "Family Package",
      features: [
        "Keep Yoowifi Device",
        "Top-up Plan only",
        "365 Days Validity",
        "Connect up to 10 devices",
        "Covers 90 Countries",
      ],
      price: {
        currency: "SGD",
        amount: 180,
      },
      image:
        "https://www.startech.com.bd/image/cache/catalog/router/tp-link/m7000/m7000-01-228x228.jpg",
      category: "volumn",
    },
    {
      id: 9,

      title: "Traveler Plus Package",
      features: [
        "Keep Yoowifi Device",
        "Top-up Plan only",
        "180 Days Validity",
        "Extended data for heavy users",
        "Covers 80 Countries",
      ],
      price: {
        currency: "SGD",
        amount: 120,
      },
      image:
        "https://www.startech.com.bd/image/cache/catalog/router/tp-link/m7000/m7000-01-228x228.jpg",
      category: "monthly",
    },
    {
      id: 10,

      title: "Global Unlimited Package",
      features: [
        "Keep Yoowifi Device",
        "Top-up Plan only",
        "365 Days Validity",
        "Unlimited data globally",
        "Covers 100 Countries",
      ],
      price: {
        currency: "SGD",
        amount: 300,
      },
      image:
        "https://www.startech.com.bd/image/cache/catalog/router/tp-link/m7000/m7000-01-228x228.jpg",
      category: "daily",
    },
  ],
  features: [
    {
      icon: () => <LteSpeedIcon />,
      title: "Up To 4G \n LTE Speed",
    },
    {
      icon: () => <GlobDataIcon />,
      title: "Flexible Data option",
    },
    {
      icon: () => <CloudIcon />,
      title: "Cloud SIM Technology",
    },
    {
      icon: () => <ShareGroupIcon />,
      title: "Share up to \n 8 devices",
    },
    {
      icon: () => <BatteryIcon />,
      title: "12 Hour Battery Life",
    },
  ],
  topupPlans: [
    {
      planCode: "plan_1",
      dataSize: 3,
      price: 10,
      validity: 30,
      desc: "GB",
    },
    {
      planCode: "plan_2",
      dataSize: 10,
      price: 20,
      validity: 30,
      desc: "GB",
    },
  ],
  cart: {
    color: {},
    promoCode: null,
    memberId: null,
    productCountry: null,
    package: {},
    topup: {},
    device: {},
    cartType: "rental",
    quantity: 1,
    startDate: null,
    endDate: null,
  },
  aboutUs: [
    {
      _id: 1,
      title: "About Us",
      icon: () => <EmployeeIcon className="w-8 h-8 lg:w-[60px] lg:h-[60px]" />,
      content: "Reliable and secure internet connectivity for businesses On-The-Go",
    },
    {
      _id: 2,
      title: "Partnerships",
      icon: () => <PartnershipIcon className="w-8 h-8 lg:w-[60px] lg:h-[60px]" />,
      content: "Explore long lasting partnership opportunities with our services",
    },
    {
      _id: 3,
      title: "Custom Solutions",
      icon: () => <CustomSolutionIcon className="w-8 h-8 lg:w-[60px] lg:h-[60px]" />,
      content: "Designed to meet your needs and requirements with high-speed internet access and cost-effective solution",
    },
  ],
  services: [
    {
      _id: 1,
      icon: () => <InternetCoverageIcon />,
      title: "Global Coverage",
      content: "Stay connected across 160 countries, no matter where your journey takes you with Yoowifi's travel wifi services.",
    },
    {
      _id: 2,
      icon: () => <MultihomingNetwrokIcon />,
      title: "Multihoming Network",
      content: "We stay connected by partnering with multiple telcos, ensuring uninterrupted service availability in any location.",
    },
    {
      _id: 3,
      icon: () => <OrganizationIcon />,
      title: "Zero Touch on Demand",
      content: "Our cloud-based portal preconfigures and deploys services for zero-touch on-demand connectivity, technical expertise required on-site.",
    },
    {
      _id: 4,
      icon: () => <MoneyIcon />,
      title: "Cost Efficient Service",
      content: "Our vSIM tech offers affordable data services by switching SIMs as you cross borders, eliminating roaming charges and reducing telecom expenses.",
    },
    {
      _id: 5,
      icon: () => <ProjectIcon />,
      title: "Management Portal",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
    {
      _id: 6,
      icon: () => <AppCustomizationIcon />,
      title: "App Customization",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    },
  ]
};

const pocketWifiSlice = createSlice({
  name: "pocketWifiSlice",
  initialState,
  reducers: {
    setPocketWifiCartData: (state, action) => {
      state.cart = { ...state.cart, ...action?.payload };
    },
    handleNextPocketWifiCart: (state) => {
      localStorage.setItem("procket_wifi_cart", JSON.stringify(state.cart));
    },
  },
});

export const { setPocketWifiCartData, handleNextPocketWifiCart } =
  pocketWifiSlice.actions;
export default pocketWifiSlice.reducer;
