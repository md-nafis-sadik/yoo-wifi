import CartDeviceCard from "@/components/shared/cards/CartDeviceCard";
import CartLocationCard from "@/components/shared/cards/CartLocationCard";
import CartPaymentCard from "@/components/shared/cards/CartPaymentCard";
import CartShippingCard from "@/components/shared/cards/CartShippingCard";
import CartFooter from "@/components/shared/navigation/CartFooter";
import CartQuantity from "@/components/shared/others/CartQuantity";
import { Button } from "@/components/ui/button";
import { corporateRoutes } from "@/services";
import { CountrySelect } from "react-country-state-city";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(corporateRoutes.home.path);
  };
  return (
    <div className="p-10">
      <div className="flex_center py-4">
        <Button type="button" onClick={handleNavigate}>
          Navigate to corporate
        </Button>
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <p>CartPaymentCard</p>
          <CartPaymentCard />
        </div>
        <div className="flex flex-col gap-3">
          <p>CartLocationCard</p>
          <CartLocationCard />
        </div>
        <div className="flex flex-col gap-3">
          <p>CartShippingCard</p>
          <CartShippingCard />
        </div>
        <div className="flex flex-col gap-3">
          <p>CartDeviceCard</p>
          <CartDeviceCard />
        </div>
        <div></div>
        <div className="flex flex-col gap-3">
          <p>CartQuantity</p>
          <CartQuantity />
        </div>
        <div className="flex flex-col gap-3">
          <p>CartFooter</p>
          <CartFooter />
        </div>
        <div className="flex flex-col gap-3">
          <p>CountrySelect</p>
          <CountrySelect />
        </div>
      </div>
    </div>
  );
}

export default Home;
