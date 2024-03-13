// SupportScreen.js
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Linking, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import login from '../../assets/auth/manoj_c.png';

const socialMediaData = [
  { name: "Twitter", url: "https://twitter.com/manoj_kumar__c" },
  { name: "Instagram", url: "https://www.instagram.com/manojkumar._.c/" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/manojkumar--c/" },
  { name: "Youtube", url: "https://www.youtube.com/@Manojkumar_C/" },
  { name: "Tree", url: "https://www.linktree.com/Manojkumar_C/" }
];

const SupportScreen = () => {
  // Function to open a URL when a social media icon is pressed
  const openUrl = (url) => {
    Linking.openURL(url).catch((err) => console.error('Error opening URL:', err));
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.TextTop}>
          Support me 😊
        </Text>
      </View>
      {/* Image at the top */}
      <Image
        source={login}
        style={styles.image}
      />

      {/* Social media icons */}
      <View style={styles.socialContainer}>
        {socialMediaData.map((socialMedia, index) => (
          <TouchableOpacity
            key={index}
            style={styles.iconContainer}
            onPress={() => openUrl(socialMedia.url)}
          >
            <Icon name={socialMedia.name.toLowerCase()} size={30} color="#000" />
          </TouchableOpacity>
        ))}
      </View>

      {/* Information about you */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          Hi, I'm ManojKumar! A passionate developer and content creator. Connect with me on social media for updates and more.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 390,
    resizeMode: 'cover',
  },
  socialContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  iconContainer: {
    marginHorizontal: 15,
  },
  infoContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  infoText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#333',
    fontStyle:"italic",
    fontWeight: 'bold'
  },
  TextTop: {
    textAlign: 'center',
    fontSize: 20,
    color: '#333',
  
    fontWeight: 'bold'
  },
});

export default SupportScreen;
