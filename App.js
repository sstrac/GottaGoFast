import { View, Text, Button, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, ScrollView } from 'react-native';
import DefaultLineChart from './LineChart/DefaultLineChart';
import { styles } from './styles';
import { useState } from 'react';
import ToolbarButton from './ToolbarButton';

export default function App() {
  const [date, setDate] = useState(new Date())
  const [weight, setWeight] = useState(0)

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} style={styles.container}>
      <View style={styles.screen}>

        <Text style={styles.banner}>Gotta Go Fast</Text>
        <Text style={styles.rightAlignedText}>{date.toDateString()}</Text>
        <Text style={[styles.centeredText, {fontSize: 18}]}>Weight</Text>
        <Text style={[styles.centeredText, {fontSize: 35}]}>{`${weight}kg`}</Text>
        <ScrollView contentContainerStyle={styles.scrollview}>
          
          <DefaultLineChart
            labels={['03/01', '03/08, 03/16']}
            values={[61, 60, 58.8]}>
          </DefaultLineChart>
        </ScrollView>

        <View style={styles.toolbar}>
          <ToolbarButton text='Me'></ToolbarButton>
          <ToolbarButton text='Edit'></ToolbarButton>
        </View>

      </View>
    </TouchableWithoutFeedback>
  );
}

function getDateAndMonth(date) {
  return `${date.getDate()}/${date.getMonth() + 1}`
}

