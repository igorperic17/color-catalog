import React from 'react'
import { 
  Text, 
  View, 
  ActivityIndicator, 
  ProgressViewIOS, 
  ProgressBarAndroid,
  Button,
  Alert,
  Dimensions,
  Platform,
  TouchableHighlight,
  StyleSheet
} from 'react-native'

export default function ColorButton({ color, text, press }) {
    return (
      <TouchableHighlight underlayColor='yellow' 
        style={styles.buttonHighlight}  
        onPress={()=>{press()}}>
        <View backgroundColor={ color } style={styles.button}>
          <Text>{text}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  const styles = StyleSheet.create({
    buttonHiglight: {
      margin: 10,
      flex: 1,
      alignItems: 'center',
      flexDirection: 'column',
      alignContent: 'center',
    },
    button: {
      flex: 0,
      margin: 10,
      height: 40,
      borderColor: 'black',
      borderRadius: 20,
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });