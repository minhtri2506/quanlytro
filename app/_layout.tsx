import { Stack, useRouter, usePathname } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

export default function RootLayout() {
  const router = useRouter(); // Sử dụng router để điều hướng
  const pathname = usePathname(); // Lấy đường dẫn của màn hình hiện tại

  const handleLogout = async () => {
    try {
      // Xoá thông tin đăng nhập khỏi AsyncStorage
      await AsyncStorage.removeItem('isLogin');
      console.log('Đăng xuất thành công');
      
      // Điều hướng về màn hình đăng nhập
      router.replace('/login');
    } catch (error) {
      console.error('Lỗi khi đăng xuất: ', error);
    }
  };

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        // Chỉ hiển thị headerRight khi không phải màn hình "login"
        headerRight: () => (
          pathname !== '/login' && (
            <TouchableOpacity onPress={handleLogout} style={{ paddingRight: 10 }}>
              <Ionicons name="log-out-outline" size={24} color="#fff" />
            </TouchableOpacity>
          )
        ),
      }}>
      <Stack.Screen name="login" options={{ title: 'Đăng nhập' }} />
      <Stack.Screen name="index" options={{ title: 'Trang chủ' }} />
      <Stack.Screen name="(home)/room" options={{title: 'Phòng' }} />
    </Stack>
  );
}
