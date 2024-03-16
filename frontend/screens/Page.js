import * as React from "react";
import { useEffect } from "react"; // Import useEffect hook
import { Image } from "expo-image";
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";
import { FontAwesome6 } from '@expo/vector-icons';
const Page = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Onbording');
    }, 8000);

    return () => clearTimeout(timer);
  }, []);
  

  return (
    <View style={styles.page2}>
      <View style={styles.rectangleParent}>
        <Image
          style={[styles.instanceChild, styles.instanceLayout]}
          contentFit="cover"
          source={require("../assets/hh.png")}
          blurRadius={1}
        />
        <Text style={[styles.echrili, styles.echriliPosition]} >E   HRILI</Text>
        <FontAwesome6 name="star-and-crescent" size={24} color="red" style={styles.flag} />
        <Image
          style={[styles.instanceItem, styles.echriliPosition]}
          contentFit="cover"
          //source={require("../assets/star-1.png")}
        />
      </View>
      <View style={styles.rectangle} />
    </View>
  );
};

const styles = StyleSheet.create({
  instanceLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    
  },
  flag:{
    marginLeft: 161,
    top: 422,
  },
  echriliPosition: {
    position: "absolute",
  },
  instanceChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "-22.95%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    
  },
  echrili: {
    height: "6.03%",
    width: "55.07%",
    top: "45.97%",
    left: "34.95%",
    fontSize: FontSize.size_17xl,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.themeWhiteThemeCoreTokensUiBackgroundWhite,
    textAlign: "left",
    color: "white"
  },
  instanceItem: {
    height: "13.73%",
    width: "35.75%",
    top: "45.31%",
    right: "33.09%",
    bottom: "40.96%",
    left: "31.16%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  rectangleParent: {
    top: 0,
    left: 0,
    width: 414,
    position: "absolute",
    height: 896,
  },
  page2: {
    borderRadius: 1.25,
    backgroundColor: Color.sthDark,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 896,
  },
});

export default Page;
