import { Stack, useRouter, usePathname } from 'expo-router';
import { TouchableOpacity, Platform } from 'react-native'; // Import Platform từ react-native
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

  // if (Platform.OS === 'web') {
    // Nếu đang chạy trên web, return null để không render layout mobile
    // return null;
  // }

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
        headerLeft: () => (
          // Chỉ hiển thị nút back nếu không phải là màn hình /login hoặc /
          pathname !== '/login' && pathname !== '/' && (
            <TouchableOpacity 
              onPress={() => {
                // Kiểm tra xem có thể quay lại không, nếu không thì điều hướng về trang chủ
                if (router.canGoBack()) {
                  router.back();
                } else {
                  router.replace('/');
                }
              }} 
              style={{ paddingLeft: 10 }}>
              <Ionicons name="arrow-back-outline" size={24} color="#fff" />
            </TouchableOpacity>
          )
        ),
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
      <Stack.Screen name="(home)/createRoom" options={{title: 'Tạo phòng' }} />
      <Stack.Screen name="(home)/statistical" options={{title: 'Thống Kê Doanh Thu' }} />
    </Stack>
  );
}
