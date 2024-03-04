import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shop Scanner App </Text>
      <Button style={styles.buttonStyle} title="Start Scan" onPress={() => navigation.navigate('Scanner')} />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#007bff',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonStyle: {
    position: 'absolute',
    bottom: 20, // Position 20px from the bottom
    left: 50,

  },
});