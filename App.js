import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function App() {

  function onPressExplode() {
    alert('Bang!')
  }

  return (
    <View style={styles.container}>
      <Text>It's alive!</Text>
      <Button
        style={styles.button}
        onPress={onPressExplode}
        title='Explode'
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {

  },
});
