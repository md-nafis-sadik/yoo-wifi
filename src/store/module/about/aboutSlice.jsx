import { createSlice } from "@reduxjs/toolkit";

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
    image:
      "https://plus.unsplash.com/premium_photo-1661274209157-118069b926f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  companyMission: {
    title: "Our Company Mission",
    mission: {
      title: "Our journey of innovation and growth",
      year: "2021",
      description:
        "UR Communications Pte Ltd, operating under the renowned brand name Yoowifi, introduces an advanced solution for effortless global connectivity via its intuitive mobile application. With a commitment to enriching travel journeys and fostering global communication, Yoowifi App delivers unmatched convenience, dependability, and cost-effectiveness",
      image:
        "https://plus.unsplash.com/premium_photo-1661274209157-118069b926f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
};

const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {},
});

export default aboutSlice.reducer;
