// StatisticalScreen.js
import React from 'react';
import { ScrollView, View } from 'react-native';
import LineChartComponent from './LineChartComponent'; // Import component LineChart
import BarChartComponent from './BarChartComponent'; // Import component BarChart
import { styles } from '../styles/styles';

export default function StatisticalScreen() {
  // Dữ liệu giả lập cho 12 tháng
  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'], // Nhãn cho các tháng
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 55, 10, 34, 40, 60, 70], // Dữ liệu thống kê cho mỗi tháng
        strokeWidth: 2, // Độ dày đường vẽ
      },
    ],
  };

  // Dữ liệu cho thống kê tháng hiện tại của 8 phòng
  const roomData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8'], // Tên các phòng
    datasets: [
      {
        data: [50, 80, 65, 45, 90, 75, 60, 55], // Dữ liệu giả lập cho từng phòng
      },
    ],
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Biểu đồ thống kê 12 tháng */}
      <LineChartComponent data={data} />

      {/* Biểu đồ hình cột thống kê tháng hiện tại của 8 phòng */}
      <BarChartComponent roomData={roomData} />
    </ScrollView>
  );
}
