import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type Gender = 'male' | 'female' | 'other';

export const Bai7_GenderSelector = () => {
  const [gender, setGender] = useState<Gender>('male');

  const options: { label: string; value: Gender }[] = [
    { label: 'Nam', value: 'male' },
    { label: 'Nữ', value: 'female' },
    { label: 'Khác', value: 'other' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chọn giới tính của bạn:</Text>
      <View style={styles.buttonGroup}>
        {options.map((item) => (
          <TouchableOpacity
            key={item.value}
            style={[
              styles.button,
              gender === item.value && styles.buttonActive,
            ]}
            onPress={() => setGender(item.value)}
          >
            <Text
              style={[
                styles.buttonText,
                gender === item.value && styles.buttonTextActive,
              ]}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.result}>Giá trị State hiện tại: {gender}</Text>
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
  buttonGroup: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  buttonActive: {
    backgroundColor: '#007AFF',
  },
  buttonText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
  buttonTextActive: {
    color: '#fff',
  },
  result: {
    marginTop: 16,
    fontSize: 14,
    color: '#555',
  },
});