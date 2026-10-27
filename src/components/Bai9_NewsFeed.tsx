import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

interface TodoPost {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const Bai9_NewsFeed = () => {
  const [posts, setPosts] = useState<TodoPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data as TodoPost[]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.title}>#{item.id} - {item.title}</Text>
          <Text style={item.completed ? styles.done : styles.pending}>
            Trạng thái: {item.completed ? 'Hoàn thành' : 'Chưa xong'}
          </Text>
        </View>
      )}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  center: {
    padding: 30,
    alignItems: 'center',
  },
  list: {
    padding: 16,
  },
  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 4,
  },
  done: {
    fontSize: 12,
    color: '#28a745',
  },
  pending: {
    fontSize: 12,
    color: '#dc3545',
  },
});