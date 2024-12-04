//import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
    const [textColor, setTextColor] = useState('green');
    function setColor()
    {
        setTextColor(textColor === 'red' ? 'green' : 'red');
    }
  return (
    <>
    <View style={styles.box1}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='add todo here...'/>
        <Button title='Add Task' />
      </View>

      <View>
        <Text>List of goals</Text>
      </View>
    </View>
    <View style={styles.box2}>
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View style={{ flex: 1, backgroundColor: 'red' }} />
      <View style={{ flex: 2, backgroundColor: 'blue' }} >

      </View>
    </View>

    </View>
    </>
  );
}

const styles = StyleSheet.create({
  box1: {
    flex: 2,    
    padding: 50,
    borderWidth: 2,
    borderColor: 'red',    
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //alignItems: 'center',
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 4,
    padding: 4,
  },

  box2: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'green',
  }
});
