import React, { useState, useRef } from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { countryOptions } from "@/services";
import { useTranslation } from "react-i18next";

const CountrySearchField = ({
  value,
  onChange,
  name,
  inputClassName,
  placeHolder = "Select Country",
  autoComplete = "off",
  searchIconColor,
}) => {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState(value?.label || "");
  const inputRef = useRef(null);
  const { t } = useTranslation();

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
    setOpen(true); // Keep the popover open when typing

    // If user clears the input, pass null to parent
    if (!newValue) {
      onChange(null);
    }
  };

  const handleSelectCountry = (country) => {
    setSearchValue(country.label);
    onChange(country);
    setOpen(false);

    // Return focus to the input after selection
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
  };

  const handleKeyDown = (e) => {
    // Prevent popover from closing on keydown
    e.stopPropagation();
  };

  const filteredCountries = searchValue
    ? countryOptions.filter((country) =>
        country.label.toLowerCase().includes(searchValue.toLowerCase())
      )
    : countryOptions;

  return (
    <div className={cn("w-full relative")}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="relative">
            <Input
              ref={inputRef}
              value={searchValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder={placeHolder}
              name={name}
              autoComplete={autoComplete}
              className={cn(
                "w-full pl-10 pr-3 h-10 border border-gray-300 rounded-xl bg-transparent font-medium text-sm",
                inputClassName
              )}
              onClick={() => setOpen(true)}
            />
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
              size={18}
              color={searchIconColor}
            />
          </div>
        </PopoverTrigger>
        <PopoverContent
          className="p-0 max-h-60 overflow-auto w-[198px]"
          align="start"
          onOpenAutoFocus={(e) => {
            // Prevent auto focus on popover opening
            e.preventDefault();
          }}
        >
          <div className="py-1 w-full">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country, index) => (
                <div
                  key={country._id}
                  className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSelectCountry(country)}
                >
                  <img
                    src={country.flag()}
                    alt={t(`countryOptions[${index}].label`)}
                    className="w-6 h-4 mr-2"
                  />
                  <span className="text-sm font-normal">
                    {t(`countryOptions[${index}].label`)}
                  </span>
                </div>
              ))
            ) : (
              <div className="px-3 py-2 text-gray-500">No countries found</div>
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default CountrySearchField;
