import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
  View,
} from 'react-native';

type Variant = 'primary' | 'secondary' | 'outline' | 'danger';
type Size = 'small' | 'medium' | 'large';

interface AppButtonProps {
  title: string;
  variant?: Variant;
  size?: Size;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
}

export const AppButton = ({
  title,
  variant = 'primary',
  size = 'medium',
  onPress,
  disabled = false,
  loading = false,
  icon,
}: AppButtonProps) => {
  const containerStyle = [
    styles.baseContainer,
    variantContainerStyles[variant],
    sizeContainerStyles[size],
    (disabled || loading) && styles.disabledContainer,
  ];

  const textStyle = [
    styles.baseText,
    variantTextStyles[variant],
    sizeTextStyles[size],
  ];

  return (
    <TouchableOpacity
      style={containerStyle}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === 'outline' ? '#007AFF' : '#fff'}
        />
      ) : (
        <View style={styles.content}>
          {icon}
          <Text style={textStyle}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export const Bai8_AppButtonDemo = () => {
  return (
    <View style={styles.demoContainer}>
      <AppButton
        title="Thêm vào giỏ hàng"
        variant="primary"
        size="large"
        onPress={() => {}}
      />
      <AppButton
        title="Xem chi tiết"
        variant="outline"
        size="medium"
        onPress={() => {}}
      />
      <AppButton
        title="Xóa sách"
        variant="danger"
        size="small"
        onPress={() => {}}
      />
      <AppButton
        title="Đang xử lý..."
        variant="secondary"
        size="medium"
        loading={true}
        onPress={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  baseContainer: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontWeight: 'bold',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  disabledContainer: {
    opacity: 0.6,
  },
  demoContainer: {
    padding: 16,
    gap: 12,
  },
});

const variantContainerStyles = StyleSheet.create({
  primary: {
    backgroundColor: '#007AFF',
  },
  secondary: {
    backgroundColor: '#6c757d',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  danger: {
    backgroundColor: '#dc3545',
  },
});

const variantTextStyles = StyleSheet.create({
  primary: {
    color: '#fff',
  },
  secondary: {
    color: '#fff',
  },
  outline: {
    color: '#007AFF',
  },
  danger: {
    color: '#fff',
  },
});

const sizeContainerStyles = StyleSheet.create({
  small: {
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  medium: {
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
  large: {
    paddingVertical: 14,
    paddingHorizontal: 24,
  },
});

const sizeTextStyles = StyleSheet.create({
  small: {
    fontSize: 12,
  },
  medium: {
    fontSize: 15,
  },
  large: {
    fontSize: 18,
  },
});