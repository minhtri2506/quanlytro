import AsyncStorage from '@react-native-async-storage/async-storage';
import { router, Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, ActivityIndicator } from 'react-native';
import LoadingIndicator from '../components/LoadingIndicator';

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const isLogin = await AsyncStorage.getItem('isLogin');
      
      if (!isLogin || isLogin !== 'true') {
        router.replace('/login');
      } else {
        setIsLoading(false);  // Đặt lại trạng thái loading khi kiểm tra xong
      }
    };

    checkLoginStatus();
  }, []);

  const navigateToScreen1 = () => {
    router.push('/room');
  };

  const navigateToScreen2 = () => {
    router.push('/');
  };

  if (isLoading) {
    return (
      <LoadingIndicator />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Go to Screen 1" onPress={navigateToScreen1} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Go to Screen 2" onPress={navigateToScreen2} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  buttonContainer: {
    padding: 10,
  },
});
