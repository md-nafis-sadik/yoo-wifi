import DatePicker from "@/components/shared/others/DatePicker";
import { cn } from "@/lib/utils";
import { setRouterCartData } from "@/store/module/router/slice";
import { CountrySelect } from "react-country-state-city";
import { useDispatch, useSelector } from "react-redux";

function ServiceDate({ className, multiCountry, servicedateAdded = false }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.router);

  const handleCountrySelect = (value) => {
    dispatch(
      setRouterCartData(
        servicedateAdded
          ? { productCountrySecondary: value }
          : { productCountry: value }
      )
    );
  };

  const handleStartDate = (value) => {
    dispatch(
      setRouterCartData(
        servicedateAdded ? { startDateSecondary: value } : { startDate: value }
      )
    );
  };

  const handleEndDate = (value) => {
    dispatch(
      setRouterCartData(
        servicedateAdded ? { endDateSecondary: value } : { endDate: value }
      )
    );
  };

  return (
    <div className={cn("px-4 py-6 bg-neutral-100 rounded-xl", className)}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <span className="label">Country</span>
          <CountrySelect
            name="country"
            defaultValue={
              servicedateAdded
                ? cart?.productCountrySecondary
                : cart?.productCountry
            }
            onChange={(value) => handleCountrySelect(value)}
            containerClassName="country-select bg-neutral-50 rounded-xl"
            inputClassName="!border-none !outline-none bg-transparent"
            placeHolder="Select Country"
          />
        </div>
        <div className="flex items-center gap-4">
          <DatePicker
            date={servicedateAdded ? cart?.startDateSecondary : cart?.startDate}
            setDate={handleStartDate}
            wrapper="flex-col items-start gap-2"
            label="Start Date"
          />
          {multiCountry && (
            <DatePicker
              date={servicedateAdded ? cart?.endDateSecondary : cart?.endDate}
              setDate={handleEndDate}
              wrapper="flex-col items-start gap-2"
              label="Start Date"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ServiceDate;
