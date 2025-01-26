import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

const showMode = (date: string, setDate: Function) => {
  const currentDate = date ? new Date(date) : new Date();

  DateTimePickerAndroid.open({
    value: currentDate,
    onChange: (_, selectedDate) => setDate(selectedDate ? selectedDate.toString() : ''),
    mode: 'date',
    is24Hour: true,
  });
}

export { showMode }