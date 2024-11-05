import RouterCartFooter from "@/components/commercial/router/RouterCartFooter";
import DiscountDownloadApp from "@/components/shared/others/DiscountDownloadApp";
import { Input } from "@/components/ui/input";
import { commercialRoutes } from "@/services";
import {
  handleNextRouterCart,
  setRouterCartData,
} from "@/store/module/router/slice";
import { CountrySelect } from "react-country-state-city";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function RouterRegion() {
  const { cart } = useSelector((state) => state.router);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isActive = cart?.productCountry?.id && cart?.memberId ? true : false;

  const handleCountrySelect = (value) => {
    dispatch(setRouterCartData({ productCountry: value }));
  };

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    dispatch(setRouterCartData({ [name]: value }));
  };

  const handleNext = () => {
    navigate(commercialRoutes.routerPlan.path);
    dispatch(handleNextRouterCart());
  };

  const handlePrev = () => {
    navigate(commercialRoutes.routerHome.path);
  };

  return (
    <div className="w-full flex flex-col gap-6 sm:gap-8 md:gap-12">
      <div className="w-full">
        <div className="w-full flex flex-col gap-4 sm:gap-6">
          <div className="flex flex-col gap-2">
            <span className="label">Country</span>
            <CountrySelect
              name="country"
              defaultValue={cart?.productCountry}
              onChange={(value) => handleCountrySelect(value)}
              containerClassName="country-select bg-neutral-50"
              inputClassName="!border-none !outline-none bg-transparent"
              placeHolder="Select Country"
            />
          </div>
          <Input
            name="promoCode"
            placeholder="Promo code"
            label="Promo code"
            required
            onChange={handleInputChange}
            defaultValue={cart?.promoCode}
          />
          <Input
            name="memberId"
            placeholder="Enter member id"
            label="Member ID"
            required
            onChange={handleInputChange}
            defaultValue={cart?.memberId}
          />
          <RouterCartFooter
            prevHandler={handlePrev}
            nextHandler={handleNext}
            isActive={isActive}
          />
        </div>
      </div>
      <DiscountDownloadApp />
    </div>
  );
}

export default RouterRegion;
