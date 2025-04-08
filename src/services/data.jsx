import {
  AddWalletIcon,
  commercialRoutes,
  Communications2Icon,
  corporateRoutes,
  DollarLabelIcon,
  DownloadFillIcon,
  EarthIcon,
  GlobalElipseIcon,
  GlobalRawIcon,
  GlobeIcon,
  images,
  MailerBugIcon,
  MapLocatedIcon,
  MobileWifiIcon,
  NetworkSignalIcon,
  SignalIcon,
  YoutubeThumbnailIcon,
} from ".";

// c

export const countryOptions = [
  {
    _id: 1,
    label: "America",
    value: "america",
    region: "america",
    flag: () => images.USFlag,
  },
  {
    _id: 2,
    label: "China",
    value: "china",
    region: "asia",
    flag: () => images.ChinaFlag,
  },
  {
    _id: 3,
    label: "Malaysia",
    value: "malaysia",
    region: "asia",
    flag: () => images.MalaysiaFlag,
  },
  {
    _id: 4,
    label: "Indonesia",
    value: "indonesia",
    region: "asia",
    flag: () => images.IndonesiaFlag,
  },
  {
    _id: 5,
    label: "Japan",
    value: "japan",
    region: "asia",
    flag: () => images.JapanFlag,
  },
  {
    _id: 6,
    label: "Thailand",
    value: "thailand",
    region: "asia",
    flag: () => images.ThailandFlag,
  },
  {
    _id: 7,
    label: "Vietnam",
    value: "vietnam",
    region: "asia",
    flag: () => images.VietnamFlag,
  },
  {
    _id: 8,
    label: "Phillipine",
    value: "phillipine",
    region: "asia",
    flag: () => images.PhilippinesFlag,
  },
  {
    _id: 9,
    label: "Spain",
    value: "spain",
    region: "europe",
    flag: () => images.SpainFlag,
  },
  {
    _id: 10,
    label: "Germany",
    value: "germany",
    region: "europe",
    flag: () => images.GermanyFlag,
  },
  {
    _id: 11,
    label: "France",
    value: "france",
    region: "europe",
    flag: () => images.FranceFlag,
  },
];

export const countryDetaildOptions = [
  {
    _id: 1,
    label: "America",
    region: "america",
    flag: () => images.USFlag,
    value: {
      capital: "Washington, D.C.",
      currency: "USD",
      currency_name: "United States Dollar",
      currency_symbol: "$",
      emoji: "🇺🇸",
      hasStates: true,
      id: 1,
      iso2: "US",
      iso3: "USA",
      latitude: "38.00000000",
      longitude: "-97.00000000",
      name: "United States",
      native: "United States",
      numeric_code: "840",
      phone_code: "1",
      region: "Americas",
      subregion: "Northern America",
      tld: ".us",
    },
  },
  {
    _id: 2,
    label: "China",
    region: "asia",
    flag: () => images.ChinaFlag,
    value: {
      capital: "Beijing",
      currency: "CNY",
      currency_name: "Yuan Renminbi",
      currency_symbol: "¥",
      emoji: "🇨🇳",
      hasStates: true,
      id: 2,
      iso2: "CN",
      iso3: "CHN",
      latitude: "35.00000000",
      longitude: "105.00000000",
      name: "China",
      native: "中国",
      numeric_code: "156",
      phone_code: "86",
      region: "Asia",
      subregion: "Eastern Asia",
      tld: ".cn",
    },
  },
  {
    _id: 3,
    label: "Malaysia",
    region: "asia",
    flag: () => images.MalaysiaFlag,
    value: {
      capital: "Kuala Lumpur",
      currency: "MYR",
      currency_name: "Malaysian Ringgit",
      currency_symbol: "RM",
      emoji: "🇲🇾",
      hasStates: true,
      id: 3,
      iso2: "MY",
      iso3: "MYS",
      latitude: "2.50000000",
      longitude: "112.50000000",
      name: "Malaysia",
      native: "Malaysia",
      numeric_code: "458",
      phone_code: "60",
      region: "Asia",
      subregion: "South-Eastern Asia",
      tld: ".my",
    },
  },
  {
    _id: 4,
    label: "Indonesia",
    region: "asia",
    flag: () => images.IndonesiaFlag,
    value: {
      capital: "Jakarta",
      currency: "IDR",
      currency_name: "Indonesian Rupiah",
      currency_symbol: "Rp",
      emoji: "🇮🇩",
      hasStates: true,
      id: 4,
      iso2: "ID",
      iso3: "IDN",
      latitude: "-5.00000000",
      longitude: "120.00000000",
      name: "Indonesia",
      native: "Indonesia",
      numeric_code: "360",
      phone_code: "62",
      region: "Asia",
      subregion: "South-Eastern Asia",
      tld: ".id",
    },
  },
  {
    _id: 5,
    label: "Japan",
    region: "asia",
    flag: () => images.JapanFlag,
    value: {
      capital: "Tokyo",
      currency: "JPY",
      currency_name: "Yen",
      currency_symbol: "¥",
      emoji: "🇯🇵",
      hasStates: false,
      id: 5,
      iso2: "JP",
      iso3: "JPN",
      latitude: "36.00000000",
      longitude: "138.00000000",
      name: "Japan",
      native: "日本",
      numeric_code: "392",
      phone_code: "81",
      region: "Asia",
      subregion: "Eastern Asia",
      tld: ".jp",
    },
  },
  {
    _id: 6,
    label: "Thailand",
    region: "asia",
    flag: () => images.ThailandFlag,
    value: {
      capital: "Bangkok",
      currency: "THB",
      currency_name: "Baht",
      currency_symbol: "฿",
      emoji: "🇹🇭",
      hasStates: false,
      id: 6,
      iso2: "TH",
      iso3: "THA",
      latitude: "15.00000000",
      longitude: "100.00000000",
      name: "Thailand",
      native: "ประเทศไทย",
      numeric_code: "764",
      phone_code: "66",
      region: "Asia",
      subregion: "South-Eastern Asia",
      tld: ".th",
    },
  },
  {
    _id: 7,
    label: "Vietnam",
    region: "asia",
    flag: () => images.VietnamFlag,
    value: {
      capital: "Hanoi",
      currency: "VND",
      currency_name: "Dong",
      currency_symbol: "₫",
      emoji: "🇻🇳",
      hasStates: false,
      id: 7,
      iso2: "VN",
      iso3: "VNM",
      latitude: "16.00000000",
      longitude: "106.00000000",
      name: "Vietnam",
      native: "Việt Nam",
      numeric_code: "704",
      phone_code: "84",
      region: "Asia",
      subregion: "South-Eastern Asia",
      tld: ".vn",
    },
  },
  {
    _id: 8,
    label: "Phillipine",
    region: "asia",
    flag: () => images.PhilippinesFlag,
    value: {
      capital: "Manila",
      currency: "PHP",
      currency_name: "Philippine Peso",
      currency_symbol: "₱",
      emoji: "🇵🇭",
      hasStates: true,
      id: 8,
      iso2: "PH",
      iso3: "PHL",
      latitude: "13.00000000",
      longitude: "122.00000000",
      name: "Philippines",
      native: "Pilipinas",
      numeric_code: "608",
      phone_code: "63",
      region: "Asia",
      subregion: "South-Eastern Asia",
      tld: ".ph",
    },
  },
  {
    _id: 9,
    label: "Spain",
    region: "europe",
    flag: () => images.SpainFlag,
    value: {
      capital: "Madrid",
      currency: "EUR",
      currency_name: "Euro",
      currency_symbol: "€",
      emoji: "🇪🇸",
      hasStates: true,
      id: 9,
      iso2: "ES",
      iso3: "ESP",
      latitude: "40.00000000",
      longitude: "-4.00000000",
      name: "Spain",
      native: "España",
      numeric_code: "724",
      phone_code: "34",
      region: "Europe",
      subregion: "Southern Europe",
      tld: ".es",
    },
  },
  {
    _id: 10,
    label: "Germany",
    region: "europe",
    flag: () => images.GermanyFlag,
    value: {
      capital: "Berlin",
      currency: "EUR",
      currency_name: "Euro",
      currency_symbol: "€",
      emoji: "🇩🇪",
      hasStates: true,
      id: 10,
      iso2: "DE",
      iso3: "DEU",
      latitude: "51.00000000",
      longitude: "9.00000000",
      name: "Germany",
      native: "Deutschland",
      numeric_code: "276",
      phone_code: "49",
      region: "Europe",
      subregion: "Western Europe",
      tld: ".de",
    },
  },
  {
    _id: 11,
    label: "France",
    region: "europe",
    flag: () => images.FranceFlag,
    value: {
      capital: "Paris",
      currency: "EUR",
      currency_name: "Euro",
      currency_symbol: "€",
      emoji: "🇫🇷",
      hasStates: true,
      id: 11,
      iso2: "FR",
      iso3: "FRA",
      latitude: "46.00000000",
      longitude: "2.00000000",
      name: "France",
      native: "France",
      numeric_code: "250",
      phone_code: "33",
      region: "Europe",
      subregion: "Western Europe",
      tld: ".fr",
    },
  },
];

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
    {
      _id: 4,
      label: commercialRoutes.simHome.name,
      path: commercialRoutes.simHome.path,
    },
    { _id: 5, label: "Contact Us", path: "/contact" },
    {
      _id: 6,
      label: commercialRoutes.aboutUs.name,
      path: commercialRoutes.aboutUs.path,
    },
    {
      _id: 7,
      label: corporateRoutes.home.name,
      path: corporateRoutes.home.path,
    },
  ],
});

// l

export const languageOptions = [
  {
    _id: 1,
    label: "English",
    value: "en",
    flag: () => images.USFlag,
  },
  {
    _id: 2,
    label: "Chinese (Simplified)",
    value: "zhcn",
    flag: () => images.ChinaFlag,
  },
  {
    _id: 3,
    label: "Chinese (Traditional)",
    value: "zhhk",
    flag: () => images.ChinaFlag,
  },
  {
    _id: 4,
    label: "Malaysian",
    value: "ms",
    flag: () => images.MalaysiaFlag,
  },
  {
    _id: 5,
    label: "Indonesian",
    value: "id",
    flag: () => images.IndonesiaFlag,
  },
  {
    _id: 6,
    label: "Japanese",
    value: "jp",
    flag: () => images.JapanFlag,
  },
  {
    _id: 7,
    label: "Thai",
    value: "th",
    flag: () => images.ThailandFlag,
  },
  {
    _id: 8,
    label: "Vietnamese",
    value: "vi",
    flag: () => images.VietnamFlag,
  },
  {
    _id: 9,
    label: "Phillipino",
    value: "ph",
    flag: () => images.PhilippinesFlag,
  },
  {
    _id: 10,
    label: "Spanish",
    value: "es",
    flag: () => images.SpainFlag,
  },
  {
    _id: 11,
    label: "German",
    value: "gm",
    flag: () => images.GermanyFlag,
  },
  {
    _id: 12,
    label: "French",
    value: "fr",
    flag: () => images.FranceFlag,
  },
];

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
      link: commercialRoutes.pocketWifiRegion.path,
      deadline: Math.floor(Date.now() / 1000) + 3 * 24 * 60 * 60,
    },
    {
      title: "Router",
      description:
        "Experience seamless and reliable internet connectivity at home with our advanced routers.",
      offer: "30% OFF",
      link: commercialRoutes.routerRegion.path,
      deadline: Math.floor(Date.now() / 1000) + 3 * 24 * 60 * 60,
    },
    {
      title: "SIM/eSIM",
      description:
        "Get instant connectivity with our SIM and eSIM options, suitable for all your devices.",
      offer: "20% OFF",
      link: commercialRoutes.simRegion.path,
      deadline: Math.floor(Date.now() / 1000) + 3 * 24 * 60 * 60,
    },
  ],
});

// r

export const regionsData = () => [
  {
    _id: 1,
    image: images.asiaRegionBlack,
    title: "Asia",
    value: "asia",
    link: "/country-coverage?region=asia",
  },
  {
    _id: 2,
    image: images.americaRegionBlack,
    title: "America",
    value: "america",
    link: "/country-coverage?region=america",
  },
  {
    _id: 3,
    image: images.africaRegionBlack,
    title: "Africa",
    value: "africa",
    link: "/country-coverage?region=africa",
  },
  {
    _id: 4,
    image: images.australiaRegionBlack,
    title: "Australia",
    value: "australia",
    link: "/country-coverage?region=australia",
  },
  {
    _id: 5,
    image: images.europeRegionBlack,
    title: "Europe",
    value: "europe",
    link: "/country-coverage?region=europe",
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
        { label: "Travel Data", path: "/pocket-wifi-details" },
        { label: "Country Coverage", path: "/country-coverage" },
        { label: "Local Data", path: "/local-data" },
        { label: "Pickup /drop off locations", path: "/pick-drop-location" },
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

export const howItWorksData = [
  {
    _id: 1,
    type: "Local",
    typeSuffix: "",
    duration: "3-4 Business day",
    price: 0,
  },

  {
    _id: 2,
    type: "Express",
    typeSuffix: "(Order by 10am)",
    duration: "3-4 Business day",
    price: 7,
  },
  {
    _id: 3,
    type: "Super Express",
    typeSuffix: "(Order by 10am)",
    duration: "3-4 Business day",
    price: 20,
  },
  {
    _id: 4,
    type: "Standard International",
    typeSuffix: "",
    duration: "3-4 Business day",
    price: 25,
  },
];

export const rentWifiData = [
  {
    step: "Step-1",
    title: "Get Yoowifi App",
    description: "Download Yoowifi App (first Timer only)",
    buttonText: "Download Yoowifi",
    icon: () => <DownloadFillIcon className="w-4 h-4 md:w-6 md:h-6" />,
  },
  {
    step: "Step-2",
    title: "Select Your Plan",
    description:
      "On the app, search for your destination country, choose the data size, and set your start and end dates.",
  },
  {
    step: "Step-3",
    title: "Complete Your Booking",
    description:
      "Select your preferred shipping method and proceed to checkout.",
  },
];

export const rentServicesData = [
  {
    _id: 1,
    title: "Local return mailer bag",
    description:
      "Simply pack the device and its accessories into the prepaid and return mailer bag any SingPost mailbox",
    icon: () => <MailerBugIcon className="w-12 h-12 md:w-15 md:h-15" />,
  },
  {
    _id: 2,
    title: "Self-Return",
    description:
      "Simply pack the device and its accessories and you may return at any pickup/Return location.",
    icon: () => <MapLocatedIcon className="w-12 h-12 md:w-15 md:h-15" />,
  },
  {
    _id: 3,
    title: "International Courier",
    description:
      "Contact Local DHL to pickup device if you have a return mailer bag / arrange your own Courier",
    icon: () => <GlobalRawIcon className="w-12 h-12 md:w-15 md:h-15" />,
  },
];

export const selfReturnData = [
  {
    _id: 1,
    title: "Login to Yoowifi App",
    description:
      "Start by visiting any of our 20+ pickup and return locations. On the app, go to 'My Data', select the device you wish to return, and tap on 'Return Device'.",
  },
  {
    _id: 2,
    title: "Scan Location QR Code",
    description: "Next, scan the location QR code provided by the staff.",
  },
  {
    _id: 3,
    title: "Scan Device QR Code",
    description:
      "Scan the QR code located at the back of the device to complete the return.",
  },
];

export const topUpData = [
  {
    _id: 1,
    title: "Select Your Device",
    description:
      "Open the Yoowifi app, go to My Data, and select the device you want to top up.",
  },
  {
    _id: 2,
    title: "Choose Your Plan",
    description:
      "Click on Add Data, select your desired country and plan, then set the start and end dates.",
  },
  {
    _id: 3,
    title: "Proceed to Checkout",
    description: "Confirm your selections and proceed to checkout.",
  },
];

export const affiliateServiceData = [
  {
    _id: 1,
    title: "Select Your Device",
    description:
      "Open the Yoowifi app, go to My Data, and select the device you want to top up.",
    icon: () => <GlobalElipseIcon className="w-12 h-12 md:w-10 md:h-10" />,
  },
  {
    _id: 2,
    title: "Choose Your Plan",
    description:
      "Click on Add Data, select your desired country and plan, then set the start and end dates.",
    icon: () => <MobileWifiIcon className="w-12 h-12 md:w-10 md:h-10" />,
  },
  {
    _id: 3,
    title: "Proceed to Checkout",
    description: "Confirm your selections and proceed to checkout.",
    icon: () => <YoutubeThumbnailIcon className="w-12 h-12 md:w-10 md:h-10" />,
  },
];

// g
export const getYourOwnData = () => ({
  title: "Get your own Yoowifi Pocket WiFi",
  features: [
    {
      icon: <GlobeIcon className={"h-4 w-4 md:h-6 md:w-6"} />,
      text: "Annual coverage in over 90 countries",
    },
    {
      icon: <Communications2Icon className={"h-4 w-4 md:h-6 md:w-6"} />,
      text: "Share up to 8 Devices",
    },
    {
      icon: <NetworkSignalIcon className={"h-4 w-4 md:h-6 md:w-6"} />,
      text: "Up to 5G Connectivity",
    },
    {
      icon: <AddWalletIcon className={"h-4 w-4 md:h-6 md:w-6"} />,
      text: "Data Top up available",
    },
    {
      icon: <DollarLabelIcon className={"h-4 w-4 md:h-6 md:w-6"} />,
      text: "Choose from 50GB, 100GB, or 200GB data plans",
    },
  ],
  button: {
    text: "Buy Now",
  },
});
