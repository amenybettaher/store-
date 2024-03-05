import * as React from "react";
import { StyleSheet, View, Text, Pressable,TextInput } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ContactUs = () => {
  const navigation = useNavigation(); // Initialize navigation using useNavigation hook

  const handleStartPress = () => {
    navigation.navigate('Profile'); // Navigate to 'Onbording2' screen
  };

  return (
    <View style={styles.profile2}>
              <View style={[styles.settingChild, styles.settingPosition]} />

      <View style={styles.notificationsWrapper}>

        <Pressable onPress={handleStartPress}>
          <Ionicons name="arrow-back" size={26} color="white" style={styles.back}/>
        </Pressable>
        <Text style={styles.notifications}>ContactUs</Text>
      </View>
      {/* Your ContactUs content here */}
      <TextInput
                    style={styles.name}
                    placeholder="Your Name"
                    placeholderTextColor="black"
                />
                <TextInput
                    style={styles.email}
                    placeholder="Your Email"
                    placeholderTextColor="black"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Tell me Your Story or Question For Us"
                    placeholderTextColor="black"
                />
                                <View style={[styles.profileEditChild2, styles.profileChildLayout]} />

                                <Text style={[styles.update, styles.updateTypo]}>Update</Text>

               
    </View>
  );
};

const styles = StyleSheet.create({
  back:{
    marginLeft: -70,
    top: -20,
  },
  settingChild: {
    backgroundColor: Color.colorMediumvioletred_200,
    width: 450,
    height: 191,
    marginLeft:-30,
    top:0,
    
  },
  update: {
    top: 681,
    left: 180,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
},
updateTypo: {
    position: "absolute",
    color: "white",
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
  name: {
    marginLeft: 5,
    top: 110,
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    backgroundColor: Color.colorSilver_300,
    borderRadius: Border.br_5xs,
    left: 36,
    alignItems: "center",
    padding: 7,
    marginBottom: 20,
    width: 318,
},
email:{
    marginLeft: 5,
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    backgroundColor: Color.colorSilver_300,
    borderRadius: Border.br_5xs,
    left: 36,
    alignItems: "center",
    padding: 7,
    marginBottom: 20,
    width: 318,
    top: 110,

},
input:{
    marginLeft: 5,
    borderWidth: 1,
    borderColor: Color.colorDarkgray_100,
    borderStyle: "solid",
    backgroundColor: Color.colorSilver_300,
    borderRadius: Border.br_5xs,
    left: 36,
    marginBottom: 20,
    width: 318,
    height:120,
    top: 110,
    paddingBottom:90,
    paddingLeft:8,
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

export default ContactUs;
