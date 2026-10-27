import React, { useState } from 'react';
import { View, TextInput, Text, FlatList, StyleSheet } from 'react-native';

interface Student {
  id: number;
  name: string;
  major: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
}

function filterByName<T extends { name: string }>(items: T[], keyword: string): T[] {
  return items.filter((item) =>
    item.name.toLowerCase().includes(keyword.toLowerCase().trim())
  );
}

export const Bai13_FilteredListGeneric = () => {
  const [keyword, setKeyword] = useState<string>('');

  const students: Student[] = [
    { id: 1, name: 'Nguyễn Văn An', major: 'Công nghệ thông tin' },
    { id: 2, name: 'Trần Thị Bình', major: 'Kỹ thuật phần mềm' },
    { id: 3, name: 'Lê Văn Cường', major: 'Khoa học máy tính' },
  ];

  const products: Product[] = [
    { id: 101, name: 'Bàn phím cơ', price: 1200000 },
    { id: 102, name: 'Chuột không dây', price: 650000 },
    { id: 103, name: 'Màn hình máy tính', price: 3500000 },
  ];

  const filteredStudents = filterByName<Student>(students, keyword);
  const filteredProducts = filterByName<Product>(products, keyword);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nhập tên để lọc danh sách..."
        value={keyword}
        onChangeText={setKeyword}
      />

      <Text style={styles.header}>Sinh viên ({filteredStudents.length})</Text>
      <FlatList
        data={filteredStudents}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>• {item.name} - {item.major}</Text>
        )}
      />

      <Text style={[styles.header, { marginTop: 16 }]}>
        Sản phẩm ({filteredProducts.length})
      </Text>
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>• {item.name} - {item.price} VND</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    marginBottom: 16,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  item: {
    paddingVertical: 4,
    fontSize: 14,
    color: '#333',
  },
});