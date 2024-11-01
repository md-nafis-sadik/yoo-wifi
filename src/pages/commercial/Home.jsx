import CartDeviceCard from "@/components/shared/cards/CartDeviceCard";
import CartLocationCard from "@/components/shared/cards/CartLocationCard";
import CartPaymentCard from "@/components/shared/cards/CartPaymentCard";
import CartShippingCard from "@/components/shared/cards/CartShippingCard";
import ConnectCard from "@/components/shared/cards/ConnectCard";
import CustomerCard from "@/components/shared/cards/CustomerCard";
import FeatureCard from "@/components/shared/cards/FeatureCard";
import InfoCard from "@/components/shared/cards/InfoCard";
import PackageCard from "@/components/shared/cards/PackageCard";
import ProductCard from "@/components/shared/cards/ProductCard";
import ServiceCard from "@/components/shared/cards/ServiceCard";
import CollaborateMarquee from "@/components/shared/CollaborateMarquee";
import CartFooter from "@/components/shared/navigation/CartFooter";
import CartQuantity from "@/components/shared/others/CartQuantity";
import DownloadYoowifi from "@/components/shared/others/DownloadYoowifi";
import ProductGallery from "@/components/shared/others/ProductGallery";
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
          <p>ProductCard</p>
          <ProductCard />
        </div>
        <div className="flex flex-col gap-3">
          <p>CustomerCard</p>
          <CustomerCard />
        </div>
        <div className="flex flex-col gap-3">
          <p>ConnectCard</p>
          <ConnectCard />
        </div>
        <div className="flex flex-col gap-3">
          <p>Collaborate Marquee</p>
          <CollaborateMarquee />
        </div>

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
          <CountrySelect
            containerClassName="country-select bg-neutral-50"
            inputClassName="!border-none !outline-none bg-transparent"
            placeHolder="Select Country"
          />
        </div>
        <div className="flex flex-col gap-3">
          <p>CountrySelect</p>
          <InfoCard />
        </div>
        <div className="flex flex-col gap-3">
          <p>FeatureCard</p>
          <FeatureCard />
        </div>
        <div className="flex flex-col gap-3">
          <p>PackageCard</p>
          <PackageCard />
        </div>
        <div className="flex flex-col gap-3">
          <p>ProductGallery</p>
          <ProductGallery />
        </div>
        <div className="flex flex-col gap-3">
          <p>ServiceCard</p>
          <ServiceCard />
        </div>
        <div className="flex flex-col gap-3">
          <p>DownloadYoowifi</p>
          <DownloadYoowifi />
        </div>
      </div>
    </div>
  );
}

export default Home;
