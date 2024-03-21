import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert , StyleSheet,ImageBackground , Image,Pressable} from 'react-native';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';
import { useNavigation } from '@react-navigation/native';
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";
import axios from 'axios';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { login } from '../redux/action';
import { useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import ToggleSwitch from 'toggle-switch-react-native'

const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [userr, setUserr] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);


  const [toggleState1, setToggleState1] = useState(false);
  const handleToggle1 = () => {
    const newState = !toggleState1;
    setToggleState1(newState);
  };
  const handleStartPressP = () => {
    navigation.navigate('PrivacyPolicy');
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }
  const handleSignIn = async () => {
    try {
      // Validate email and password
      if (!email || !password) {
        Alert.alert("Please enter both email and password.");
        return;
      }
      const loginResponse = await axios.post('http://192.168.248.151:8000/users/login', {
        email,
        password,
      });
      console.log('Login API response:', loginResponse);
      if (!loginResponse || !loginResponse.data || loginResponse.data.error) {
        Alert.alert("Invalid email or password. Please try again.");
        return;
      }
  
      // Use AsyncStorage to store user data
      await AsyncStorage.setItem('user', JSON.stringify(loginResponse.data));

    setUserr(loginResponse.data);

    setEmail('');
    setPassword('');

 

    navigation.navigate('HomePage');
    const userData = loginResponse.data;
    dispatch(login(userData));
    console.log(userData,"this is the user");


    Alert.alert("Sign in successful");
  } catch (e) {
    console.error(e);
    Alert.alert("Sign in failed. Please try again.");
  }
  };

 
  return (
    <ImageBackground
    source={require("../assets/ll.jpg")}
    style={styles.backgroundImage}
    blurRadius={2}>
      <View style={styles.overlay} />
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',  }}>
      <View style={styles.inputContainer}>
        <View style={styles.inputWithIcon}>
          <Feather name="mail" size={20} color="white" style={styles.icon1} />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
            placeholderTextColor="white"/>
        </View>
        <View style={[styles.lineView1, styles.iphone13ChildLayout1]} />
        <View style={styles.inputWithIcon}>
          <Feather name="lock" size={20} color="white" style={styles.icon1} />
          <TextInput
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={!showPassword}
              style={styles.input}
              placeholderTextColor="white"
            />
        </View>
        
        <View style={[styles.lineView1, styles.iphone13ChildLayout1]} />
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eye}>
        <Entypo name={showPassword ? "eye" : "eye-with-line"} size={20} color="white" />
      </TouchableOpacity>
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
          By signing in, you agree to our <Text style={{ color: Color.colorMediumvioletred_100 }}>Terms of Service </Text> and <Pressable onPress={handleStartPressP}><Text style={[{ color: Color.colorMediumvioletred_100 }, styles.pr]}>Privacy Policy</Text></Pressable>
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
          <AntDesign name="apple1" size={37} color="white" style={styles.apple} />

        <Text style={{ ...styles.forgotPassword, textDecorationLine: "underline" ,}}>
          Forgot password?
          </Text>
          <View style={styles.radioButtonParent}>
            <View style={styles.radioButton}>
            </View>
            <View style={styles.rememberMeWrapper}>
              <Text style={[styles.rememberMe, styles.rememberMeTypo]}>
                Remember me
              </Text>
            </View>
            <ToggleSwitch
          isOn={toggleState1}
          onColor="#56CE21"
          offColor="grey"
          size="small" 
          onToggle={handleToggle1}
          style={[styles.radioLayout, { width: 40, height: 20 }]} 
        />
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
      top: 460,
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
      left: 78,
      top: -180,
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
    inputWithIcon: {
      position: 'relative',
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
      top: 90,
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
      top: 383,
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
      width: 70,
      height:70,
      borderRadius: 20,
      marginLeft: 0,
      top:168,
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
    marginLeft:226,
   },
   icon1:{
    position: 'absolute',
    top: 145,
    left: 0,
   },
  
  });
export default SignIn;



