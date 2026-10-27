import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export const Bai15_PullToRefresh = () => {
  const [data, setData] = useState<string[]>([
    'Bản tin số 1',
    'Bản tin số 2',
    'Bản tin số 3',
  ]);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      const timestamp = new Date().toLocaleTimeString();
      setData([
        `Bản tin mới (${timestamp})`,
        'Bản tin số 1',
        'Bản tin số 2',
      ]);
      setRefreshing(false);
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.guide}>Kéo danh sách xuống dưới để làm mới dữ liệu</Text>
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item}</Text>
          </View>
        )}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  guide: {
    fontSize: 13,
    color: '#666',
    marginBottom: 10,
    fontStyle: 'italic',
  },
  item: {
    padding: 16,
    backgroundColor: '#f1f3f5',
    borderRadius: 8,
    marginBottom: 8,
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
  },
});