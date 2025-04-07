import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import Cookies from "js-cookie";
import { CalendarIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  enUS,
  es,
  fr,
  de,
  id,
  ja,
  ms,
  pl,
  th,
  vi,
  zhCN,
  zhHK,
} from "date-fns/locale";

function DatePicker({
  wrapper = "",
  label = "",
  labelClass = "",
  date,
  setDate,
}) {
  const { t } = useTranslation();
  const currentLanguage = Cookies.get("i18next");
  let locale = enUS;

  switch (currentLanguage) {
    case "en":
      locale = enUS;
      break;
    case "es":
      locale = es;
      break;
    case "fr":
      locale = fr;
      break;
    case "gm":
      locale = de;
      break;
    case "id":
      locale = id;
      break;
    case "jp":
      locale = ja;
      break;
    case "ms":
      locale = ms;
      break;
    case "ph":
      locale = pl;
      break;
    case "th":
      locale = th;
      break;
    case "vi":
      locale = vi;
      break;
    case "zhcn":
      locale = zhCN;
      break;
    case "zhhk":
      locale = zhHK;
      break;
    default:
      locale = enUS; // Default to English if the selected language is not supported
  }

  return (
    <div className={cn("w-full flex items-center gap-2", wrapper)}>
      {label && (
        <span className={cn("label whitespace-nowrap", labelClass)}>
          {label}
        </span>
      )}
      <Popover>
        <PopoverTrigger className="" asChild>
          <Button
            variant="datepicker"
            size="datepicker"
            className={cn(
              "justify-start text-left font-normal w-full h-[3.125rem] bg-neutral-50 py-3.5 px-4 rounded-xl border border-neutral-300"
            )}
          >
            <CalendarIcon />
            <span className="flex-1">
              {date ? format(date, "PPP") : t("form.pickADate")}
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default DatePicker;
