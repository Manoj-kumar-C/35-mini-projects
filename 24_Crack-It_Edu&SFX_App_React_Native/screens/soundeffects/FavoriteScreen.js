import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const FavoriteScreen = ({ favorites }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  itemContainer: {
    backgroundColor: '#EAEAEA', // Light Grey
    borderRadius: 8,
    padding: 20,
    marginBottom: 10,
  },
});

export default FavoriteScreen;
