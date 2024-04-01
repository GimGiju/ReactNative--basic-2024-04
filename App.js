import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Image, Text, View } from 'react-native';
import HelloWorld from './components/HelloWorld';
import Cat from './components/Cat';
import State from './components/State';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png', width: 32, height: 32,
};

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    //   <HelloWorld />
    // </View>
    <ScrollView>
      <State name='Run Rum Rugger' />
      <Image source={logo} />
      <Cat name='Maru' num='1' />
      <Cat name='Run Rum Rugger' num='2' />
      <Image source={logo} />
      <HelloWorld />
    </ScrollView>
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
