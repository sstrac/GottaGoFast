import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      flexDirection: 'column'
    },
    screen: {
      flex: 1,
      flexGrow: 1,
      paddingTop: 60
    },
    banner: {
      paddingLeft: 25,
      paddingBottom: 20,
      fontSize: 30,
      fontStyle: 'italic',
      fontFamily: 'Trebuchet MS'
    },
    scrollview: {
      alignItems: 'center'
    },
    centeredText: {
      textAlign: 'center',
      width: '100%',
      padding: 8
    },
    rightAlignedText: {
      textAlign: 'right',
      width: '100%',
      padding: 8
    },
    toolbar: {
      backgroundColor: 'grey',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      height: 80,
      width: '100%',
    },
    button: {
      backgroundColor: 'grey',
      height: 50,
      padding: 10,
      justifyContent: 'center',
      flexGrow: 1
    },
    buttonText: {
      fontSize: 20,
      fontFamily: 'Trebuchet MS',
      textAlign: 'center'
    }
  });  