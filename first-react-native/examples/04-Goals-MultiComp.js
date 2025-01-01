import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import GoalItem from './04-GoalItem';
import GoalInput from './04-GoalInput';

export default function App() {  
  const [goalsList, updateGoalsList] = useState([]);  

  function addGoalHandler(goalText)
  {
    //console.log(goalText)
    updateGoalsList(currentGoals => [...currentGoals, {id: Math.random().toString(), name:goalText}]) // React's state updates are asynchronous
  }

  const renderFlatItem = ({ item, index }) => (
    <View style={styles.item}>
      {/* Displaying the index and item details */}
      <Text>{`Index: ${index}, Name: ${item.name}`}</Text>
    </View>
  );
  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />      
      
      <View style={styles.goalsContainer}>
      <FlatList data={goalsList} renderItem={(itemData) => {       
        return <GoalItem name={itemData.item.name} id={itemData.item.id} index={itemData.index}/> // or name={itemData.item.name}
      }}
      keyExtractor={(item, index) => {
        return item.id;
      }}
      
      alwaysBounceVertical={false} />                  
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
});
