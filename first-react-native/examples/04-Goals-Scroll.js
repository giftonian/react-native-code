import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [goalText, setGoalText] = useState("");
  const [goalsList, updateGoalsList] = useState([]);

  function goalInputHandler(inputText) 
  {
    //console.log(inputText)
    setGoalText(inputText)    
  }

  function addGoalHandler()
  {
    //console.log(goalText)
    updateGoalsList(currentGoals => [...currentGoals, goalText]) // React's state updates are asynchronous
    setGoalText("");
    // console.log(goalsList)
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your course goal!"
        onChangeText={goalInputHandler} value={goalText} />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      
      <View style={styles.goalsContainer}>
      <ScrollView>
        {goalsList.map((goal, index) => (
          <View key={index} style={styles.goalItem}>
            <Text style={styles.goalItemText}>{goal}</Text>
          </View>
        ))}
      </ScrollView>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1, // Parent container occupying the all available space on screen, what if you remove/comment it?
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: { 
    flex: 1,   
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // what if you comment/remove it?
    marginBottom: 24,
    borderBottomWidth: 2,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {  
    // The ScrollView content container will automatically expand as the goalsList grows
    flex: 5,
    
  },

  goalItem: {
    backgroundColor: '#4CAF50', // Green background for each goal item
    marginBottom: 12,  // Space between goals
    padding: 12,
    borderRadius: 8, // Rounded corners for the goal items
    flexDirection: 'row', 
    alignItems: 'center',    
  },

  goalItemText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});
