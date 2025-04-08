import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { countryDetaildOptions } from "@/services";
import { useTranslation } from "react-i18next";

const CountrySelectField = ({
  defaultValue,
  onChange,
  selectTriggerClassName,
  placeholder,
}) => {
  const { t } = useTranslation();

  return (
    <Select onValueChange={onChange}>
      <SelectTrigger
        className={cn(
          "w-full h-[3.125rem] bg-neutral-50 py-3.5 px-4 rounded-xl border border-neutral-300",
          selectTriggerClassName
        )}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent align="end" side="bottom">
        {countryDetaildOptions?.map(({ _id, value, label, flag }) => (
          <SelectItem
            key={_id}
            value={value}
            className={"flex flex-row gap-1 items-center"}
          >
            <img
              src={flag()}
              alt={t(`countryOptions.${label}`)}
              className="w-6 h-auto inline-block"
            />{" "}
            <span className="countryName">{t(`countryOptions.${label}`)}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CountrySelectField;
