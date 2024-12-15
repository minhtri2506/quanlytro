// LineChartComponent.js
import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions, Text, View } from 'react-native';
import { styles } from '../styles/styles';

const LineChartComponent = ({ data }: { data: any }) => {
  const screenWidth = Dimensions.get('window').width;
  
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Biểu đồ 12 tháng</Text>
      <LineChart
        data={data}
        width={screenWidth * 0.9} // Chiều rộng của biểu đồ
        height={220} // Chiều cao của biểu đồ
        chartConfig={{
          backgroundColor: '#ffffff', // Màu nền cho biểu đồ tháng hiện tại
          backgroundGradientFrom: '#4caf50', // Màu gradient cho nền
          backgroundGradientTo: '#66bb6a', // Màu gradient cho nền
          decimalPlaces: 0, // Số chữ số thập phân
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // Màu của đường biểu đồ
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // Màu của nhãn
          style: {
            borderRadius: 16, // Góc bo tròn cho biểu đồ
          },
        }}
        yAxisLabel="" // Dấu hiệu tiền tệ hoặc đơn vị mà bạn muốn hiển thị trên trục y
        yAxisSuffix="k" // Suffix để hiển thị đơn vị, ví dụ: "k" cho nghìn
        bezier // Sử dụng đường cong Bezier
      />
    </View>
  );
};

export default LineChartComponent;
