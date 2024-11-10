import CountryWiseLocation from "@/components/commercial/pickDropLocation/CountryWiseLocation";
import ReturnDevice from "@/components/commercial/pickDropLocation/ReturnDevice";
import HeroCommon from "@/components/shared/others/HeroCommon";
import { Fragment } from "react";

const PickDropLocation = () => {
  return (
    <Fragment>
      <HeroCommon title={"Pickup & drop off locations"} />
      <ReturnDevice />
      <CountryWiseLocation />
    </Fragment>
  );
};

export default PickDropLocation;
