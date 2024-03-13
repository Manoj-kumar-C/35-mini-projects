import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, FlatList, Dimensions } from 'react-native';

const CourseScreen = ({ navigation }) => {
  const jsonData = [
    { id: 1, imagePath: require('../../assets/course/content-strategy.png'), buttonText: 'Digital Marketing', screenName: 'ComingSoon' },
    { id: 2, imagePath: require('../../assets/course/coding.png'), buttonText: 'Web Development', screenName: 'ComingSoon' },
    { id: 3, imagePath: require('../../assets/course/app-settings.png'), buttonText: 'App Development', screenName: 'ComingSoon' },
    { id: 4, imagePath: require('../../assets/course/app-development.png'), buttonText: 'WordPress Development', screenName: 'ComingSoon' },
    { id: 5, imagePath: require('../../assets/course/montage.png'), buttonText: 'Video Editing', screenName: 'ComingSoon' },
    { id: 6, imagePath: require('../../assets/course/ux.png'), buttonText: 'Ui/Ux Design', screenName: 'ComingSoon' },
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
    textAlign: 'center'
  },
  buttonImage: {
    width: 50, // Set the width as needed
    height: 50, // Set the height as needed
    resizeMode: 'contain',
  },
});

export default CourseScreen;
