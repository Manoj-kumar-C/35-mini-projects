// SongButton.js

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SongButton = ({ title, onPress, width }) => {
  return (
    <TouchableOpacity style={[styles.button, { width }]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    margin: 5,
    borderRadius: 8,
    height: 60,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SongButton;
