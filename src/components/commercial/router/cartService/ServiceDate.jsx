import DatePicker from "@/components/shared/others/DatePicker";
import { setRouterCartData } from "@/store/module/router/slice";
import { setSimCartData } from "@/store/module/sim/slice";
import { CountrySelect } from "react-country-state-city";
import { useDispatch, useSelector } from "react-redux";

function ServiceDate() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.sim);

  const handleCountrySelect = (value) => {
    dispatch(setSimCartData({ productCountry: value }));
  };

  const handleStartDate = (value) => {
    dispatch(setSimCartData({ startDate: value }));
  };
  return (
    <div className="px-4 py-6 bg-neutral-100 rounded-xl">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <span className="label">Country</span>
          <CountrySelect
            name="country"
            defaultValue={cart?.productCountry}
            onChange={(value) => handleCountrySelect(value)}
            containerClassName="country-select bg-neutral-50 rounded-xl"
            inputClassName="!border-none !outline-none bg-transparent"
            placeHolder="Select Country"
          />
        </div>
        <DatePicker
          date={cart?.startDate}
          setDate={handleStartDate}
          wrapper="flex-col items-start gap-2"
          label="Start Date"
        />
      </div>
    </div>
  );
}

export default ServiceDate;
