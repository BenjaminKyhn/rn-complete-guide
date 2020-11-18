import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <TextInput
            placeholder="Course goal"
            style={{width: '80%', borderColor: 'black', borderWidth: 1, padding: 10}}/>
        <Button title="ADD"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
