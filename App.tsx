import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import { Bai7_GenderSelector } from './src/components/Bai7_GenderSelector';
import { Bai8_AppButtonDemo } from './src/components/Bai8_AppButton';
import { Bai9_NewsFeed } from './src/components/Bai9_NewsFeed';
import { Bai10_UserProfile } from './src/components/Bai10_UserProfile';
import { Bai11_ProductSearch } from './src/components/Bai11_ProductSearch';
import { Bai12_ApiErrorHandling } from './src/components/Bai12_ApiErrorHandling';
import { Bai13_FilteredListGeneric } from './src/components/Bai13_FilteredListGeneric';
import { Bai14_PaginationResponse } from './src/components/Bai14_PaginationResponse';
import { Bai15_PullToRefresh } from './src/components/Bai15_PullToRefresh';

export default function App() {
  const [selectedLesson, setSelectedLesson] = useState<number>(7);

  const renderContent = () => {
    switch (selectedLesson) {
      case 7:
        return <Bai7_GenderSelector />;
      case 8:
        return <Bai8_AppButtonDemo />;
      case 9:
        return <Bai9_NewsFeed />;
      case 10:
        return <Bai10_UserProfile />;
      case 11:
        return <Bai11_ProductSearch />;
      case 12:
        return <Bai12_ApiErrorHandling />;
      case 13:
        return <Bai13_FilteredListGeneric />;
      case 14:
        return <Bai14_PaginationResponse />;
      case 15:
        return <Bai15_PullToRefresh />;
      default:
        return null;
    }
  };

  const lessons = [7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Bài tập React Native - Tuần 2</Text>
      </View>

      <View style={styles.tabContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabScroll}
        >
          {lessons.map((num) => (
            <TouchableOpacity
              key={num}
              style={[
                styles.tabButton,
                selectedLesson === num && styles.tabButtonActive,
              ]}
              onPress={() => setSelectedLesson(num)}
            >
              <Text
                style={[
                  styles.tabText,
                  selectedLesson === num && styles.tabTextActive,
                ]}
              >
                Bài {num}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.body}>{renderContent()}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  tabContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  tabScroll: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 8,
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
  },
  tabButtonActive: {
    backgroundColor: '#007AFF',
  },
  tabText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  tabTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
  },
});