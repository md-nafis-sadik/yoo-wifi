import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { languageOptions } from "@/services";
import i18next from "i18next";
import Cookies from "js-cookie";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function LanguageSelect() {
  const { t } = useTranslation();
  const currentLanguage = Cookies.get("i18next");
  const [lang, setLang] = useState(currentLanguage);

  const handleLanguageChange = (language) => {
    setLang(language);
    i18next.changeLanguage(language);
    window.location.reload();
  };
  return (
    <Select onValueChange={handleLanguageChange} defaultValue={lang}>
      <SelectTrigger className="w-full max-w-[320px] xl:w-16 h-10 px-2 rounded-lg bg-main-20 navbarLang">
        <SelectValue placeholder="Select Language" />
      </SelectTrigger>
      <SelectContent align="end" side="bottom">
        {languageOptions?.map(({ _id, value, flag }, index) => (
          <SelectItem
            key={_id}
            value={value}
            className={"flex flex-row gap-1 items-center"}
          >
            <img
              src={flag()}
              alt={t(`languageOptions.${index}.label`)}
              className="w-6 h-auto inline-block"
            />{" "}
            <span className="countryName">
              {t(`languageOptions.${index}.label`)}
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default LanguageSelect;
