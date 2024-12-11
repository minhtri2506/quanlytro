// src/screens/RoomScreen.tsx

import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { styles } from '../styles/styles'; // Import styles

interface Room {
  id: string;
  name: string;
  status: string;
}

export default function RoomScreen() {
  const [data, setData] = useState<Room[]>([
    { id: '1', name: 'Room 1', status: 'Available' },
    { id: '2', name: 'Room 2', status: 'Occupied' },
    { id: '3', name: 'Room 3', status: 'Available' },
  ]);

  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  const renderItem = ({ item }: { item: Room }) => (
    <View style={styles.row}>
      <Text>{item.name}</Text>
      <Text>{item.status}</Text>
    </View>
  );

  return (
    <View style={styles.pd16}>
      <Button title="Click Me" onPress={handleButtonClick} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.table}
      />
    </View>
  );
}
