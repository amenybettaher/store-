import * as React from "react";
import { StyleSheet, View, Text,Pressable} from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIconss } from '@expo/vector-icons';
import ToggleSwitch from 'toggle-switch-react-native'
import { useState } from 'react'; 
import { Ionicons } from '@expo/vector-icons';
import { Ioniconss } from '@expo/vector-icons';
import { MaterialCommunityIconss } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import fr from "./fr.json"; 
import Notifications from "./Notifications";
// import { useUser } from '../screens/UserContext';


const Profile = () => {
  // const { user } = useUser();
  //   console.log('User data in Profile:', user);
  const navigation = useNavigation(); 



  const handleStartPress = () => {
    navigation.navigate('Notifications');
  };
  const handleStartPresse = () => {
    navigation.navigate('EditProfile');
  };
    const handleStartPressq = () => {
      navigation.navigate('Language');
    };
    const handleStartPressC = () => {
      navigation.navigate('ContactUs');
    };
    const handleStartPressP = () => {
      navigation.navigate('PrivacyPolicy');
    };
    const handleStartPressA = () => {
      navigation.navigate('AboutUs');
    };
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };


  return (
<View style={[styles.profil, darkMode ? styles.darkBackground : null]}>
  
      <View style={[styles.setting, styles.settingPosition]}>
        <View style={[styles.settingChild, styles.settingPosition]} />
        <View style={[styles.settingItem, styles.settingLayout]} />
        <View style={[styles.settingInner, styles.settingLayout, darkMode ? { color: "red" } : null]} />
        <View style={[styles.rectangleView, styles.settingLayout]} />
        <Image
          style={styles.unsplashjmurdhtm7ngIcon}
          contentFit="cover"
          source={require("../assets/profilo.png")}
        />
         {/* <Text>{user ? `Welcome, ${user.firstName}` : 'Welcome'}</Text> */}
        <Pressable onPress={handleStartPressq}>
        <Text style={[styles.language, styles.downloadTypo, darkMode ? { color: "white" } : null]}>
            {fr.language}
          </Text>
        </Pressable>

        <Pressable onPress={handleStartPressA}>
        <Text style={[styles.languag, styles.downloadTypo, darkMode ? { color: "white" } : null]}>
        {fr.aboutUs}
          </Text>
        </Pressable>
        <Text style={[styles.mimiHeadline, styles.contentTypo, darkMode ? { color: "white" } : null]}>
          Mimi Headline
        </Text>
        <Text style={[styles.content, styles.contentTypo, darkMode ? { color: "white" } : null]}>Content</Text>
      
        <Pressable onPress={handleStartPressP}>
        <Text style={[styles.download, styles.downloadTypo, darkMode ? { color: "white" } : null]}>
        {fr.privacyPolicy}
          </Text>
          </Pressable>
        <Text style={[styles.darkmode, darkMode ? { color: "white" } : null]}>
        {fr.DarkMode}
          </Text>
        <Pressable  onPress={handleStartPress} >
        <Text style={[styles.today, styles.todayPosition , darkMode ? { color: "white" } : null]}>
        {fr.notifications}
          </Text>
        </Pressable>
        <Pressable onPress={handleStartPressC}>
        <Text style={[styles.onlyDownloadVia, styles.downloadTypo, darkMode ? { color: "white" } : null]}>
        {fr.contactUs}
        </Text>
        </Pressable>
        <View style={[styles.rectangle36Copy5Parent, styles.groupParentLayout]}>
          <View style={styles.rectangle36Copy5} />
          <Pressable onPress={handleStartPress}>
          <AntDesign name="right" size={20} color="black" style={[styles.rightIcon1, darkMode ? { color: "white" } : null]}/>
          </Pressable>
        </View>
        <View style={[styles.rectangle36Copy5Group, styles.groupParentLayout]}>
          <View style={styles.rectangle36Copy5} />
          <AntDesign name="right" size={20} color="black" style={[styles.rightIcon2, darkMode ? { color: "white" } : null]}/>

        </View>
        <View
          style={[styles.rectangle36Copy5Container, styles.groupParentLayout]}
        >
          <View style={styles.rectangle36Copy5} />

        </View>
        <View style={[styles.groupView, styles.groupParentLayout]}>
          <View style={styles.rectangle36Copy5} />
        </View>
        <View
          style={[styles.rectangle36Copy5Parent1, styles.groupParentLayout]}
        >
          <View style={styles.rectangle36Copy5} />
        </View>
        <View
          style={[styles.rectangle36Copy5Parent2, styles.groupParentLayout]}
        >
          <View style={styles.rectangle36Copy5} />

        </View>
        <View
          style={[styles.rectangle36Copy5Parent3, styles.groupParentLayout]}
        >
          <View style={styles.rectangle36Copy5} /> 
        </View>
        <View
          style={[styles.rectangle36Copy5Parent4, styles.groupParentLayout]}
        >
          <View style={styles.rectangle36Copy5} />

        </View>
        <Image
          style={[styles.rectangleIcon, styles.settingLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-31.png")}
        />
                <Pressable onPress={handleStartPresse}>
        <Text style={[styles.editProfile, styles.profileClr, darkMode ? { color: "white" } : null]}>
        {fr.editProfile}
        </Text>
        </Pressable>
      
        <Ionicons name="language-sharp" size={24} color="black" style={[styles.translateIcon, styles.iconPosition, darkMode ? { color: "white" } : null]}/>
      
        <MaterialCommunityIcons name="theme-light-dark" size={24} color="black" style={[styles.umoonIcon, darkMode ? { color: "white" } : null]}/>
        <MaterialCommunityIcons name="message-text-outline" size={24} color="black"style={[styles.wifiIcon, styles.wifiIconPosition, darkMode ? { color: "white" } : null]} />
        {/* <Image
          style={[styles.heartIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/heart.png")}
        /> */}
        <MaterialIcons name="privacy-tip" size={24} color="black" style={[styles.iconoutlinedapplicationdown, styles.wifiIconPosition, darkMode ? { color: "white" } : null]} />
        <Text style={[styles.profile, styles.profileClr]}>Profile</Text>
        <Pressable onPress={handleStartPress}>
        <MaterialIcons name="notifications-none" size={25} color="black" style={[styles.icon, darkMode ? { color: "white" } : null]}/>
        </Pressable>

        <ToggleSwitch
          isOn={darkMode}
          onColor="#56CE21"
          offColor="grey"
          size="small" 
          onToggle={toggleDarkMode}
          style={styles.toggle1}
        />
  
                <Pressable onPress={handleStartPressA}>
        <Ionicons name="information-circle-outline" size={24} color="black"style={[styles.icon3, darkMode ? { color: "white" } : null]} />
        </Pressable>
      </View>
      <AntDesign name="right" size={20} color="black" style={[styles.rightIcon33, darkMode ? { color: "white" } : null]}/>
      <AntDesign name="right" size={20} color="black" style={[styles.rightIcon44, darkMode ? { color: "white" } : null]}/>
      <AntDesign name="right" size={20} color="black" style={[styles.rightIcon55, darkMode ? { color: "white" } : null]}/>

    </View>
    
  );
};

const styles = StyleSheet.create({
  settingPosition: {
    left: 0,
    top: 0,
    position: "absolute",
    
  },
  
  toggle1: {
    marginLeft: 340,
    top: 365,
  },
  settingLayout: {
    height: 29,
    position: "absolute",
  },
  icon:{
    marginLeft: 24,
    top: 325,
  },
  icon3:{
    marginLeft: 24,
    top: 421,
  },
  todayPosition: {
    textAlign: "left",
    color: Color.colorBlack,
    left: 26,
    position: "absolute",
  },
  downloadTypo: {
    left: 60,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },


  profileClr: {
    textAlign: "left",
    position: "absolute",
    color:"white",
    alignItems:"center",

  },
  iconPosition: {
    left: 26,
    position: "absolute",
  },
  wifiIconPosition: {
    left: 25,
    height: 24,
    width: 24,
    position: "absolute",
  },
  settingChild: {
    backgroundColor: Color.colorMediumvioletred_200,
    width: 435,
    height: 191,
  },
  settingItem: {
    top: 291,
    width: 390,
    height: 29,
    left: 0,
  },
  settingInner: {
    top: 427,
    width: 390,
    height: 29,
    left: 0,
  },
  rectangleView: {
    top: 542,
    width: 390,
    height: 29,
    left: 0,
  },
  unsplashjmurdhtm7ngIcon: {
    top: 133,
    left: 136,
    width: 122,
    height: 122,
    position: "absolute",
  },
  language: {
    top: 360,
  },
  languag: {
    top: 470,
  },
  mimiHeadline: {
    top: 296,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    left: 26,
    position: "absolute",
  },
  content: {
    top: 432,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    left: 26,
    position: "absolute",
  },
  download: {
    top: 530,
  },
  darkmode: {
    top: 393,
    left: 60,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  today: {
    top: 329,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    marginLeft:34,
  },
  onlyDownloadVia: {
    top: 500,
  },
  rightIcon: {
    top: 2,
    left: -4,
    width: 30,
    height: 30,
    position: "absolute",
  },
  rightIcon1: {
    top: -5,
    left: 3,
    width: 20,
    height: 20,
    position: "absolute",
  },
  rightIcon2: {
    top:-234,
    left: 3,
    width: 20,
    height: 20,
    position: "absolute",
  },
  rightIcon33: {
    top: 472,
    left: 364,
    width: 30,
    height: 30,
    position: "absolute",
  },
  rightIcon44: {
    top: 499,
    left: 364,
    width: 30,
    height: 30,
    position: "absolute",
  },
  rightIcon55: {
    top: 525,
    left: 364,
    width: 30,
    height: 30,
    position: "absolute",
  },
  rectangle36Copy5Parent: {
    top: 338,
    left: 360,
    opacity: 0.65,
  },
  rectangle36Copy5Group: {
    top: 596,
    left: 360,
    opacity: 0.65,
  },
  rectangle36Copy5Container: {
    top: 469,
    left: 360,
    opacity: 0.65,
  },
  rectangle36Copy5Parent1: {
    top: 637,
    left: 360,
    opacity: 0.65,
  },
  rectangle36Copy5Parent2: {
    top: 503,
    left: 360,
    opacity: 0.65,
  },
  rectangle36Copy5Parent3: {
    top: 393,
    left: 360,
    opacity: 0.65,
  },
  rectangle36Copy5Parent4: {
    top: 674,
    left: 359,
  },
  rectangleIcon: {
    top: 245,
    left: 143,
    borderRadius: Border.br_8xs,
    width: 105,
  },
  editProfile: {
    top: 250,
    left: 157,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    alignItems:"center",
    padding: 3
  },
  translateIcon: {
    top: 360,
    width: 22,
    height: 22,
  },
  umoonIcon: {
    left: 24,
    height: 24,
    width: 24,
    top: 390,
    position: "absolute",
    overflow: "hidden",
  },
  wifiIcon: {
    top: 499,
  },
  iconoutlinedapplicationdown: {
    top: 526,
    overflow: "hidden",
  },
  profile: {
    top: 50,
    left: 175,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "900",
    fontSize: FontSize.size_mini,
    
  },
  profil: {
    borderRadius: Border.br_11xl,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    backgroundColor:"white",
  },
  darkBackground: {
    backgroundColor: '#191919'
  },
});

export default Profile;
