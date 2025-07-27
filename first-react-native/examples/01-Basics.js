//import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
    const [textColor, setTextColor] = useState('green');
    
    function setColor()
    {
        setTextColor(textColor === 'red' ? 'green' : 'red'); // there are other ways to update the state variable
    }
  return (
    <View style={styles.container}>
      <Text style={ { color: textColor} }>Welcome to React Native @ PUGC!!</Text>
      <Text>this is another text inside view component</Text> 
      <Button 
        title='Toggle Color'
        onPress={setColor} 
      />     
      <View style={nestedStyle.container}>
        <Text style={nestedStyle.text}>I am inside a nested view</Text>
        <Text style={ {color:'violet', fontSize: 18} }>I am violet text...</Text>
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'orange',
  },
});

const simpleStyle = StyleSheet.create({
  // flex Controls the size of an item relative to others.
  flex: 1, //Item takes up equal space with other items
  backgroundColor: '#123',
  alignItems: 'center',
  justifyContent: 'center',
});

const nestedStyle = StyleSheet.create({
  container: {
    backgroundColor: '#111366',
    margin: 8,
    padding: 8,  
    borderWidth: 4,
    borderColor: 'red',
  },
  text: {
    color: 'white', // Applied to the Text component
  },
});
