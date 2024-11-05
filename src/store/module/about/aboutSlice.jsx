import {
  BankIcon,
  Communications2Icon,
  ConnectionsIcon,
  CustomerServiceIcon,
  GlobeIcon,
  images,
  InternetAccessIcon,
  OrganizationIcon,
  WifiSecondaryIcon,
} from "@/services";
import { createSlice } from "@reduxjs/toolkit";
import { data } from "autoprefixer";

const initialState = {
  header: {
    title: "About Us",
    description:
      "Yoowifi is a Singapore-based company that provides pocket wifi rental services for travelers. We offer a wide range of pocket wifi devices with unlimited data plans to keep you connected wherever you go.",
  },
  whoWeAre: {
    title: "Who We Are",
    description:
      "UR Communications Pte Ltd, operating under the renowned brand name Yoowifi, introduces an advanced solution for effortless global connectivity via its intuitive mobile application. With a commitment to enriching travel journeys and fostering global communication, Yoowifi App delivers unmatched convenience, dependability, and cost-effectiveness. \n\nOur aspiration is to establish a world where telecom experts and travelers can effortlessly stay linked across countries, free from concerns about excessive data roaming fees. Our mission revolves around building a company that offers accessible, trustworthy, and boundary-free mobile services, empowering individuals to stay connected with their dear ones while exploring diverse corners of the globe.",
    image: images.whoWeAre1,
  },
  companyMission: {
    title: "Our Company Mission",
    mission: {
      title: "Our journey of innovation and growth",
      year: "2001",
      description:
        "UR Communications Pte Ltd, operating under the renowned brand name Yoowifi, introduces an advanced solution for effortless global connectivity via its intuitive mobile application. With a commitment to enriching travel journeys and fostering global communication, Yoowifi App delivers unmatched convenience, dependability, and cost-effectiveness",
      image: images.companyMission1,
    },
  },
  awardsAndAchievements: {
    details: [
      {
        year: "2020",
        title: "Royal Gold Medal",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      },
      {
        year: "2021",
        title: "Royal Gold Medal",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      },
      {
        year: "2022",
        title: "Royal Gold Medal",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      },
      {
        year: "2023",
        title: "Royal Gold Medal",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      },
    ],
    images: [
      images.awards1,
      images.whoWeAre1,
      images.companyMission1,
      images.whoWeAre1,
    ],
  },
  features: [
    {
      icon: () => (
        <WifiSecondaryIcon className="h-10 w-10 md:h-[60px] md:w-[60px]" />
      ),
      title: "Reliable WiFi, anywhere you go",
    },
    {
      icon: () => <GlobeIcon className="h-10 w-10 md:h-[60px] md:w-[60px]" />,
      title: "Covers more than 160 Countries",
    },
    {
      icon: () => (
        <CustomerServiceIcon className="h-10 w-10 md:h-[60px] md:w-[60px]" />
      ),
      title: "24/7 Customer Support",
    },
    {
      icon: () => (
        <ConnectionsIcon className="h-10 w-10 md:h-[60px] md:w-[60px]" />
      ),
      title: "Local presence in over 10 countries",
    },
  ],
  whatWeDo: [
    {
      icon: () => (
        <InternetAccessIcon className="h-10 w-10 md:h-[60px] md:w-[60px]" />
      ),
      title: "Internet Access",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been .",
    },
    {
      icon: () => (
        <Communications2Icon className="h-10 w-10 md:h-[60px] md:w-[60px]" />
      ),
      title: "Mobile general solutions",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
    },
    {
      icon: () => (
        <OrganizationIcon className="h-10 w-10 md:h-[60px] md:w-[60px]" />
      ),
      title: "Custom solutions",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
    },
    {
      icon: () => <BankIcon className="h-10 w-10 md:h-[60px] md:w-[60px]" />,
      title: "Events & Roadshows",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
    },
  ],
  personal: [
    {
      _id: 1,
      title: "Global Coverage",
      description:
        "Hassle-free global connectivity in over 160 countries! Travelers can choose from a variety of connections. Includes portable hotspot, eSIM, and SIM card",
      image: images.person1,
    },
    {
      _id: 2,
      title: "Flexible Data Plans",
      description:
        "Range of flexible data plans to suit every traveler's needs. Whether you need high-speed data for streaming and video calls or a more economical option for casual browsing.",
      image: images.person2,
    },
    {
      _id: 3,
      title: "Hassle-Free Delivery",
      description:
        "Whether you're planning in advance or need last-minute connectivity, we've got you covered! Get your device delivered to your doorstep or choose convinient pickup at selected locations.",
      image: images.person3,
    },
  ],
  business: [
    {
      _id: 1,
      title: "Zero Touch On Demand",
      description:
        "Hassle-free global connectivity in over 160 countries! Travelers can choose from a variety of connections. Includes portable hotspot, eSIM, and SIM card",
      image: images.tour,
    },
    {
      _id: 2,
      title: "Flexible Data Plans",
      description:
        "Range of flexible data plans to suit every traveler's needs. Whether you need high-speed data for streaming and video calls or a more economical option for casual browsing.",
      image: images.dataPlan,
    },
    {
      _id: 3,
      title: "Multi-homing network",
      description:
        "Whether you're planning in advance or need last-minute connectivity, we've got you covered! Get your device delivered to your doorstep or choose convinient pickup at selected locations.",
      image: images.network,
    },
  ],
};

const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {},
});

export default aboutSlice.reducer;
