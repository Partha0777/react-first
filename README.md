# React Native Cross-Platform App

A modern React Native application built with Expo that works seamlessly on **iOS**, **Android**, and **Web** platforms. This project demonstrates how to create a single codebase that adapts to different screen sizes and input methods.

## 🚀 Features

### Cross-Platform Support
- **📱 Mobile**: Native iOS and Android apps with touch-optimized UI
- **🌐 Web**: Full web browser support with responsive design
- **🔄 Single Codebase**: One codebase, multiple platforms

### Interactive Features
- **Counter App**: Interactive counter with animations
- **Platform Detection**: Automatically detects and displays current platform
- **Theme Toggle**: Dark/Light mode support
- **Responsive Design**: Adapts to different screen sizes
- **Touch & Mouse Support**: Works with both touch and mouse interactions

### Modern Architecture
- **Component-Based**: Reusable components (Header, Card, Button)
- **Responsive Styling**: Mobile-first design with adaptive layouts
- **Platform-Specific Code**: Uses Platform.OS for platform-specific logic
- **Clean Code**: Well-organized file structure

## 📁 Project Structure

```
react-first/
├── App.js                 # Main app component
├── components/            # Reusable components
│   ├── Header.js         # Header component
│   ├── Card.js           # Card wrapper component
│   └── Button.js         # Custom button component
├── screens/              # Screen components
│   └── HomeScreen.js     # Main home screen
├── assets/               # Images and icons
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## 🛠️ Getting Started

### Prerequisites

- **Node.js** (version 16 or higher)
- **npm** or **yarn**
- **Expo CLI**: `npm install -g @expo/cli`
- **Mobile Device** (optional): Expo Go app for testing

### Installation

1. **Clone and install dependencies:**
   ```bash
   cd react-first
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Run on specific platforms:**
   ```bash
   # Web browser
   npm run web
   
   # iOS Simulator (macOS only)
   npm run ios
   
   # Android Emulator
   npm run android
   ```

## 📱 Platform-Specific Instructions

### Web Development
```bash
npm run web
```
- Opens in your default browser
- Hot reloading enabled
- Responsive design testing
- Works on any modern browser

### Mobile Development

#### iOS
```bash
npm run ios
```
- Requires Xcode (macOS only)
- Uses iOS Simulator
- For physical device: Install Expo Go app and scan QR code

#### Android
```bash
npm run android
```
- Requires Android Studio
- Uses Android Emulator
- For physical device: Install Expo Go app and scan QR code

### Testing on Physical Devices

1. **Install Expo Go**:
   - iOS: [App Store](https://apps.apple.com/app/expo-go/id982107779)
   - Android: [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)

2. **Scan QR Code**:
   - Run `npm start`
   - Scan the QR code with Expo Go app
   - App will load on your device

## 🎨 Customization

### Adding New Components

Create new components in the `components/` directory:

```javascript
// components/MyComponent.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MyComponent({ title, isDarkMode }) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: isDarkMode ? '#2d2d2d' : '#f5f5f5',
      padding: 20,
      borderRadius: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: isDarkMode ? '#ffffff' : '#000000',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
```

### Platform-Specific Code

Use `Platform.OS` for platform-specific logic:

```javascript
import { Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 50 : 30,
  },
});
```

### Responsive Design

Use `Dimensions` for responsive layouts:

```javascript
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  grid: {
    flexDirection: width > 600 ? 'row' : 'column',
  },
});
```

## 🚀 Deployment

### Web Deployment

1. **Build for web:**
   ```bash
   npm run build:web
   ```

2. **Deploy to hosting service:**
   - **Netlify**: Drag and drop the `web-build` folder
   - **Vercel**: Connect your GitHub repository
   - **GitHub Pages**: Push to a `gh-pages` branch

### Mobile App Deployment

1. **Build for production:**
   ```bash
   # Android
   npm run build:android
   
   # iOS
   npm run build:ios
   ```

2. **Publish to app stores:**
   - Follow Expo's publishing guide
   - Use EAS Build for production builds

## 🧪 Development Tips

### Hot Reloading
- **Web**: Automatic browser refresh
- **Mobile**: Shake device or press `Cmd+D` (iOS) / `Cmd+M` (Android)

### Debugging
- **Web**: Use browser DevTools
- **Mobile**: Use React Native Debugger or Flipper
- **Console**: Check terminal for logs

### Performance
- Use `FlatList` for large lists
- Optimize images with `expo-image`
- Use `React.memo` for expensive components

## 📱 Browser Support

### Web Browsers
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Mobile Browsers
- iOS Safari 12+
- Chrome Mobile 60+
- Samsung Internet 8+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test on multiple platforms
5. Submit a pull request

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🎯 Next Steps

- Add navigation between screens
- Implement state management (Redux, Zustand)
- Add form handling and validation
- Integrate with APIs
- Add push notifications
- Implement offline support
- Add testing (Jest, Detox)

## 🆘 Troubleshooting

### Common Issues

1. **Metro bundler issues:**
   ```bash
   npx expo start --clear
   ```

2. **iOS build issues:**
   ```bash
   cd ios && pod install
   ```

3. **Android build issues:**
   ```bash
   npx expo run:android --clear
   ```

4. **Web not loading:**
   - Check if port 3000 is available
   - Try `npm run web -- --port 3001`

### Getting Help

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Expo Discord](https://discord.gg/expo)

---

**Happy coding! 🚀**

Built with ❤️ using React Native, Expo, and modern web technologies.
