import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function ToolbarButton(props) {
  return (
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{props.text}</Text>
      </TouchableOpacity>
  );
}
