import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, FlatList, Dimensions } from 'react-native';

const SoundNaviScreen = ({ navigation }) => {
  const jsonData = [
    { id: 1, imagePath: require('../assets/memes/MainScreen/fart.png'), buttonText: 'Fart Sounds', screenName: 'Page1' },
    { id: 2, imagePath: require('../assets/memes/MainScreen/bear.png'), buttonText: 'Animal Sounds', screenName: 'Page2' },
    { id: 3, imagePath: require('../assets/memes/MainScreen/trending.png'), buttonText: 'Viral SFX', screenName: 'Page3' },
    { id: 4, imagePath: require('../assets/memes/MainScreen/movie.png'), buttonText: 'Movie SFX', screenName: 'Page4' },
    { id: 5, imagePath: require('../assets/memes/MainScreen/cartoon.png'), buttonText: 'Cartoon SFX', screenName: 'Page5' },
    { id: 6, imagePath: require('../assets/memes/MainScreen/youtube.png'), buttonText: 'Youtube (1)', screenName: 'Page6' },
    { id: 7, imagePath: require('../assets/memes/MainScreen/youtube.png'), buttonText: 'Youtube (2)', screenName: 'Page7' },
    { id: 8, imagePath: require('../assets/memes/MainScreen/anime.png'), buttonText: 'Anime SFX', screenName: 'ComingSoon' },
    { id: 8, imagePath: require('../assets/memes/MainScreen/meme.png'), buttonText: 'Other Memes', screenName: 'ComingSoon' },
    { id: 8, imagePath: require('../assets/memes/MainScreen/meme.png'), buttonText: 'Favorites', screenName: 'ComingSoon' },
  ];

  const handleButtonPress = (screenName) => {
    navigation.navigate(screenName);
  };

  const renderButton = ({ item }) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => handleButtonPress(item.screenName)}
    >
      <Image source={item.imagePath} style={styles.buttonImage} />
      <Text style={styles.buttonText}>{item.buttonText}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={jsonData}
        renderItem={renderButton}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // Two columns per row
        style={styles.flatListContainer} // Use style instead of contentContainerStyle
      />
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEAEA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListContainer: {
    padding: 10,
    backgroundColor: '#EAEAEA', // Light Grey
  },
  button: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#CCCCCC', // Grey
    alignItems: 'center',
    width: windowWidth / 2 - 30, // Adjusted the width and margin for better spacing
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
  },
  buttonImage: {
    width: 50, // Set the width as needed
    height: 50, // Set the height as needed
    resizeMode: 'contain',
  },
});

export default SoundNaviScreen;
