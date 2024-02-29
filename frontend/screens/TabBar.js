// TabBar.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const TabBar = ({ navigation }) => {
  const handleTabPress = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.tabbar}>
      <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Home')}><Text>Home</Text></TouchableOpacity>
      <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Articles')}><Text>Articles</Text></TouchableOpacity>
      <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Map')}><Text>Map</Text></TouchableOpacity>
      <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Card')}><Text>Card</Text></TouchableOpacity>
      <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Profile')}><Text>Profile</Text></TouchableOpacity>
    </View>
  );
};

const styles = {
  tabbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#eee',
    padding: 10,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
};

export default TabBar;
