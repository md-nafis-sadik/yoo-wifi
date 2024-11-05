import ConnectedWay from "@/components/commercial/pocketWifi/home/ConnectedWay";
import Description from "@/components/commercial/pocketWifi/home/Description";
import Hero from "@/components/commercial/pocketWifi/home/Hero";
import HowToConnect from "@/components/commercial/pocketWifi/home/HowToConnect";
import Included from "@/components/commercial/pocketWifi/home/Included";
import Indicators from "@/components/commercial/pocketWifi/home/Indicators";
import OtherProducts from "@/components/commercial/pocketWifi/home/OtherProducts";
import PlanTopUp from "@/components/commercial/pocketWifi/home/PlanTopUp";
import RecomendedPackage from "@/components/commercial/pocketWifi/home/RecomendedPackage";
import ReturnDevice from "@/components/commercial/pocketWifi/home/ReturnDevice";
import KeyFeatures from "@/components/commercial/pocketWifi/home/KeyFeatures";
import { useSelector } from "react-redux";

function Home() {
  const { features } = useSelector((state) => state.pocketWifi);

  return (
    <section>
      <Hero />
      <Description />
      <RecomendedPackage />
      <KeyFeatures data={features} />
      <ConnectedWay />
      <Included />
      <Indicators />
      <HowToConnect />
      <ReturnDevice />
      <PlanTopUp />
      <OtherProducts />
    </section>
  );
}

export default Home;
