import * as React from "react";
import { Image } from "expo-image";
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text,Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Onbording2 = () => {
  const navigation = useNavigation(); // Initialize navigation using useNavigation hook

  const handle = () => {
    navigation.navigate('SignIn'); // Navigate to 'SignUp' screen
  };
  
  

  
  return (
    <LinearGradient
    style={styles.onbording2}
    colors={["#000", "#FFF"]} // Example colors, provide your own
  >
      <Image
        style={styles.ramadanGroceryShoppingCovIcon}
        contentFit="cover"
        source={require("../assets/ramadangroceryshopping-cover1173232-1.png")}
      />
      <LinearGradient
        style={[styles.onbording2Child, styles.onbording2Position]}
        locations={[0, 0.45, 1]}
        colors={["rgba(0, 0, 0, 0)", "#000", "#000"]}
      />
      <LinearGradient
        style={styles.onbording2Item}
        locations={[0, 0.58]}
        colors={["rgba(15, 15, 15, 0)", "#0f0f0f"]}
      />
      <LinearGradient
        style={[styles.onbording2Inner, styles.onbording2Position]}
        locations={[0, 0.45, 1]}
        colors={["rgba(0, 0, 0, 0)", "#000", "#000"]}
      />
      <View style={styles.andreaDeSantisDefphBamfkU} />
      <View style={styles.welcomeToEchriliParent}>
        <Text
          style={[styles.welcomeToEchrili, styles.welcomeToEchriliLayout]}
        >{`Welcome to ECHRILI `}</Text>
        <Text
          style={[styles.thisNewTechnologie, styles.welcomeToEchriliLayout]}
        >{`this New technologie you can sacan our product and see more information about the product `}</Text>
      </View>
      <View style={styles.rectangleView} />
      <Pressable onPress={handle}>
  <Text style={styles.getStarted}>Get Started</Text>
</Pressable>

    </LinearGradient>
  );
};


const styles = StyleSheet.create({
  onbording2Position: {
    height: 521,
    top: 323,
    width: 398,
    left: 0,
    position: "absolute",
    backgroundColor: "transparent",
  },
  welcomeToEchriliLayout: {
    width: 342,
    textAlign: "left",
    color: "white"
  },
  ramadanGroceryShoppingCovIcon: {
    top: 0,
    left: -49,
    width: 601,
    height: 518,
    position: "absolute",
  },
  onbording2Child: {
    borderBottomLeftRadius: Border.br_13xl,
    borderBottomRightRadius: Border.br_13xl,
    height: 521,
    top: 323,
  },
  onbording2Item: {
    top: 409,
    height: 435,
    width: 390,
    left: 0,
    borderBottomLeftRadius: Border.br_13xl,
    borderBottomRightRadius: Border.br_13xl,
    position: "absolute",
    backgroundColor: "transparent",
  },
  onbording2Inner: {
    borderBottomLeftRadius: 2,
    height: 521,
    top: 323,
  },
  andreaDeSantisDefphBamfkU: {
    top: 90,
    left: 36,
    width: 578,
    height: 867,
    position: "absolute",
  },
  welcomeToEchrili: {
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
    fontFamily: FontFamily.manropeExtraBold,
  },
  thisNewTechnologie: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.outfitRegular,
    marginTop: 8,
  },
  welcomeToEchriliParent: {
    top: 593,
    left: 48,
    position: "absolute",
  },
  rectangleView: {
    top: 730,
    left: 48,
    borderRadius: Border.br_5xs,
    backgroundColor: "#7d0c42",
    width: 308,
    height: 51,
    position: "absolute",
  },
  getStarted: {
    top: 750,
    left: 159,
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    fontFamily: FontFamily.outfitSemiBold,
    textAlign: "left",
    color: "white",
    position: "absolute",
  },
  onbording2: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
});

export default Onbording2;
