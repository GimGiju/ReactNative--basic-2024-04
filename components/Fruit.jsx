import React, { useState } from 'react';
import { View, Image, TextInput, Button, FlatList, StyleSheet, Text } from 'react-native';

export default function Fruit() {
  const [fruitName, setFruitName] = useState('');
  const [fruits, setFruits] = useState([]);

  const handleAddFruit = () => {
    if (fruitName.trim() !== '') {
      setFruits(prevFruits => [...prevFruits, fruitName]);
      setFruitName('');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: 'https://picsum.photos/200/200' }}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter fruit name"
        value={fruitName}
        onChangeText={text => setFruitName(text)}
      />
      <Button
        title="Add Fruit"
        onPress={handleAddFruit}
      />
      <FlatList
        data={fruits}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item}</Text> 
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  input: {
    width: '50%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignSelf: 'stretch',
  },
  text: {
    fontSize: 16, 
    fontWeight: 'bold', 
    lineHeight: 20, 
  },
});