import HowToConnect from "@/components/commercial/connectPocketWifi/HowToConnect";
import ReturnDevice from "@/components/commercial/connectPocketWifi/ReturnDevice";
import { Fragment } from "react";

const HowToConnectPocketWifi = () => {
  return (
    <Fragment>
      <HowToConnect
        link={{ to: "/pocketwifi/how-to-connect", text: "Buy Pocket Wifi" }}
      />
      <ReturnDevice />
    </Fragment>
  );
};

export default HowToConnectPocketWifi;
