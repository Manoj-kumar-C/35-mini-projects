import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Linking } from 'react-native';
import WebView from 'react-native-webview';

const VideoList = () => {
  const [videoId, setVideoId] = useState('can_5EOB7K8?si=1858WqoPxn-hAfZV'); // Default video ID
  const videoListData = [
    { id: '1', title: 'Video 1 - Tutorials', videoId: 'can_5EOB7K8?si=1858WqoPxn-hAfZV' },
    { id: '2', title: 'Video 2  - Scam uruttugals ', videoId: '4Dmc3NlhYgI?si=p9VPS8hj6XC36vMI' },
    { id: '3', title: 'Video 3 - Tutorials', videoId: 'can_5EOB7K8?si=1858WqoPxn-hAfZV' },
    { id: '4', title: 'Video 4  - Scam uruttugals ', videoId: '4Dmc3NlhYgI?si=p9VPS8hj6XC36vMI' },
    { id: '5', title: 'Video 5 - Tutorials', videoId: 'can_5EOB7K8?si=1858WqoPxn-hAfZV' },
    { id: '6', title: 'Video 6  - Scam uruttugals ', videoId: '4Dmc3NlhYgI?si=p9VPS8hj6XC36vMI' },
    { id: '7', title: 'Video 7 - Tutorials', videoId: 'can_5EOB7K8?si=1858WqoPxn-hAfZV' },
    { id: '8', title: 'Video 8  - Scam uruttugals ', videoId: '4Dmc3NlhYgI?si=p9VPS8hj6XC36vMI' },
    // Add more video items as needed
  ];

  const playVideo = (selectedVideoId) => {
    setVideoId(selectedVideoId);
  };

  const renderWebView = () => {
    return (
      <View style={styles.videoContainer}>
        <WebView
          style={styles.webview}
          source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          allowsFullscreenVideo={true}
          onShouldStartLoadWithRequest={(event) => {
            // Open links in the default browser
            if (!event.url.includes('youtube.com/embed')) {
              Linking.openURL(event.url);
              return false;
            }
            return true;
          }}
        />
      </View>
    );
  };

  const renderVideoItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.videoItem, videoId === item.videoId && styles.highlightedItem]}
      onPress={() => playVideo(item.videoId)}
    >
      <Text style={styles.videoTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {renderWebView()}
      <View style={styles.listContainer}>
        <FlatList
          data={videoListData}
          keyExtractor={(item) => item.id}
          renderItem={renderVideoItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videoContainer: {
    height: 250, // Adjust the height as needed
    marginTop: 20, // Add margin at the top
  },
  webview: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  videoItem: {
    width: '100%', // Take the full width of the container
    marginBottom: 10, // Adjust the margin as needed
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  highlightedItem: {
    backgroundColor: '#e6e6e6', // Highlight color
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default VideoList;
