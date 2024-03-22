import * as React from "react";
import { StyleSheet,Image, View, Text, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from "expo-linear-gradient";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const 
Onbording = () => {
  const navigation = useNavigation(); 

  const handleStartPress = () => {
    navigation.navigate('Onbording2'); 
  };

  return (
    <View style={styles.onboridng}>
      <Image
        style={[styles.screenshot20240226At349, styles.onboridngChildPosition]}
        contentFit="cover"
        source={require("../assets/mm.jpg")}
      />
      <Image
        style={styles.subwayG895f9138419201Icon}
        contentFit="cover"
        //source={require("../assets/subwayg895f91384-1920-1.png")}
      />
      <LinearGradient
        style={[styles.onboridngChild, styles.onboridngChildPosition]}
        locations={[0, 0.45, 1]}
        colors={["rgba(0, 0, 0, 0)", "#000", "#000"]}
      />
      <LinearGradient
        style={[styles.onboridngChild, styles.onboridngChildPosition]}
        locations={[0, 0.45, 1]}
        colors={["rgba(0, 0, 0, 0)", "#000", "#000"]}
      />
      <Text
        style={[styles.getThePrice, styles.getThePriceClr]}
      >{`Obtenez le prix par vous-même`}</Text>
      <Image
        style={styles.onboridngInner}
        contentFit="cover"
        //source={require("../assets/ellipse-71.png")}
      />
      <Image
        style={styles.onboridngInner}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
            <Pressable onPress={handleStartPress}>

      <Image
        style={styles.onboridngChild1}
        contentFit="cover"
        source={require("../assets/ellipse-6.png")}
      />
      </Pressable>
      <Pressable onPress={handleStartPress}>
        <Text style={styles.arrowIcon}>Start</Text>
      </Pressable>

      <Text style={[styles.scanYourProduct, styles.getThePriceClr]}>
      Scannez votre produit      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  onboridngChildPosition: {
    width: 394,
    height: 621,
    left: 0,
    position: "absolute",
  },
  getThePriceClr: {
    color: Color.themeWhiteThemeCoreTokensUiBackgroundWhite,
    position: "absolute",
    color: "white"
  },
  screenshot20240226At349: {
    borderRadius: 24,
    height: 555,
    top: 0,
  },
  subwayG895f9138419201Icon: {
    left: -756,
    width: 1512,
    height: 1001,
    display: "none",
    top: 0,
    position: "absolute",
  },
  onboridngChild: {
    top: 323,
    borderBottomRightRadius: Border.br_13xl,
    borderBottomLeftRadius: Border.br_13xl,
    height: 521,
    backgroundColor: "transparent",
  },
  getThePrice: {
    top: 600,
    left: 18,
    fontSize: 30,
    fontWeight: "700",
    fontFamily: FontFamily.markaziTextBold,
    textAlign: "center",
    width: 354,
  },
  onboridngInner: {
    top: 659,
    left: 138,
    width: 115,
    height: 115,
    position: "absolute",
  },
  onboridngChild1: {
    top: 677,
    left: 158,
    width: 75,
    height: 75,
    position: "absolute",
  },
  arrowIcon: {
    top: 705,
    left: 183,
    maxHeight: "100%",
    width: 27,
    position: "absolute",
    color:"white"
   
  },
  scanYourProduct: {
    top: 800,
    left: 137,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.outfitRegular,
    textAlign: "left",
    width: 342,
    color:"red"
  },
  onboridng: {
    backgroundColor: Color.themeWhiteThemeCoreTokensUiBackgroundWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Onbording;
