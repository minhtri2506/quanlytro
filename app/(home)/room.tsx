import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, Button, FlatList } from 'react-native';
import { styles } from '../styles/styles';

interface Room {
  id: string;
  name: string;
  status: string;
}

export default function RoomScreen() {
  const router = useRouter();
  const [data, setData] = useState<Room[]>([
    { id: '1', name: 'Room 1', status: 'Available' },
    { id: '2', name: 'Room 2', status: 'Occupied' },
    { id: '3', name: 'Room 3', status: 'Available' },
  ]);

  const handleButtonClick = () => {
    router.push('/createRoom');
  };

  const renderItem = ({ item }: { item: Room }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.name}</Text>
      <Text style={[styles.cell, styles.lastCell]}>{item.status}</Text>
    </View>
  );

  return (
    <View style={styles.pd16}>
      <View style={styles.button}>
        <Button title="Thêm phòng" onPress={handleButtonClick} />
      </View>
      {/* Table Header */}
      <View style={[styles.row, styles.header]}>
        <Text style={styles.cell}>Room Name</Text>
        <Text style={[styles.cell, styles.lastCell]}>Status</Text>
      </View>
      {/* Table Body */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.table}
      />
    </View>
  );
}
