import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function App() {
    return (
        <View style={styles.mainBox}>
            <View
                style={styles.box1}>
                <Text style={styles.box1.boxText}>1</Text>
            </View>
            <View
                style={styles.box2}>
                <Text style={styles.box2.boxText}>2</Text>
            </View>
            <View
                style={styles.box3}>
                <Text style={styles.box3.boxText}>3</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  mainBox: {
    flex: 1, // to occupy all available space on the screen
    padding: 10,
    borderColor: 'red',
    borderWidth: 2,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column-reverse'
  },
  box1: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center', 
    
    boxText: {
      fontSize: 18,
      color: 'white'
    }
  }, 
  box2: {
    backgroundColor: 'green',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    
    boxText: {
      fontSize: 18,
      color: 'white'
    }
  }, 

  box3: {
    backgroundColor: 'blue',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',    

    boxText: {
      fontSize: 18,
      color: 'white'
    }
  }, 
});