// BarChartComponent.js
import React from 'react';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions, Text, View } from 'react-native';
import { styles } from '../styles/styles';

const BarChartComponent = ({ roomData }: { roomData: any }) => {
  const screenWidth = Dimensions.get('window').width;
  
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 20 }}>Biểu đồ tháng trước</Text>
      <BarChart
        data={roomData}
        width={screenWidth * 0.9} // Chiều rộng của biểu đồ
        height={220} // Chiều cao của biểu đồ
        chartConfig={{
          backgroundColor: '#ffffff', // Màu nền cho biểu đồ cột
          backgroundGradientFrom: '#ff6347', // Màu gradient cho nền
          backgroundGradientTo: '#ff7f50', // Màu gradient cho nền
          decimalPlaces: 0, // Không hiển thị chữ số thập phân
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // Màu của cột
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // Màu của nhãn
          style: {
            borderRadius: 16, // Góc bo tròn cho biểu đồ
          },
          barPercentage: 0.4, // Điều chỉnh độ rộng của cột (0.4 là một giá trị nhỏ hơn)
        }}
        yAxisLabel="" // Dấu hiệu tiền tệ hoặc đơn vị mà bạn muốn hiển thị trên trục y
        yAxisSuffix="k" // Suffix để hiển thị đơn vị, ví dụ: "k" cho nghìn
      />
    </View>
  );
};

export default BarChartComponent;
