// TabBar.js
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Border } from "../GlobalStyles";

const TabBar = ({ navigation }) => {
  const handleTabPress = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.tabbar}>
          <Image
            style={[styles.sampleChild, styles.sampleChildPosition]}
            resizeMode="cover"
            source={require("../assets/Rectangle 1.png")}
          />
             <Image
            style={[styles.buttonPlusIcon, styles.sampleChildPosition]}
            resizeMode="cover"
            source={require("../assets/Button Plus.png")}
          />
      <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Home')}>
        <Image source={require("../assets/home.jpg")} style={styles.icon1} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Map')}>
        <Image source={require("../assets/map.jpg")} style={styles.icon2} />
      </TouchableOpacity>
    
        <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Article')}>
        <Image source={require("../assets/magazine.png")} style={styles.icon3} />
        </TouchableOpacity>

      <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('total')}>
        <Image source={require("../assets/total.png")} style={styles.icon4} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Card')}>
        <Image source={require("../assets/card.png")} style={styles.icon5} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem} onPress={() => handleTabPress('Profile')}>
        <Image source={require("../assets/profile.png")} style={styles.icon6} />
      </TouchableOpacity>
    </View>
  );
};
const styles = {
    tabbar: {
      flexDirection: 'row',
      padding: 10,

    },
    tabItem: {
      flex: 1,
    //   alignItems: 'center',
      padding: 10, 
    },
    icon1: {
      width: 24,
      height: 24,
    marginLeft:-13
    },
    icon2: {
        width: 26,
        height: 26,
      marginLeft:-25
      },
      icon3: {
        width: 24,
        height: 24,
      marginLeft:-35
      },
    icon4: {
      width: 32,
      height: 32,
      marginLeft:39
    },
    icon5: {
        width: 24,
        height: 24,
        marginLeft:35,
        top:5
      },
      icon6: {
        width: 32,
        height: 32,
        marginLeft:25
      },
    sampleChildPosition: {
      left: "50%",
      position: "absolute",
    },
    sampleChild: {
      marginLeft: -208.5,
      bottom: -1,
      borderRadius: Border.br_3xs,
      width: 426,
      height: 70,
    },
    buttonPlusIcon: {
      marginLeft: -25.5,
      bottom: 35,
      width: 75,
      height: 75,
    },
  };
  
  
  


export default TabBar;
