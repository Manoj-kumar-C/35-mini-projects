import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const TestCourseScreen = () => {
  // JavaScript code to hide the footer
  const injectedJavaScript = `
    document.getElementsByTagName('footer')[0].style.display = 'none';
  `;

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://freshspartechnologies.graphy.com/courses' }}
        injectedJavaScript={injectedJavaScript}
        javaScriptEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TestCourseScreen;
