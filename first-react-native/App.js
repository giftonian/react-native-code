//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to React Native @ PUGC!</Text>
      <Text>this is another text inside view component</Text>

      <View style={nestedStyle.container}>
        <Text style={nestedStyle.text}>I am inside a nested view</Text>
        <Text style={ {color:'violet', fontSize: 18} }>I am violet text</Text>
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
