import {View, Text, StyleSheet, Pressable } from "react-native";

function GoalItem(props) // props
{
  function deleteListItem()
  {
    props.onDeleteItem(props.id);
  }
    return (
        <Pressable onPress={(deleteListItem)} android_ripple={{color: '#dddddd'}}
         style={({pressed}) => pressed && styles.pressedItem}>
        <View style={styles.goalItem}>
        <Text style={styles.goalItemText}>
        {`${props.index} - ${props.name}`} 
        </Text>
        </View>
        </Pressable>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        backgroundColor: '#22ad77', // background for each goal item
        marginBottom: 12,  // Space between goals
        padding: 12,
        borderRadius:14, // Rounded corners for the goal items
        flexDirection: 'row', 
        alignItems: 'center',    
      },
    
    goalItemText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    },

    pressedItem: {
      opacity: 0.5,
    },

});