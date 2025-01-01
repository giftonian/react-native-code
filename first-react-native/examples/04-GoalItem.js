import {View, Text, StyleSheet } from "react-native";

function GoalItem(props) // props
{
    return (
        <View style={styles.goalItem}>
        <Text style={styles.goalItemText}>
        {`${props.index} - ${props.name}`} 
        </Text>
      </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        backgroundColor: '#6A1610', // Green background for each goal item
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

});