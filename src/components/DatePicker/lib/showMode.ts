import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

const showMode = (
  setDate: (value: Date | undefined) => void,
  date?: Date,
) => {
  const currentDate = date ? new Date(date) : new Date();

  DateTimePickerAndroid.open({
    value: currentDate,
    onChange: (_, selectedDate) => setDate(selectedDate),
    mode: 'date',
    is24Hour: true,
  });
}

export { showMode }