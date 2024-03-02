import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert , StyleSheet,ImageBackground , Image} from 'react-native';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';
import { useNavigation } from '@react-navigation/native';
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";
import axios from 'axios';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [user, setUser] = useState(null);
  const navigation = useNavigation();

  const handleSignIn = async () => {
    try {
      // Validate email and password
      if (!email || !password) {
        Alert.alert("Please enter both email and password.");
        return;
      }
      const loginResponse = await axios.post('http://192.168.50.151:8000/users/login', {
        email,
        password,
      });
      console.log('Login API response:', loginResponse);
      if (!loginResponse || !loginResponse.data || loginResponse.data.error) {
        Alert.alert("Invalid email or password. Please try again.");
        return;
      }
      sessionStorage.setItem('user', true);
      setUser(loginResponse.data);
      console.log('user:', loginResponse);
      setEmail('');
      setPassword('');
      navigation.navigate('home');
      Alert.alert("Sign in successful");
    } catch (e) {
      console.error(e);
      Alert.alert("Sign in failed. Please try again.");
    }
  };

  return (
    <ImageBackground
    source={require("../assets/360_F_434190838_3FCCIiag1LYlL1IA6pb0WPEEqxiZVfPO.jpeg")}
    style={styles.backgroundImage}
    blurRadius={2}>
      <View style={styles.overlay} />
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',  }}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          placeholderTextColor="white"/>
      <View style={[styles.lineView1, styles.iphone13ChildLayout1]} />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          style={styles.input}
          placeholderTextColor="white" />
              <View style={[styles.lineView1, styles.iphone13ChildLayout1]} />
              <Entypo name="eye-with-line" size={20} color="white" style={styles.eye}/>

        <TouchableOpacity
          onPress={handleSignIn}
          style={styles.btn1}
          color={"#7D0C43"} >
          <Text style={{ color: '#fff', textAlign: 'center' }}>Sign In</Text>
          
        </TouchableOpacity>
        <Text style={styles.dont}>
          Don't have an account? <Text style={{ color: Color.colorMediumvioletred_100 }} onPress={() => navigation.navigate('SignUp')}>Sign Up</Text>
        </Text>
        <Text style={styles.by}>
          By signing in, you agree to our <Text style={{ color: Color.colorMediumvioletred_100 }}>Terms of Service</Text> and <Text style={{ color: Color.colorMediumvioletred_100 }}>Privacy Policy</Text>.
        </Text>
      </View>
      <View style={styles.h2}>
          <Text style={styles.signup1} >SignIn</Text>
        </View>
        <View style={styles.lineParent}>
            <View style={[styles.frameBorder, { backgroundColor: 'red' }]} />
            <Text style={styles.orSignupWith}>Or signup with</Text>
            <View style={[styles.frameItem, styles.frameBorder, ]} />
          </View>
          
          <Image source={require('../assets/Google_Icons-09-512.webp')} style={styles.google} />
          <Image source={require('../assets/1657548367Facebook-logo.png')} style={styles.fb} />
          <Image source={require('../assets/png-apple-logo-9711.png')} style={styles.apple} />

        <Text style={{ ...styles.forgotPassword, textDecorationLine: "underline" ,}}>
          Forgot password?
          </Text>
          <View style={styles.radioButtonParent}>
            <View style={styles.radioButton}>
              <View style={[styles.radioButtonChild, styles.radioLayout]} />
              <View style={[styles.radioButtonItem, styles.radioLayout]} />
            </View>
            <View style={styles.rememberMeWrapper}>
              <Text style={[styles.rememberMe, styles.rememberMeTypo]}>
                Remember me
              </Text>
            </View>
            <Feather name="mail" size={20} color="white" style={styles.icon1}/>
            <FontAwesome6 name="unlock-keyhole" size={20} color="white"style={styles.icon2} />

          </View>
    </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
    loginChildPosition: {
      left: 0,
      top: 0,
    },


    rememberMeTypo: {
      color: Color.sthLightgrey,
      fontSize: FontSize.size_sm,
      lineHeight: 21,
      fontFamily: FontFamily.latoRegular,
      textAlign: "left",
      position: "absolute",
    },
    radioLayout: {
      borderRadius: Border.br_31xl,
      position: "absolute",

    },

    radioButtonChild: {
      backgroundColor: Color.sthLightgrey,
      right: "0%",
      left: "0%",
      bottom: "0%",
      top: "0%",
      height: "100%",
      width: "100%",
    },
    radioButtonItem: {
      height: "78.75%",
      width: "44.06%",
      right: "50.12%",
      bottom: "10.83%",
      left: "5.83%",
      shadowColor: "green",
      elevation: 2,
      shadowOpacity: 1,
      shadowOffset: {
        width: 0,
        height: 12.521552085876465,
      },
      borderRadius: Border.br_31xl,
      backgroundColor: Color.themeWhiteThemeCoreTokensUiBackgroundWhite,
    },
    radioButton: {
      width: 43,
      height: 24,
    },
    radioButtonParent: {
      top: 499,
      alignItems: "center",
      flexDirection: "row",
      left: 40,
      position: "absolute",
    },
    rememberMe: {
      left: 0,
      top: 0,
    },
    rememberMeWrapper: {
      width: 89,
      height: 21,
      marginLeft: 6,
    },

    forgotPassword: {
       color: Color.sthLightgrey,
      left: 65,
      top: -150,
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.6)', 
    },
    inputContainer: {
      borderRadius: 5,
      width: 290,
      marginLeft:40,
      top:0, 
    },
    input: {
      height: 50,
      padding: 10,
      color:"white",
      fontSize:18,
      marginLeft:20,
      top:129,
    },
    iphone13ChildLayout1: {
      height: 1,
      width: 250,
      borderTopWidth: 1,
      borderColor: Color.shadesWhite,
      borderStyle: "solid",
      left: -2,
      top: 120,
      marginBottom:10,
    },
    btn1: {
      top: 220,
      height: 39,
      shadowOpacity: 1,
       elevation: 10.02,
      maxWidth: 150,
      marginLeft:50,
      backgroundColor: "#7D0C43",
      borderRadius: Border.br_31xl,
      justifyContent: "center",
      alignItems: "center",
      shadowColor: "#000",
    },
    h2: {
      top: 140,
      left: 120,
      paddingHorizontal: 0,
      flexDirection: "row",
      position: "absolute",
    },
    signup1: {
      fontSize: FontSize.size_17xl,
      textAlign: "center",
      color:"white",
      fontWeight: "700",
    },
    by:{
      top: 413,
      color: "white",
      width: 390,
      marginLeft: -50,
      fontSize:14.5,
    },
    orSignupWith: {
      lineHeight: 21,
      marginLeft: 16,
      color: Color.primaryGrey2,
      fontFamily: FontFamily.latoRegular,
      fontSize: FontSize.size_base,
      textAlign: "center",
      top:270
    },
    frameItem: {
      marginLeft: 16,
    },
    lineParent: {
      justifyContent: "center",
      width: 260,
      flexDirection: "row",
      alignItems: "center",
    },
    frameBorder: {
      height: 1,
      borderTopWidth: 1,
      borderColor: "white",
      borderStyle: "solid",
      flex: 1,
      top:270,
    },
    google:{
      width: 60,
      height:60,
      borderRadius: 20,
      marginLeft: -220,
      top:283,
      textAlign: "center",
      padding: 14,
    },
    fb:{
      width:60,
      height:50,
      borderRadius: 20,
      marginLeft: 215,
      top:226,
      textAlign: "center",
      padding: 14,
    },
    apple:{
      width: 50,
      height:50,
      borderRadius: 20,
      marginLeft: 1,
      top:173,
      textAlign: "center",
      padding: 14,
    },
    si:{
      height: 280,
      width:290,
    },
   dont:{
color:"white",
top:150,
left:40,
fontSize:FontSize.size_17,
fontWeight:"400",
width:420,
   },
   eye:{
    top:83,
    marginLeft:222,
   },
   icon1:{
    top:-121,
    marginLeft:-135,
   },
   icon2:{
    top:-60,
    marginLeft:-17,
    
   }
  });
export default SignIn;
