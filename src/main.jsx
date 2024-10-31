import "@/styles/app.css";
import "@/styles/fonts.css";
import "@/styles/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import { store } from "./store";
import "react-country-state-city/dist/react-country-state-city.css"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
