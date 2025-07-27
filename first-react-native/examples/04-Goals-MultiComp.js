import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './04-GoalItem';
import GoalInput from './04-GoalInput';

export default function App() {  
  const [goalsList, updateGoalsList] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showAddGoal()
  {
    setModalIsVisible(true);
  }
  function hideAddGoal()
  {
    setModalIsVisible(false);    
  }

  function addGoalHandler(goalText)
  {
    //console.log(goalText)
    updateGoalsList(currentGoals => [...currentGoals, {id: Math.random().toString(), name:goalText}]) // React's state updates are asynchronous
    setModalIsVisible(false);
  }

  function deleteItemHandler(id)
  {
    updateGoalsList((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    })
  }

  const renderFlatItem = ({ item, index }) => (
    <View style={styles.item}>
      {/* Displaying the index and item details */}
      <Text>{`Index: ${index}, Name: ${item.name}`}</Text>
    </View>
  );
  return (
    <>
    <StatusBar style='dark' />
    <View style={styles.appContainer}>
      <Button title='New Goal' onPress={showAddGoal} />
      
      <GoalInput onAddGoal={addGoalHandler} onHideGoal={hideAddGoal} visible={modalIsVisible} />      
      
      <View style={styles.goalsContainer}>
      <FlatList data={goalsList} renderItem={(itemData) => {       
        return <GoalItem name={itemData.item.name} id={itemData.item.id} index={itemData.index}
         onDeleteItem={deleteItemHandler}/> // or name={itemData.item.name}
      }}
      keyExtractor={(item, index) => {
        return item.id;
      }}
      
      alwaysBounceVertical={false} />                  
      </View>
      
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1, // Parent container occupying the all available space on screen, what if you remove/comment it?
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    //backgroundColor: '#d2a799'
    
  },  
  goalsContainer: {  
    // The ScrollView content container will automatically expand as the goalsList grows
    flex: 5,
    marginTop: 16,
    
  },  
});
