import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';

export default function Card({ children, isDarkMode, style }) {
  const theme = {
    colors: {
      surface: isDarkMode ? '#2d2d2d' : '#f5f5f5',
    }
  };

  const styles = StyleSheet.create({
    card: {
      backgroundColor: theme.colors.surface,
      borderRadius: 15,
      padding: 20,
      marginBottom: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
      elevation: 5,
      ...style,
    },
  });

  return (
    <View style={styles.card}>
      {children}
    </View>
  );
}
