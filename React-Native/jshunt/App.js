import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})

export default function App() {
  return (
      <View style={styles.container}>
        <Text>Bem Vindo ao React-Native</Text>
        <Text style={styles.welcome}>Olá Looknet!</Text>
      </View>
    );
  }
