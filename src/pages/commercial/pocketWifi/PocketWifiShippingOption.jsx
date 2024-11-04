import PocketWifiCartFooter from "@/components/commercial/pocketWifi/PocketWifiCartFooter";
import CartShippingCard from "@/components/shared/cards/CartShippingCard";
import DeliveryAddress from "@/components/shared/others/DeliveryAddress";
import { commercialRoutes } from "@/services";
import {
  handleNextPocketWifiCart,
  setPocketWifiCartData,
} from "@/store/module/pocketWifi/slice";
import { useDispatch, useSelector } from "react-redux";

function PocketWifiShippingOption() {
  const { shippingOptions } = useSelector((state) => state.shared);
  const { cart } = useSelector((state) => state.pocketWifi);
  const dispatch = useDispatch();
  const isActive = cart?.shipping?.shippingId ? true : false;

  const handleSelectCard = (item) => {
    dispatch(setPocketWifiCartData({ shipping: item }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (cart?.shipping?.title == "Self Pickup") {
      navigate(commercialRoutes.pocketWifiSelfPickup.path);
    } else {
      navigate(commercialRoutes.pocketWifiOrderSummery.path);
    }
    dispatch(handleNextPocketWifiCart());
  };

  const handlePrev = () => {
    navigate(commercialRoutes.pocketWifiPlanSummery.path);
  };

  return (
    <form action="#" onSubmit={handleSubmit} className="w-full">
      <h2 className="text-base sm:text-lg md:text-2xl font-semibold sm:font-bold text-black-900">
        Select Shipping Option
      </h2>
      <div className="flex flex-col gap-6 mt-4 sm:mt-5 md:mt-6">
        {shippingOptions?.map((item, index) => (
          <CartShippingCard
            key={index}
            item={item}
            onClick={() => handleSelectCard(item)}
            isActive={cart?.shipping?.shippingId == item?.shippingId}
          />
        ))}
        <DeliveryAddress />
      </div>
      <PocketWifiCartFooter prevHandler={handlePrev} isActive={true} />
    </form>
  );
}

export default PocketWifiShippingOption;
