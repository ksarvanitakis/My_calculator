import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InputField from './Components/InputField';
import ResultField from './Components/ResultField';

export default function App() {
  return (
    <View style={styles.container}>
      <InputField  value={'first number'} />
      <InputField  value={'second number'} />
      <ResultField />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
