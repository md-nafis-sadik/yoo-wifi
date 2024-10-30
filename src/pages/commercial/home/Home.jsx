import { Button } from "@/components/ui/button";
import { corporateRoutes } from "@/services";
import { useNavigate } from "react-router-dom";
import PerfectPackages from "./PerfectPackages";
import WhyYoowifi from "./WhyYoowifi";
import StayConnectedRegions from "./StayConnectedRegions";

function Home() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(corporateRoutes.home.path);
  };

  return (
    <div className="">
      <div className="flex_center py-4">
        <Button type="button" onClick={handleNavigate}>
          Navigate to corporate
        </Button>
      </div>
      <PerfectPackages />
      <WhyYoowifi />
      <StayConnectedRegions />
    </div>
  );
}

export default Home;
