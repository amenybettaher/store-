import * as React from "react";
import { StyleSheet, View, Text,Pressable} from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIconss } from '@expo/vector-icons';

const Profile = () => {
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

  return (
    <View style={styles.profil}>
      <View style={[styles.setting, styles.settingPosition]}>
        <View style={[styles.settingChild, styles.settingPosition]} />
        <View style={[styles.settingItem, styles.settingLayout]} />
        <View style={[styles.settingInner, styles.settingLayout]} />
        <View style={[styles.rectangleView, styles.settingLayout]} />
        <Image
          style={styles.unsplashjmurdhtm7ngIcon}
          contentFit="cover"
          source={require("../assets/profil.png")}
        />
        <Text style={[styles.favorites, styles.downloadTypo]}>Favorites</Text>
        <Pressable onPress={handleStartPressq}>
        <Text style={[styles.language, styles.downloadTypo]}>
          Language
          </Text>
        </Pressable>
        <Text style={[styles.mimiHeadline, styles.contentTypo]}>
          Mimi Headline
        </Text>
        <Text style={[styles.content, styles.contentTypo]}>Content</Text>
        <Text style={[styles.preferences, styles.contentTypo]}>
          Preferences
        </Text>
        
                <Pressable onPress={handleStartPressP}>
        <Text style={[styles.download, styles.downloadTypo]}>
          Privacy policy
          </Text>
          </Pressable>
        <Text style={styles.darkmode}>Darkmode</Text>
        
        <Pressable onPress={handleStartPress}>
        <Text style={[styles.today, styles.todayPosition]}>
          Notifications
          </Text>
        </Pressable>
        <Pressable onPress={handleStartPressC}>
        <Text style={[styles.onlyDownloadVia, styles.downloadTypo]}>
          ContactUs
        </Text>
        </Pressable>

        <View style={[styles.rectangle36Copy5Parent, styles.groupParentLayout]}>
          <View style={styles.rectangle36Copy5} />
          <Pressable onPress={handleStartPress}>

          <Image
            style={styles.rightIcon}
            contentFit="cover"
            source={require("../assets/right.png")}
          />
          </Pressable>
        </View>
        <View style={[styles.rectangle36Copy5Group, styles.groupParentLayout]}>
          <View style={styles.rectangle36Copy5} />
          <Image
            style={styles.rightIcon}
            contentFit="cover"
            source={require("../assets/right.png")}
          />
        </View>
        <View
          style={[styles.rectangle36Copy5Container, styles.groupParentLayout]}
        >
          
          <View style={styles.rectangle36Copy5} />
          <Image
            style={styles.rightIcon}
            contentFit="cover"
            source={require("../assets/right.png")}
          />
        </View>
        <View style={[styles.groupView, styles.groupParentLayout]}>
          <View style={styles.rectangle36Copy5} />
         
        </View>
        <View
          style={[styles.rectangle36Copy5Parent1, styles.groupParentLayout]}
        >
          <View style={styles.rectangle36Copy5} />
          <Image
            style={styles.rightIcon}
            contentFit="cover"
            source={require("../assets/right.png")}
          />
        </View>
        <View
          style={[styles.rectangle36Copy5Parent2, styles.groupParentLayout]}
        >
          <View style={styles.rectangle36Copy5} />
          <Image
            style={styles.rightIcon}
            contentFit="cover"
            source={require("../assets/right.png")}
          />
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
          <Image
            style={styles.rightIcon}
            contentFit="cover"
            source={require("../assets/right.png")}
          />
        </View>
        <Image
          style={[styles.rectangleIcon, styles.settingLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-31.png")}
        />
                <Pressable onPress={handleStartPresse}>
        <Text style={[styles.editProfile, styles.profileClr]}>
          Edit Profile
        </Text>
        </Pressable>
        <Image
          style={[styles.translateIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/translate.png")}
        />
        <Image
          style={styles.umoonIcon}
          contentFit="cover"
          source={require("../assets/umoon.png")}
        />
      
        <MaterialCommunityIcons name="message-text-outline" size={24} color="black"style={[styles.wifiIcon, styles.wifiIconPosition]} />
        {/* <Image
          style={[styles.heartIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/heart.png")}
        /> */}
       
        <MaterialIcons name="privacy-tip" size={24} color="black" style={[styles.iconoutlinedapplicationdown, styles.wifiIconPosition]} />
        <Text style={[styles.profile, styles.profileClr]}>Profile</Text>
        <Pressable onPress={handleStartPress}>

        <MaterialIcons name="notifications-none" size={25} color="black" style={styles.icon}/>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  settingPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  settingLayout: {
    height: 29,
    position: "absolute",
  },
  icon:{
    marginLeft: 24,
    top: 325,
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
  contentTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  groupParentLayout: {
    opacity: 0.65,
    height: 14,
    width: 14,
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
    backgroundColor: Color.colorWhitesmoke_200,
    height: 29,
    left: 0,
  },
  settingInner: {
    top: 427,
    width: 390,
    backgroundColor: Color.colorWhitesmoke_200,
    height: 29,
    left: 0,
  },
  rectangleView: {
    top: 542,
    width: 390,
    backgroundColor: Color.colorWhitesmoke_200,
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
  popular: {
    top: 327,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
  },
  favorites: {
    top: 464,
    display: "none",
  },
  language: {
    top: 589,
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
  preferences: {
    top: 547,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    left: 26,
    position: "absolute",
  },
  historique: {
    top: 359,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
  },
  download: {
    top: 710,
  },
  favourite: {
    top: 465,
  },
  darkmode: {
    top: 632,
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
    top: 669,
  },
  rectangle36Copy5: {
    height: 14,
    width: 14,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rightIcon: {
    top: 2,
    left: 4,
    width: 7,
    height: 10,
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
  groupView: {
    top: 365,
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
    left: 140,
    borderRadius: Border.br_8xs,
    width: 105,
  },
  editProfile: {
    top: 250,
    left: 171,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    alignItems:"center",
    padding: 3
  },
  translateIcon: {
    top: 590,
    width: 22,
    height: 22,
  },
  umoonIcon: {
    left: 24,
    height: 24,
    width: 24,
    top: 632,
    position: "absolute",
    overflow: "hidden",
  },
  wifiIcon: {
    top: 668,
  },
  heartIcon: {
    top: 468,
    width: 19,
    height: 19,
    overflow: "hidden",
  },
  iconoutlinedapplicationdown: {
    top: 706,
    overflow: "hidden",
  },
  profile: {
    top: 50,
    left: 175,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "900",
    fontSize: FontSize.size_mini,
  },
  sampleIcon: {
    borderTopRightRadius: Border.br_xl,
    width: 495,
    height: 190,
    borderTopLeftRadius: Border.br_xl,
  },
  sampleWrapper: {
    top: 708,
    left: -38,
    width: 399,
    height: 60,
    flexDirection: "row",
    borderTopLeftRadius: Border.br_xl,
    position: "absolute",
  },
  setting: {
    backgroundColor: Color.themeWhiteThemeCoreTokensUiBackgroundWhite,
    width: 414,
    height: 908,
    overflow: "hidden",
  },
  rectangle: {
    bottom: 7,
    left: 139,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorDarkslategray_100,
    width: 135,
    height: 5,
    position: "absolute",
  },
  profil: {
    borderRadius: Border.br_11xl,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default Profile;
