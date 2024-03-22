import * as React from "react";
import { StyleSheet, View, Text, Pressable,TextInput } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PrivacyPolicy = () => {
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
        <Text style={styles.notifications}>Politique De Confidentialité</Text>
      </View>
      {/* Your ContactUs content here */}
    <Text style={styles.titre}>Types de données que nous collectons</Text>
<Text style={styles.text}>Lorsque vous utilisez l'application Echrili, nous pouvons collecter les types de données suivants :

Informations fournies par vous : cela peut inclure des informations personnelles telles que votre nom, votre adresse e-mail et vos coordonnées lorsque vous créez un compte chez nous.
Données sur les produits numérisés : lorsque vous utilisez la fonction de lecture de codes-barres de l'application, nous collectons des données sur les produits que vous numérisez, telles que les noms des produits, leurs descriptions et leurs prix.
</Text>
    <Text style={styles.titre2}>Utilisation de vos données personnelles</Text>
    <Text style={styles.text2}>Nous utilisons les données personnelles que nous collectons aux fins suivantes :

Fournir et maintenir l'application Echrili et ses fonctionnalités.
Pour personnaliser votre expérience et améliorer nos services.
Pour communiquer avec vous, notamment en envoyant des mises à jour et des notifications importantes.

</Text>
    <Text style={styles.titre3}>Divulgation de vos données personnelles</Text>
    <Text style={styles.text3}>Nous pouvons divulguer vos données personnelles dans les circonstances suivantes :

Aux prestataires de services tiers qui nous aident à exploiter l’application et à fournir nos services.
Pour se conformer aux obligations légales ou répondre aux demandes légales des autorités.
Dans le cadre d'une fusion, d'une acquisition ou d'une vente d'actifs, auquel cas vos données personnelles peuvent être transférées à une autre entité.
Nous prenons toutes les mesures raisonnables pour protéger vos données personnelles et ne les conservons que le temps nécessaire pour atteindre les objectifs décrits dans la présente politique de confidentialité.

En utilisant l'application Echri, vous consentez à la collecte, à l'utilisation et à la divulgation de vos données personnelles comme décrit dans la présente politique de confidentialité.



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
