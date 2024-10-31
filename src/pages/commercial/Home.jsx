import InternetPackage from "@/components/commercial/home/InternetPackage";
import StayConnectedRegions from "@/components/commercial/home/StayConnectedRegions";
import WhyYoowifi from "@/components/commercial/home/WhyYoowifi";
import { Button } from "@/components/ui/button";
import { corporateRoutes } from "@/services";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(corporateRoutes.home.path);
  };
  return (
    <div>
      <div className="flex_center py-4">
        <Button type="button" onClick={handleNavigate}>
          Navigate to corporate
        </Button>
      </div>
      <InternetPackage />
      <WhyYoowifi />
      <StayConnectedRegions />
    </div>
  );
}

export default Home;
