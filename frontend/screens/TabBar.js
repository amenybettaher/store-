// TabBar.js
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const TabBar = ({ navigation }) => {
  const handleTabPress = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.tabbar}>
      <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Home')}>
        <Image source={require("../assets/user.png")} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Articles')}>
        <Image source={require("../assets/user.png")} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Map')}>
        <Image source={require("../assets/user.png")} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('total')}>
        <Image source={require("../assets/user.png")} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Card')}>
        <Image source={require("../assets/user.png")} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Profile')}>
        <Image source={require("../assets/user.png")} style={styles.icon} />
      </TouchableOpacity>
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
  icon: {
    width: 24, // adjust the width and height according to your image dimensions
    height: 24,
  },
};

export default TabBar;
