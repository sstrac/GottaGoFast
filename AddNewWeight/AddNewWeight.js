import { View, Text, Button, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { styles } from './styles';
import DatePicker from 'react-native-date-picker'
import { useState } from 'react';

/**
 * Should be a popup
 */
export default function AddNewWeight() {
  const [datePickerOpen, setDatePickerOpen] = useState(false)
  const [date, setDate] = useState(new Date())
  const [weight, setWeight] = useState('')

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.container}>
      <DatePicker
      modal
      open={datePickerOpen}
      date={date}
      on
      onConfirm={(date) => {
        setDatePickerOpen(false)
        setDate(date)
      }}
      ></DatePicker>
      <TextInput 
      style={{backgroundColor: 'orange', borderRightWidth: 50, padding: 0}}
      value={weight}
      onChangeText={(text) => {setWeight(Number(text))}}
      keyboardType="numeric"
      ></TextInput>
      <Button title="Update Weight" onPress={() => updateWeightData(date, weight)}></Button>
    </View>
    </TouchableWithoutFeedback>
  );
}