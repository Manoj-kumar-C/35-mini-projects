// MainScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Audio } from 'expo-av';
import SongButton from '../../components/SongButton'; // Adjust the path as per your file structure

const PageCopy = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://crack-it-production.vercel.app/'); // Replace with your actual API endpoint
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

  const screenWidth = Dimensions.get('window').width;
  const buttonWidth = (screenWidth - 40) / 4; // Subtracting padding

  return (
    <View style={styles.container}>
      {songs.map((song) => (
        <SongButton
          key={song.id}
          title={song.title}
          onPress={() => playSong(song.audioFile)}
          width={buttonWidth}
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
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default PageCopy;
