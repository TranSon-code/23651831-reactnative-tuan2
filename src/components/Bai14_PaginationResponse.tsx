import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

interface ApiResponse<T> {
  data: T[];
  total: number;
  page: number;
}

interface Book {
  id: number;
  name: string;
  author: string;
}

const mockBookDatabase: Book[] = [
  { id: 1, name: 'Lập trình Cơ bản', author: 'Tác giả A' },
  { id: 2, name: 'Cấu trúc dữ liệu', author: 'Tác giả B' },
  { id: 3, name: 'Thiết kế hệ thống', author: 'Tác giả C' },
  { id: 4, name: 'Nhập môn React Native', author: 'Tác giả D' },
  { id: 5, name: 'TypeScript nâng cao', author: 'Tác giả E' },
  { id: 6, name: 'Kiểm thử phần mềm', author: 'Tác giả F' },
];

export const Bai14_PaginationResponse = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 2;

  const fetchPagedBooks = (page: number): ApiResponse<Book> => {
    const start = (page - 1) * pageSize;
    const pagedItems = mockBookDatabase.slice(start, start + pageSize);

    return {
      data: pagedItems,
      total: mockBookDatabase.length,
      page: page,
    };
  };

  const response: ApiResponse<Book> = fetchPagedBooks(currentPage);
  const totalPages = Math.ceil(response.total / pageSize);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Trang {response.page} / {totalPages} (Tổng số: {response.total} sách)
      </Text>

      <FlatList
        data={response.data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.author}>Tác giả: {item.author}</Text>
          </View>
        )}
      />

      <View style={styles.paginationButtons}>
        <Button
          title="Trang trước"
          disabled={currentPage === 1}
          onPress={() => setCurrentPage(currentPage - 1)}
        />
        <Button
          title="Trang sau"
          disabled={currentPage === totalPages}
          onPress={() => setCurrentPage(currentPage + 1)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  card: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 6,
    marginBottom: 8,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  author: {
    color: '#666',
    marginTop: 4,
  },
  paginationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
});