import {
  FacebookIcon,
  images,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
  YoutubeIcon,
} from "@/services";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contact: [
    {
      _id: 1,
      name: "WhatsApp",
      text: "Whatsapp Us",
      value: "(+65) 6100 9998",
      image: images.whatsapp,
      type: "call",
    },
    {
      _id: 2,
      name: "Email",
      text: "Email Address",
      value: "business@yoowifi.com",
      image: images.email,
      type: "email",
    },
  ],
  faqs: [
    {
      _id: 1,
      question: "Can I make calls with the pocket wifi?",
      answer:
        "The pocket wifi only gives you an internet connection; it does not enable regular voice calls via your cellular network. However, it does allow VoIP calls such as Skype, Viber, and Google Voice.",
    },
    {
      _id: 2,
      question:
        "What's the difference between a megabyte (MB) and a gigabyte (GB)?",
      answer:
        "A megabyte (MB) is 1,024 kilobytes (KB), while a gigabyte (GB) is 1,024 megabytes. Generally, 1GB equals 1,024MB.",
    },
    {
      _id: 3,
      question: "How can I return pocket wifi at the end of my rental period?",
      answer:
        "You can return your pocket wifi by following the instructions provided during rental. Typically, this includes returning it at a drop-off location or via a provided return envelope.",
    },
    {
      _id: 4,
      question: "Can I amend my booking information after placing an order?",
      answer:
        "Yes, you can amend your booking information after placing an order by contacting our support team, who will assist you with the necessary changes.",
    },
    {
      _id: 5,
      question: "How can I cancel my booking?",
      answer:
        "To cancel your booking, please reach out to our customer service team. Cancellations may be subject to our cancellation policy.",
    },
    {
      _id: 6,
      question:
        "I will be traveling to many different countries all over the world, how many devices do I need?",
      answer:
        "The number of devices you need depends on your travel itinerary. Typically, one device per region or country with specific data coverage would be recommended.",
    },
  ],
  chinaWifiFaqs: [
    {
      question: "Does portable WIFI need a SIM card?",
      answer:
        "While traditional portable WiFi devices require a SIM card, Yoowifi’s pocket WiFi comes with cloud SIM technology, allowing it to connect automatically to the best available network, no physical SIM card or swapping needed for a trip to China.",
    },

    {
      question: "Can I rent a pocket WiFi in China?",
      answer:
        "Yes, you can rent a pocket WiFi in China through providers like Yoowifi, which offers convenient pickup options at airports or delivery to your hotel. This allows you to stay connected without needing a local SIM card.",
    },
    {
      question: "Can I install a VPN on the pocket WiFi?",
      answer:
        "No, Yoowifi’s pocket WiFi does not support VPN installation directly on the device. However, you can still use a VPN on your connected smartphone, laptop, or tablet to access restricted websites while in China.",
    },
    {
      question: "Do I need a VPN if I’m using an eSIM in China?",
      answer:
        "Yes, if you want to access websites and services that are restricted in China (like Google, Facebook, or WhatsApp), you will still need a VPN even when using an eSIM. The eSIM only provides data connectivity but does not bypass the Great Firewall.",
    },
    {
      question: "What if I lose the pocket WiFi device?",
      answer:
        "If you lose the Yoowifi pocket WiFi device, you should report it immediately to the rental provider. There may be a lost device fee, but some companies offer insurance or protection plans to minimize costs.",
    },
    {
      question: "What’s the connection speed like in China?",
      answer:
        "Connection speeds in China vary by location and network. In major cities like Beijing and Shanghai, 4G/LTE speeds are generally fast, while rural areas may have slower connectivity. Yoowifi’s pocket WiFi automatically selects the best available network for optimal performance.",
    },
  ],

  socialLinks: [
    {
      _id: 1,
      name: "Facebook",
      link: "https://www.facebook.com/yoowifi/",
      icon: () => <FacebookIcon className="w-6 h-6 lg:w-8 lg:h-8" />,
    },
    {
      _id: 2,
      name: "Youtube",
      link: "https://youtube.com/@yoowifi",
      icon: () => <YoutubeIcon className="w-6 h-6 lg:w-8 lg:h-8" />,
    },
    {
      _id: 3,
      name: "LinkedIn",
      link: "https://www.linkedin.com/company/yoowifi/?originalSubdomain=sg",
      icon: () => <LinkedInIcon className="w-6 h-6 lg:w-8 lg:h-8" />,
    },
    {
      _id: 4,
      name: "Instagram",
      link: "https://www.instagram.com/yoowifi.co/?hl=en",
      icon: () => <InstagramIcon className="w-6 h-6 lg:w-8 lg:h-8" />,
    },
    {
      _id: 5,
      name: "X",
      link: "https://x.com/yoowifipr?mx=2",
      icon: () => <XIcon className="w-6 h-6 lg:w-8 lg:h-8" />,
    },
  ],
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
});

export default contactSlice.reducer;
