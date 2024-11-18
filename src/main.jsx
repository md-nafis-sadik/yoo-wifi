import "@/styles/app.css";
import "@/styles/fonts.css";
import "@/styles/index.css";
import "photoswipe/dist/photoswipe.css";
import React from "react";
import "react-country-state-city/dist/react-country-state-city.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import { store } from "./store";
// language switcher
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

const localPath =
  window.location.pathname.includes("/product") ||
  window.location.pathname.includes("/corporate") ||
  window.location.pathname.includes("/contact") ||
  window.location.pathname.includes("/about-us");

const getCurrentLoadPath = (language) => {
  if (localPath) {
    return `../assets/langs/${language}/translation.json`;
  } else {
    return `./assets/langs/${language}/translation.json`;
  }
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "jp"],
    fallbackLng: "en",
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: getCurrentLoadPath("{{lng}}"),
    },
  });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
