import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles } from '../styles/styles';

export default function CreateRoomScreen() {
  return (
    <View style={styles.pd16}>
      <Text style={styles.headerText}>Create New Room</Text>
      <TextInput style={styles.input} placeholder="Enter Room Name" />
      <Button title="Save" onPress={() => console.log('Room Created')} />
    </View>
  );
}
