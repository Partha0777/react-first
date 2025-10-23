import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform,
  Dimensions,
  Alert,
  SafeAreaView,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import Card from '../components/Card';
import Button from '../components/Button';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const [counter, setCounter] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleCounterPress = () => {
    setCounter(prev => prev + 1);
  };

  const handleReset = () => {
    setCounter(0);
  };

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const showAlert = () => {
    Alert.alert(
      'Platform Info',
      `You're using ${Platform.OS} platform!\nCounter: ${counter}`,
      [{ text: 'OK' }]
    );
  };


  const theme = {
    colors: {
      background: isDarkMode ? '#1a1a1a' : '#ffffff',
      text: isDarkMode ? '#ffffff' : '#000000',
      textSecondary: isDarkMode ? '#cccccc' : '#666666',
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    content: {
      flex: 1,
      padding: 20,
    },
    counterDisplay: {
      fontSize: 48,
      fontWeight: 'bold',
      color: '#007AFF',
      marginBottom: 20,
      textAlign: 'center',
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 20,
    },
    platformInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
    },
    platformText: {
      fontSize: 16,
      color: theme.colors.textSecondary,
      marginLeft: 8,
    },
    featuresGrid: {
      flexDirection: width > 600 ? 'row' : 'column',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    featureCard: {
      backgroundColor: isDarkMode ? '#2d2d2d' : '#f5f5f5',
      borderRadius: 12,
      padding: 15,
      marginBottom: 15,
      width: width > 600 ? '48%' : '100%',
      borderLeftWidth: 4,
      borderLeftColor: '#007AFF',
    },
    featureTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: theme.colors.text,
      marginBottom: 5,
    },
    featureDescription: {
      fontSize: 14,
      color: theme.colors.textSecondary,
    },
    footer: {
      padding: 20,
      alignItems: 'center',
      backgroundColor: isDarkMode ? '#2d2d2d' : '#f5f5f5',
    },
    footerText: {
      fontSize: 14,
      color: theme.colors.textSecondary,
      textAlign: 'center',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
      
      <Header 
        title="🚀 React Native App" 
        subtitle="Mobile & Web Support"
        isDarkMode={isDarkMode}
      />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Counter Section */}
        <Card isDarkMode={isDarkMode}>
          <Text style={[styles.featureTitle, { marginBottom: 15 }]}>Interactive Counter</Text>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.counterDisplay}>{counter}</Text>
            <View style={styles.buttonRow}>
              <Button title="+1" onPress={handleCounterPress} />
              <Button title="Reset" variant="secondary" onPress={handleReset} />
            </View>
          </View>
        </Card>

        {/* Platform Info */}
        <Card isDarkMode={isDarkMode}>
          <Text style={styles.featureTitle}>Platform Detection</Text>
          <View style={styles.platformInfo}>
            <Ionicons 
              name={Platform.OS === 'web' ? 'globe-outline' : 'phone-portrait-outline'} 
              size={24} 
              color="#007AFF" 
            />
            <Text style={styles.platformText}>
              Running on {Platform.OS.toUpperCase()}
            </Text>
          </View>
          <Button 
            title="Show Platform Info" 
            variant="accent" 
            onPress={showAlert}
            style={{ marginTop: 15 }}
          />
        </Card>

        {/* Features */}
        <Card isDarkMode={isDarkMode}>
          <Text style={styles.featureTitle}>Cross-Platform Features</Text>
          <View style={styles.featuresGrid}>
            <View style={styles.featureCard}>
              <Text style={styles.featureTitle}>📱 Mobile First</Text>
              <Text style={styles.featureDescription}>
                Optimized for touch interactions and mobile screens
              </Text>
            </View>
            <View style={styles.featureCard}>
              <Text style={styles.featureTitle}>🌐 Web Support</Text>
              <Text style={styles.featureDescription}>
                Full web browser compatibility with responsive design
              </Text>
            </View>
            <View style={styles.featureCard}>
              <Text style={styles.featureTitle}>🎨 Adaptive UI</Text>
              <Text style={styles.featureDescription}>
                Automatically adapts to different screen sizes and orientations
              </Text>
            </View>
            <View style={styles.featureCard}>
              <Text style={styles.featureTitle}>⚡ Performance</Text>
              <Text style={styles.featureDescription}>
                Native performance on mobile, optimized for web
              </Text>
            </View>
          </View>
        </Card>

        {/* Theme Toggle */}
        <Card isDarkMode={isDarkMode}>
          <Text style={styles.featureTitle}>Theme Control</Text>
          <Button 
            title={isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            variant="accent"
            onPress={toggleTheme}
          />
        </Card>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Built with React Native & Expo • Works on iOS, Android & Web
        </Text>
      </View>
    </SafeAreaView>
  );
}
