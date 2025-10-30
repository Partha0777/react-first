import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header({ title, subtitle, isDarkMode }) {
  
  const theme = {
    colors: {
      primary: '#007AFF',
      text: isDarkMode ? '#ffffff' : '#000000',
    }
  };

  const styles = StyleSheet.create({
    header: {
      paddingTop: Platform.OS === 'ios' ? 50 : 30,
      paddingHorizontal: 20,
      paddingBottom: 20,
      backgroundColor: theme.colors.primary,
      alignItems: 'center',
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 5,
    },
    subtitle: {
      fontSize: 16,
      color: 'rgba(255,255,255,0.8)',
    },
  });

  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}
