import { setPocketWifiCartData } from "@/store/module/pocketWifi/slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function useSetLocalData(layout) {
  const dispatch = useDispatch();

  const setLocalData = () => {
    const pocketWifi = localStorage.getItem("procket_wifi_cart");
    if (pocketWifi && layout === "pocketWifi") {
      const data = JSON.parse(pocketWifi);
      dispatch(setPocketWifiCartData(data));
    } else {
      localStorage.removeItem("procket_wifi_cart");
    }
  };

  useEffect(() => {
    setLocalData();
  }, []);

  return;
}

export default useSetLocalData;
