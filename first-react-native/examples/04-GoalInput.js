import {Text,TextInput, View, Button, StyleSheet, Modal, Image} from 'react-native';
import { useState } from 'react';

function GoalInput(props)
{
    const [goalText, setGoalText] = useState("");
    function goalInputHandler(inputText) 
    {
        //console.log(inputText)
        setGoalText(inputText)    
    }

    function addAGoal()
    {
        props.onAddGoal(goalText);
        setGoalText('');
    }

    return (
      <Modal visible={props.visible} animationType='slide'>
        <View style={styles.inputContainer}>
          <Image source={require("../assets/images/3d-target.png")} style={styles.image} />
        <TextInput style={styles.textInput} placeholder="Your life goal!"
        onChangeText={goalInputHandler} value={goalText} />
        <View style={styles.buttonContainer}>
        <View style={styles.button}><Button  title="Add a Goal" onPress={addAGoal} /></View>
        <View style={styles.button}><Button color="#f31282" title='Cancel' onPress={() => {
          props.onHideGoal()
        }}  /></View>
        </View>
        
        </View>
      </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({    
    inputContainer: { 
      flex: 1,   
      //flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center', // what if you comment/remove it?
      //marginBottom: 24,
      padding:16,
      backgroundColor: '#dddddd',
      //borderBottomWidth: 2,
      //borderBottomColor: '#aa7699'
    },
    textInput: {
      borderWidth: 2,
      borderColor: '#543256',
      borderRadius: 6,
      color: '#ffffff',
      backgroundColor: '#aaaaaa',
      width: '100%',
      padding: 8
    },

    buttonContainer: {
      flexDirection: 'row',
      marginTop: 10,
    },
    button: {
      width: '30%',
      marginHorizontal: 8,
    },

    image: {
      margin: 16,
    }
  });
  