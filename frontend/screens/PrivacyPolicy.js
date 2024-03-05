import * as React from "react";
import { StyleSheet, View, Text, Pressable,TextInput } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PrivacyPolicy = () => {
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
        <Text style={styles.notifications}>Privacy Policy</Text>
      </View>
      {/* Your ContactUs content here */}
    <Text style={styles.titre}>Types of Data We Collect</Text>
<Text style={styles.text}>When you use the Echri app, we may collect the following types of data:

Information provided by you: This may include personal information such as your name, email address, and contact details when you register an account with us.
Scanned Product Data: When you use the barcode scanning feature of the app, we collect data about the products you scan, such as product names, descriptions, and prices.
Usage Data: We may collect information about how you interact with the app, including which features you use and how often you use them.
</Text>
    <Text style={styles.titre2}>Use of Your Personal Data</Text>
    <Text style={styles.text2}>We use the personal data we collect for the following purposes:

To provide and maintain the Echri app and its features.
To personalize your experience and improve our services.
To communicate with you, including sending important updates and notifications.
To analyze usage trends and improve the functionality of the app.

</Text>
    <Text style={styles.titre3}>Disclosure of Your Personal Data</Text>
    <Text style={styles.text3}>We may disclose your personal data in the following circumstances:

To third-party service providers who assist us in operating the app and providing our services.
To comply with legal obligations or respond to lawful requests from authorities.
In connection with a merger, acquisition, or sale of assets, in which case your personal data may be transferred to another entity.
We take all reasonable measures to protect your personal data and only retain it for as long as necessary to fulfill the purposes outlined in this Privacy Policy.

By using the Echri app, you consent to the collection, use, and disclosure of your personal data as described in this Privacy Policy. If you have any questions or concerns about our privacy practices, please contact us at [contact@email.com].



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
    width: 350,
    left:30,
    top: 450,
    position: "absolute",
    color:"#696969"
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

export default PrivacyPolicy;
