// WelcomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';

const WelcomeScreen = () => {
  const slides = [
    {
      id: 1,
      title: 'Welcome to Crack It App',
      description: 'Discover amazing features and enjoy your experience.',
      image: require('../assets/memes/MainScreen/meme.png'), 
    },
    {
      id: 2,
      title: 'Ready to memes and Educational Content ',
      description: 'Find Popular Memes and much more about Educational.',
      image: require('../assets/memes/MainScreen/scholarship.png'), 
    },
    // Add more slides as needed
  ];

  return (
    <Swiper style={styles.wrapper} showsButtons={false}>
      {slides.map((slide) => (
        <View key={slide.id} style={styles.slide}>
          <Image source={slide.image} style={styles.image} />
          <Text style={styles.title}>{slide.title}</Text>
          <Text style={styles.description}>{slide.description}</Text>
        </View>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200, 
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 40,
    marginTop: 10,
  },
});

export default WelcomeScreen;
