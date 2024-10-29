import { Button } from "@/components/ui/button";
import { corporateRoutes } from "@/services";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(corporateRoutes.home.path);
  };
  return (
    <div className="">
      Home
      <Button type="button" onClick={handleNavigate}>
        Navigate to corporate
      </Button>
    </div>
  );
}

export default Home;
