import { Button } from "@/components/ui/button";
import { comercialRoutes } from "@/services";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(comercialRoutes.home.path);
  };
  return (
    <div>
      Home
      <Button type="button" onClick={handleNavigate}>
        Navigate to commercial
      </Button>
    </div>
  );
}

export default Home;
