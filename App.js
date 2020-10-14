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
  Platform
} from 'react-native'

const { height, width } = Dimensions.get('window')

export default function App() {

  const onButtonPress = () => {
    // console.log(`${new Date().toLocaleTimeString()} - button press...`);
    Alert.alert(`${new Date().toLocaleTimeString()} - button press...`);
  }

  return (
    <View style={{ padding: 50 }}>
      <ActivityIndicator size='large' color='#61DBFB'/>
      {Platform.OS === 'ios' && <ProgressViewIOS progress={0.5}/>}
      {Platform.OS === 'android' && <ProgressBarAndroid progress={0.5} styleAttr='Horizontal' indeterminate='false' color='blue'/>}
      <Button title='click me' onPress={onButtonPress}/>
      <Text>OS: {Platform.OS}</Text>
      <Text>Height: {height}</Text>
      <Text>Width: {width}</Text>
    </View>
  );
}