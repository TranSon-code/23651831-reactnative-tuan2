import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

interface ProductItem {
  id: number;
  title: string;
  price: number;
  category: string;
}

interface ProductApiResponse {
  products: ProductItem[];
  total: number;
  skip: number;
  limit: number;
}

export const Bai11_ProductSearch = () => {
  const [keyword, setKeyword] = useState<string>('phone');
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchProducts = async (query: string, limit: number): Promise<void> => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${query}&limit=${limit}`
      );
      const data: ProductApiResponse = await response.json();
      setProducts(data.products);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchRow}>
        <TextInput
          style={styles.input}
          placeholder="Nhập từ khóa..."
          value={keyword}
          onChangeText={setKeyword}
        />
        <Button
          title="Tìm"
          onPress={() => fetchProducts(keyword, 5)}
        />
      </View>

      {loading && <ActivityIndicator style={styles.loading} color="#007AFF" />}

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.meta}>Danh mục: {item.category}</Text>
            <Text style={styles.price}>Giá: ${item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  searchRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 10,
    height: 40,
  },
  loading: {
    marginVertical: 12,
  },
  card: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  meta: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  price: {
    fontSize: 14,
    color: '#28a745',
    fontWeight: '600',
    marginTop: 2,
  },
});