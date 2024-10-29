import { Button } from "@/components/ui/button";
import { corporateRoutes, error } from "@/services";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(corporateRoutes.home.path);
  };
  return (
    <div>
      Home
      <Button type="button" onClick={handleNavigate}>
        Navigate to corporate
      </Button>
      <img src={error} alt="" />
    </div>
  );
}

export default Home;
