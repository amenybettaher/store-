import * as React from "react";
import { StyleSheet, View, Text, Pressable, } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const AboutUs = () => {
  const navigation = useNavigation(); // Initialize navigation using useNavigation hook

  const handleStartPress = () => {
    navigation.navigate('Profil'); // Navigate to 'Onbording2' screen
  };

  return (
    <View style={styles.profile2}>
              <View style={[styles.settingChild, styles.settingPosition]} />

      <View style={styles.notificationsWrapper}>

        <Pressable onPress={handleStartPress}>
          <Ionicons name="arrow-back" size={26} color="white" style={styles.back}/>
        </Pressable>
        <Text style={styles.notifications}>AboutUs</Text>
      </View>
    <Text style={styles.titre}>Definition for Our Application</Text>
<Text style={styles.text}>
Echrili is an innovative application designed to streamline the shopping experience by leveraging barcode scanning technology and integrated features. Primarily, Echrili functions as a comprehensive shopping assistant within supermarkets. Its core functionalities include:
Our mission at Echrili is simple: to provide our customers with a wide selection of high-quality products at competitive prices, while maintaining a focus on sustainability and community engagement. We believe in fostering a culture of respect.
</Text>
    <Text style={styles.titre2}>Team how create the Application</Text>
    <Text style={styles.text2}>Abdelhak Barbouche    </Text>
    <Text style={styles.text22}>Ameni Bethare </Text>
    <Text style={styles.text23}>Hama Hajri </Text>
    <Text style={styles.text24}>Hiba Jalleli  </Text>
    <Text style={styles.titre3}>Thank You</Text>
    <Text style={styles.text3}>From all of us at [Supermarket Name], thank you for choosing us as your preferred shopping destination. We appreciate your support and look forward to continuing to serve you for many years to come.
</Text>    
    </View>
  );
};

const styles = StyleSheet.create({
  back:{
    marginLeft: -70,
    top: -20,
  },
  titre:{
    fontSize: 17,
    fontWeight: "900",
    left: 30,
    top: 20,
    color:"black",
  },
  titre2:{
    fontSize: 17,
    fontWeight: "900",
    left: 30,
    top: 210,
    color:"black",
  },
  titre3:{
    fontSize: 17,
    fontWeight: "900",
    left: 30,
    top: 343,
    color:"black",
  },
  text:{
    fontSize: 15,
    lineHeight: 23,
    fontFamily: FontFamily.titlePoppinsRegular,
    fontWeight: "800",
    width: 350,
    left:30,
    top: 240,
    position: "absolute",
    color:"#696969"
  },
  text2:{
    fontSize: 15,
    lineHeight: 23,
    fontFamily: FontFamily.titlePoppinsRegular,
    fontWeight: "800",
    left:30,
    top: 480,
    position: "absolute",
    color:"#696969",
 },
 text22:{
    fontSize: 15,
    lineHeight: 23,
    fontFamily: FontFamily.titlePoppinsRegular,
    fontWeight: "800",
    left:30,
    top: 450,
    position: "absolute",
    color:"#696969",
 },
 text23:{
    fontSize: 15,
    lineHeight: 23,
    fontFamily: FontFamily.titlePoppinsRegular,
    fontWeight: "800",
    left:30,
    top: 510,
    position: "absolute",
    color:"#696969",
 },
 text24:{
    fontSize: 15,
    lineHeight: 23,
    fontFamily: FontFamily.titlePoppinsRegular,
    fontWeight: "800",
    left:30,
    top: 540,
    position: "absolute",
    color:"#696969",
 },
  text3:{
    fontSize: 14,
    lineHeight: 23,
    fontFamily: FontFamily.titlePoppinsRegular,
    fontWeight: "800",
    width: 350,
    left:30,
    top: 600,
    position: "absolute",
    color:"#696969"
  },

  settingChild: {
    backgroundColor: Color.colorMediumvioletred_200,
    width: 450,
    height: 191,
    marginLeft:-30,
    top:0,
    
  },

profileEditChild2: {
    top: 672,
    left: 59,
    width: 280,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorMediumvioletred_200,
},
profileChildLayout: {
    height: 40,
    position: "absolute",
},


  notifications: {
    fontSize: 20,
    lineHeight: 28,
    textAlign: "center",
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    width: 221,
    left: 0,
    top: 40,
    position: "absolute",
    color:"white"
  },
  notificationsWrapper: {
    top: 65,
    left: 87,
    height: 28,
    width: 221,
    position: "absolute",
  },
  profile2: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.themeWhiteThemeCoreTokensUiBackgroundWhite,
    overflow: "hidden",
    height: 844,
    width: 399,
  },
});

export default AboutUs;
