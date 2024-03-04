import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text,Pressable } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';



const Language = () => {
    const navigation = useNavigation();

    const handleStartPress = () => {
      navigation.navigate('Profil'); 
    };
  return (
    <View style={[styles.profile3, styles.topLayout]}>
                      <View style={[styles.settingChild, styles.settingPosition]} />

      <View style={[styles.top, styles.topLayout]}>
        <View style={[styles.statusBar, styles.statusBarPosition]}>
          <View style={styles.statusIcons}>
          </View>
        </View>
        <View style={[styles.homeIndicator, styles.statusBarPosition]}>
          <View style={styles.bar}>
            <View style={[styles.base, styles.basePosition]} />
          </View>
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
            <View style={[styles.component16, styles.componentLayout]}>
              <Text style={[styles.englishUs, styles.othersFlexBox]}>
                Mandarin
              </Text>
              
            </View>
            <View style={[styles.component18, styles.componentLayout]}>
              <Text style={[styles.englishUs, styles.othersFlexBox]}>
                Spanish
              </Text>
              
            </View>
            <View style={[styles.component20, styles.componentLayout]}>
              <Text style={[styles.englishUs, styles.othersFlexBox]}>
                Arabic
              </Text>
             
            </View>
            <View style={[styles.component22, styles.componentLayout]}>
              <Text style={[styles.englishUs, styles.othersFlexBox]}>
                Indonesia
              </Text>
             
            </View>
            <View style={[styles.component17, styles.componentLayout]}>
              <Text style={[styles.englishUs, styles.othersFlexBox]}>
                Hindi
              </Text>
            
            </View>
            <View style={[styles.component19, styles.componentLayout]}>
              <Text style={[styles.englishUs, styles.othersFlexBox]}>
                French
              </Text>
             
            </View>
            <View style={[styles.component21, styles.componentLayout]}>
              <Text style={[styles.englishUs, styles.othersFlexBox]}>
                Russian
              </Text>
            
            </View>
            <View style={[styles.component23, styles.componentLayout]}>
              <Text style={[styles.englishUs, styles.othersFlexBox]}>
                Vietnamese
              </Text>
             
            </View>
          </View>
          <Text style={[styles.others, styles.othersFlexBox]}>Others</Text>
        </View>
        <View style={[styles.groupView, styles.groupParentLayout]}>
          <View style={[styles.component14Parent, styles.groupParentLayout]}>
            <View style={[styles.component16, styles.componentLayout]}>
              <Text style={[styles.englishUs, styles.othersFlexBox]}>
                English (US)
              </Text>
              
            </View>
            <View style={[styles.component17, styles.componentLayout]}>
              <Text style={[styles.englishUs, styles.othersFlexBox]}>
                English (UK)
              </Text>
              <View style={[styles.radio, styles.radioPosition]}>
                <View style={[styles.radio1, styles.iconLayout]}>
                
                  <View style={styles.small} />
                </View>
              </View>
            </View>
          </View>
          <Text style={[styles.others, styles.othersFlexBox]}>Suggested</Text>
        </View>
      </View>
      <View style={styles.profile3Child} />
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
  statusBarPosition: {
    width: 390,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout1: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  lightSpaceBlock: {
    marginLeft: 4,
    height: 14,
  },
  basePosition: {
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  groupParentLayout: {
    width: 342,
    position: "absolute",
  },
  componentLayout: {
    height: 20,
    width: 342,
    left: 0,
    position: "absolute",
  },
  othersFlexBox: {
    textAlign: "left",
    letterSpacing: 0,
    color: Color.darkGray0,
    position: "absolute",
  },
  radioPosition: {
    left: "92.98%",
    bottom: "-10%",
    right: "0%",
    top: "-10%",
    width: "7.02%",
    height: "120%",
    position: "absolute",
  },
  notchIcon: {
    height: 30,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  networkSignalLight: {
    width: 20,
    height: 14,
  },
  wifiSignalLight: {
    width: 16,
  },
  batteryLight: {
    width: 25,
  },
  statusIcons: {
    top: 16,
    right: 14,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  indicatorIcon: {
    top: 8,
    right: 71,
    width: 6,
    height: 6,
    position: "absolute",
  },
  timeLight: {
    top: 12,
    left: 21,
    borderRadius: Border.br_xl,
    width: 54,
    height: 21,
    position: "absolute",
    overflow: "hidden",
  },
  statusBar: {
    height: 44,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  base: {
    bottom: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.darkGray0,
  },
  bar: {
    right: 121,
    bottom: 8,
    left: 120,
    height: 5,
    position: "absolute",
  },
  homeIndicator: {
    top: 810,
    height: 34,
    left: 0,
    position: "absolute",
    overflow: "hidden",
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
  radioIcon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  component16: {
    top: 0,
  },
  component18: {
    top: 80,
  },
  component20: {
    top: 160,
  },
  component22: {
    top: 240,
  },
  component17: {
    top: 40,
  },
  component19: {
    top: 120,
  },
  component21: {
    top: 200,
  },
  component23: {
    top: 280,
  },
  component16Parent: {
    height: 300,
    top: 40,
    left: 0,
  },
  others: {
    fontSize: FontSize.titlePoppinsMedium_size,
    lineHeight: 24,
    fontFamily: FontFamily.titlePoppinsMedium,
    fontWeight: "600",
    letterSpacing: 0,
    left: 0,
    top: 120,
  },
  groupContainer: {
    top: 152,
    height: 340,
    left: 0,
  },
  bigIcon: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  small: {
    top: 6,
    left: 6,
    borderRadius: Border.br_81xl,
    width: 12,
    height: 12,
    position: "absolute",
    backgroundColor: Color.themeWhiteThemeCoreTokensUiBackgroundWhite,
  },
  radio1: {
    overflow: "hidden",
  },
  radio: {
    flexDirection: "row",
  },
  component14Parent: {
    height: 60,
    top: 40,
    left: 0,
  },
  groupView: {
    height: 100,
    left: 0,
    top: 0,
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
  profile3: {
    borderRadius: Border.br_13xl,
    overflow: "hidden",
    backgroundColor: Color.themeWhiteThemeCoreTokensUiBackgroundWhite,
  },
});

export default Language;
