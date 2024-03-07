import { StyleSheet, View, Text,Pressable } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import fr from "./fr.json"; 
import React, { useState } from "react";
import Profil from './Profil.js';

const Language = () => {
    const navigation = useNavigation();
    const handleStartPress = () => {
      navigation.navigate('Profil'); 
    };
    const handleLanguageChange = (newLanguage) => {
      setLanguage(newLanguage); }
    const [language, setLanguage] = useState(fr); 
    

  return (
    <View style={[styles.profile3, styles.topLayout]}>
     <View style={[styles.settingChild, styles.settingPosition]} />
      <View style={[styles.top, styles.topLayout]}>
          <View style={styles.bar}>
        </View>
      </View>
      <Pressable onPress={handleStartPress}>
      <Ionicons name="arrow-back" size={26} color="white" style={styles.back}/>
      </Pressable>
      <View style={styles.languageWrapper}>
        <Text style={styles.language}>Language</Text>
      </View>
      <View style={[styles.groupParent, styles.groupParentLayout]}>
        <View style={[styles.groupContainer, styles.groupParentLayout]}>
          <View style={[styles.component16Parent, styles.groupParentLayout]}>
            <View style={[styles.component17, styles.componentLayout]}>
            </View>
          </View>
        </View>
        <View style={[styles.groupView, styles.groupParentLayout]}>
          <View style={[styles.component14Parent, styles.groupParentLayout]}>
              <Text style={[styles.englishUs, styles.othersFlexBox]}>
                English 
              </Text>
            <View style={[styles.component17, styles.componentLayout]}>
            <Pressable onPress={() => handleLanguageChange(fr)}>
              <Text style={[styles.englishUs, styles.othersFlexBox]}>
              French
              </Text>
              </Pressable>
              <Text style={[styles.englishU, styles.othersFlexBox]}>
              Arabic
              </Text>
              <View style={[styles.radio, styles.radioPosition]}>
                <View style={[styles.radio1, styles.iconLayout]}>
                </View>
              </View>
            </View>
          </View>
          <Text style={[styles.others, styles.othersFlexBox]}>Suggested</Text>
        </View>
      </View>
      <View style={styles.profile3Child} />
      <View style={styles.profile3Chil} />
    </View>
  );
};
const styles = StyleSheet.create({
  topLayout: {
    height: 844,
    width: 490,
  },
  settingChild: {
    backgroundColor: Color.colorMediumvioletred_200,
    width: 450,
    height: 191,
    
  },
  back:{
    top: -150,
    marginLeft: 10,
  },
  groupParentLayout: {
    width: 342,
    position: "absolute",
  },
  top: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  language: {
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
  languageWrapper: {
    top: 65,
    left: 87,
    height: 28,
    width: 221,
    position: "absolute",
  },
  headerIcon: {
    top: 69,
    left: 24,
    position: "absolute",
  },
  englishUs: {
    width: "70.18%",
    top: 110,
    left: "0%",
    fontSize: FontSize.bodyMedium_size,
    lineHeight: 20,
    fontFamily: FontFamily.bodySmall,
  },
  englishU: {
    width: "70.18%",
    top: 150,
    left: "0%",
    fontSize: FontSize.bodyMedium_size,
    lineHeight: 20,
    fontFamily: FontFamily.bodySmall,
  },
  component17: {
    top: 40,
  },
  others: {
    fontSize: FontSize.titlePoppinsMedium_size,
    lineHeight: 24,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    letterSpacing: 0,
    left: 0,
    top: 100,
  },
  component14Parent: {
    height: 60,
    top: 40,
    left: 0,
  },
  groupParent: {
    top: 128,
    height: 492,
    left: 24,
  },
  profile3Child: {
    top: 371,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_400,
    borderTopWidth: 1,
    width: 353,
    height: 1,
    left: 24,
    position: "absolute",
  },
  profile3Chil: {
    top: 310,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_400,
    borderTopWidth: 1,
    width: 353,
    height: 1,
    left: 24,
    position: "absolute",
  },
});
export default Language;