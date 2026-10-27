import React, { useState } from 'react';
import { View, Button, Text, Alert, StyleSheet } from 'react-native';

interface CustomError {
  statusCode: number;
  message: string;
}

export const Bai12_ApiErrorHandling = () => {
  const [log, setLog] = useState<string>('Bấm nút để kích hoạt request lỗi.');

  const requestWithWrongUrl = async (): Promise<void> => {
    try {
      setLog('Đang gửi request đến URL sai...');
      const response = await fetch('https://jsonplaceholder.typicode.com/invalid-endpoint-404');

      if (!response.ok) {
        const errorData: CustomError = {
          statusCode: response.status,
          message: 'Không tìm thấy tài nguyên trên server (404 Not Found)',
        };
        throw errorData;
      }
    } catch (error: unknown) {
      const err = error as CustomError;
      const message = err.message || 'Lỗi mạng hoặc server không phản hồi';
      const code = err.statusCode || 500;

      Alert.alert(`Lỗi hệ thống [${code}]`, message);
      setLog(`Bắt lỗi thành công: [Mã: ${code}] - ${message}`);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Gửi API request sai URL" onPress={requestWithWrongUrl} color="#dc3545" />
      <Text style={styles.logText}>{log}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  logText: {
    marginTop: 16,
    color: '#555',
    fontSize: 14,
    lineHeight: 20,
  },
});