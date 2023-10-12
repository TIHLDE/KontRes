import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker as MuiDateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { nbNO } from "@mui/x-date-pickers/locales";
import dayjs from "dayjs";

interface DateTimePickerProps {
  title: string;
  value: dayjs.Dayjs;
  setValue: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>;
}

export const DateTimePicker = ({
  title,
  value,
  setValue,
}: DateTimePickerProps) => {
  return (
    <LocalizationProvider
      localeText={
        nbNO.components.MuiLocalizationProvider.defaultProps.localeText
      }
      dateAdapter={AdapterDayjs}
    >
      <MuiDateTimePicker
        label={title}
        value={value}
        ampm={false}
        onChange={(newValue) => {
          setValue(dayjs(newValue));
        }}
      />
    </LocalizationProvider>
  );
};
