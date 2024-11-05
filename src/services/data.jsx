import {
  commercialRoutes,
  DollarLabelIcon,
  EarthIcon,
  images,
  SignalIcon,
} from ".";

// h

// n

export const navBarData = () => ({
  commercialNavItems: [
    {
      _id: 1,
      label: commercialRoutes.home.name,
      path: commercialRoutes.home.path,
    },
    {
      _id: 2,
      label: commercialRoutes.pocketWifiHome.name,
      path: commercialRoutes.pocketWifiHome.path,
    },
    {
      _id: 3,
      label: commercialRoutes.routerHome.name,
      path: commercialRoutes.routerHome.path,
    },
    { _id: 4, label: "SIM/eSIM", path: "/sim-esim" },
    { _id: 5, label: "Contact Us", path: "/contact" },
    {
      _id: 6,
      label: commercialRoutes.aboutUs.name,
      path: commercialRoutes.aboutUs.path,
    },
  ],
});

// p

export const productsData = () => ({
  productImages: [
    images.pocketWifiNewUpdate,
    images.routerWhite,
    images.pocketWifiSimRed2,
  ],
  cardData: [
    {
      title: "Pocket WIFI",
      description:
        "Stay connected on the go with our high-speed Pocket WIFI. Perfect for travel and remote work.",
      offer: "50% OFF",
      link: "/",
    },
    {
      title: "Router",
      description:
        "Experience seamless and reliable internet connectivity at home with our advanced routers.",
      offer: "30% OFF",
      link: "/",
    },
    {
      title: "SIM/eSIM",
      description:
        "Get instant connectivity with our SIM and eSIM options, suitable for all your devices.",
      offer: "20% OFF",
      link: "/",
    },
  ],
});

// r

export const regionsData = () => [
  {
    _id: 1,
    image: images.asiaRegionBlack,
    title: "Asia",
    link: "/",
  },
  {
    _id: 2,
    image: images.americaRegionBlack,
    title: "America",
    link: "/",
  },
  {
    _id: 3,
    image: images.africaRegionBlack,
    title: "Africa",
    link: "/",
  },
  {
    _id: 4,
    image: images.australiaRegionBlack,
    title: "Australia",
    link: "/",
  },
  {
    _id: 5,
    image: images.europeRegionBlack,
    title: "Europe",
    link: "/",
  },
];

// s

export const servicesData = () => [
  {
    _id: 1,
    icon: <SignalIcon className={"h-4 w-4 md:h-6 md:w-6"} />,
    title: "Stay Connected Anywhere",
  },
  {
    _id: 2,
    icon: <EarthIcon className={"h-4 w-4 md:h-6 md:w-6"} />,
    title: "Save BIG on International Roaming",
  },
  {
    _id: 3,
    icon: <DollarLabelIcon className={"h-4 w-4 md:h-6 md:w-6"} />,
    title: "Unbeatable Pricing Guarantee",
  },
];

// f

export const footerData = {
  contact: [
    {
      type: "Call",
      value: "111 222 3456",
    },
    {
      type: "Mail",
      value: "info@demo.com",
    },
  ],
  legals: [
    { title: "Terms of use", path: "#" },
    { title: "Privacy policy", path: "#" },
  ],
  menuData: [
    {
      title: "YOOWIFI",
      links: [
        { label: "About Us", path: "/about-us" },
        { label: "FAQ", path: "/faq" },
        { label: "Download the app", path: "/download" },
        { label: "Contact Us", path: "/contact" },
        { label: "Terms of service", path: "/terms-of-service" },
        { label: "Privacy Policy", path: "/privacy-policy" },
      ],
    },
    {
      title: "FOR YOO",
      links: [
        { label: "Travel Data", path: "/travel-data" },
        { label: "Country Coverage", path: "/country-coverage" },
        { label: "Local Data", path: "/local-data" },
        { label: "Pickup /drop off locations", path: "/pickup-drop-off" },
        { label: "Products", path: "/products" },
        { label: "How it works", path: "/how-it-works" },
      ],
    },
    {
      title: "CORPORATE",
      links: [
        { label: "Iot", path: "/iot" },
        { label: "Travel", path: "/corporate-travel" },
        { label: "Travel Agency", path: "/travel-agency" },
        { label: "Maritime Internet", path: "/maritime-internet" },
        { label: "Offices/Roadshow&Event", path: "/offices-roadshow-event" },
      ],
    },
  ],
};
