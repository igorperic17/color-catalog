import React, { useState } from 'react'
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

import ColorButton from './components/ColorButton';

const { height, width } = Dimensions.get('window')

export default function App() {

  const [ backColor, setBackColor ] = useState('blue')


  const onButtonPress = () => {
    // console.log(`${new Date().toLocaleTimeString()} - button press...`);
    Alert.alert(`${new Date().toLocaleTimeString()} - button press...`);
  };

  return (
    <View style={[styles.container, { padding: 50, backgroundColor: backColor }]}>
      <ActivityIndicator size='large' color='#61DBFB'/>
      {Platform.OS === 'ios' && <ProgressViewIOS progress={0.5}/>}
      {Platform.OS === 'android' && <ProgressBarAndroid progress={0.5} styleAttr='Horizontal' indeterminate='false' color='blue'/>}
      <Button title='click me' onPress={onButtonPress}/>

      <View style={{flex:1, alignItems:'center', padding:10}}>
        <Text>OS: {Platform.OS}</Text>
        <Text>Height: {height}</Text>
        <Text>Width: {width}</Text>
      </View>

      <View style={styles.bottomView}>
        <ColorButton color='red' text='Red' press={() => { setBackColor('red') }}></ColorButton>
        <ColorButton color='green' text='Green' press={() => { setBackColor('green') }}></ColorButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0,0,200,0.1)'
  },
  bottomView: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-end'
  }
});