//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to React Native @ PUGC!</Text>
      <Text>this is another text inside view component</Text>

      <View style={nestedStyle.container}>
        <Text style={nestedStyle.text}>I am inside a nested view.</Text>
        <Text style={ {color:'violet', fontSize: 18} }>I am violet text</Text>
      </View>      

      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

// Origin (0,0) point in our mobile screen is top left.
// 0,0 -> horizontal
// downward from 0,0 is verticle
const styles = StyleSheet.create({
  container: {
    flex: 1, // take all the available space on the screen/parent-container 
    // by default flexDirection is column, it can be row as well
    // flexDirection: 'row' => main-axis will be horizontal, and cross-axis is verticle
    // flexDirection tells which is the main-axis of your app? perpendicular to this is cross-axis    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const simpleStyle = StyleSheet.create({
  flex: 1,
  backgroundColor: '#123',
  alignItems: 'center',
  justifyContent: 'center',
});

const nestedStyle = StyleSheet.create({
  container: {
    backgroundColor: '#111366',  
  },
  text: {
    color: 'white', // Applied to the Text component
  },
});
