// MainScreen.js

import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import SongButton from '../components/SongButton'; // Adjust the path as per your file structure

const TestScreen = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://crack-it-backend.vercel.app/'); // Replace with your actual API endpoint
        const data = await response.json();
        setSongs(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const playSong = async (audioFile) => {
    const { sound } = await Audio.Sound.createAsync(
      { uri: audioFile },
      { shouldPlay: true }
    );
  };

  return (
    <View style={styles.container}>
      {songs.map((song) => (
        <SongButton
          key={song.id}
          title={song.title}
          onPress={() => playSong(song.audioFile)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
    flexDirection: 'row',
  },
});

export default TestScreen;
