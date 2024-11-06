import RouterCartFooter from "@/components/commercial/sim/RouterCartFooter";
import { Input } from "@/components/ui/input";
import { commercialRoutes } from "@/services";
import { handleNextSimCart, setSimCartData } from "@/store/module/sim/slice";
import { CountrySelect } from "react-country-state-city";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function SimRegion() {
  const { cart } = useSelector((state) => state.sim);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isActive = cart?.productCountry?.id ? true : false;

  const handleCountrySelect = (value) => {
    dispatch(setSimCartData({ productCountry: value }));
  };

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    dispatch(setSimCartData({ [name]: value }));
  };

  const handleNext = () => {
    navigate(commercialRoutes.simPlan.path);
    dispatch(handleNextSimCart());
  };

  const handlePrev = () => {
    navigate(commercialRoutes.simHome.path);
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
    </div>
  );
}

export default SimRegion;
