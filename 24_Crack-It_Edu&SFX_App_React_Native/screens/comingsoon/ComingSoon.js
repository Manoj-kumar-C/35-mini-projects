// ComingSoonScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const ComingSoonScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <FontAwesomeIcon name="hourglass-half" size={100} color="#3498db" />
      </View>
      <Text style={styles.title}>Coming Soon!</Text>
      <Text style={styles.subtitle}>Stay tuned for exciting updates</Text>
      <View style={styles.socialIconsContainer}>
        <Icon name="mail-outline" size={30} color="#3498db" style={styles.socialIcon} />
        <Icon name="facebook" size={30} color="#3498db" style={styles.socialIcon} />
        <Icon name="link" size={30} color="#3498db" style={styles.socialIcon} />
        {/* <Icon name="twitter" size={30} color="#3498db" style={styles.socialIcon} /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  iconContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginBottom: 40,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  socialIcon: {
    marginBottom: 20,
  },
});

export default ComingSoonScreen;
