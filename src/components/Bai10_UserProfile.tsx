import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

interface UserAddress {
  street: string;
  suite: string;
  city: string;
}

interface UserDetail {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address?: UserAddress;
}

export const Bai10_UserProfile = () => {
  const [user, setUser] = useState<UserDetail | null>(null);

  const fetchUser = () => {
    setUser(null);
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((res) => res.json())
      .then((data: UserDetail) => setUser(data));
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (!user) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Chưa có dữ liệu người dùng...</Text>
        <Button title="Tải thông tin" onPress={fetchUser} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chi tiết người dùng</Text>
      <Text style={styles.info}>Họ tên: {user?.name}</Text>
      <Text style={styles.info}>Tên đăng nhập: {user?.username}</Text>
      <Text style={styles.info}>Email: {user?.email}</Text>
      <Text style={styles.info}>Điện thoại: {user?.phone}</Text>
      <Text style={styles.info}>Website: {user?.website}</Text>
      <Text style={styles.info}>
        Địa chỉ: {user?.address?.street}, {user?.address?.city}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    padding: 30,
    alignItems: 'center',
  },
  emptyText: {
    marginBottom: 12,
    color: '#888',
    fontSize: 14,
  },
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  info: {
    fontSize: 14,
    marginBottom: 6,
    color: '#333',
  },
});