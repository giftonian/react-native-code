import {Text,TextInput, View, Button, StyleSheet} from 'react-native';
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
        <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your life goal!"
        onChangeText={goalInputHandler} value={goalText} />
        <Button title="Add a Goal" onPress={addAGoal} />
      </View>
    )
}

export default GoalInput;

const styles = StyleSheet.create({    
    inputContainer: { 
      flex: 1,   
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center', // what if you comment/remove it?
      marginBottom: 24,
      borderBottomWidth: 2,
      borderBottomColor: '#aa7699'
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#543256',
      width: '70%',
      marginRight: 8,
      padding: 8
    },   
  });
  