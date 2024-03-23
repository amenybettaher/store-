import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Make sure to install the expo vector icons package


const Checklist = () => {
  const [item, setItem] = useState('');
  const [itemsList, setItemsList] = useState([]);

  const addItem = () => {
    if (item.trim() !== '') {
      setItemsList([...itemsList, { name: item, checked: false }]);
      setItem('');
    }
  };

  const toggleCheckbox = (index) => {
    const updatedList = itemsList.map((item, i) => {
      if (i === index) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    setItemsList(updatedList);
  };

  const removeItem = (index) => {
    const updatedList = itemsList.filter((_, i) => i !== index);
    setItemsList(updatedList);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter item"
          value={item}
          onChangeText={(text) => setItem(text)}
        />
        <TouchableOpacity onPress={addItem}>
          <Ionicons name="add-circle-outline" size={24} color="green" />
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={itemsList}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            <TouchableOpacity onPress={() => toggleCheckbox(index)}>
              <Ionicons
                name={item.checked ? "checkbox-outline" : "square-outline"}
                size={24}
                color="black"
              />
            </TouchableOpacity>
            <Text style={item.checked ? styles.itemChecked : null}>{item.name}</Text>
            <TouchableOpacity onPress={() => removeItem(index)}>
              <Ionicons name="trash-bin-outline" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(_, index) => index.toString()}
      />
     
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
    marginTop : 50
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: 'white', // White input background
    marginRight: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  itemChecked: {
    textDecorationLine: 'line-through', // Strikethrough for checked items
    color: '#aaa', // Greyed out text
  },
});

export default Checklist;
