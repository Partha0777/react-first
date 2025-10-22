import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button({ 
  title, 
  onPress, 
  variant = 'primary', 
  size = 'medium',
  disabled = false,
  style,
  textStyle 
}) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return { backgroundColor: '#007AFF' };
      case 'secondary':
        return { backgroundColor: '#34C759' };
      case 'accent':
        return { backgroundColor: '#FF9500' };
      case 'danger':
        return { backgroundColor: '#FF3B30' };
      default:
        return { backgroundColor: '#007AFF' };
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return { paddingHorizontal: 12, paddingVertical: 8 };
      case 'medium':
        return { paddingHorizontal: 20, paddingVertical: 12 };
      case 'large':
        return { paddingHorizontal: 24, paddingVertical: 16 };
      default:
        return { paddingHorizontal: 20, paddingVertical: 12 };
    }
  };

  const styles = StyleSheet.create({
    button: {
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      opacity: disabled ? 0.6 : 1,
      ...getVariantStyles(),
      ...getSizeStyles(),
      ...style,
    },
    text: {
      color: 'white',
      fontSize: 16,
      fontWeight: '600',
      ...textStyle,
    },
  });

  return (
    <TouchableOpacity 
      style={styles.button} 
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
