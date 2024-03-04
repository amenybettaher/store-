import React, { useState } from 'react';
import { View, TextInput, Button, TouchableOpacity, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth, GoogleProvider } from '../firebase/config';
// import LinearGradient from 'react-native-linear-gradient';

import { useSignInWithFacebook } from 'react-firebase-hooks/auth';
import { FacebookProvider } from '../firebase/config';

import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Color, FontFamily, FontSize ,Border} from "../GlobalStyles";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [birth, setBirth] = useState('');
  const [firstName, setFirst] = useState('');
  const [lastName, setLast] = useState('');
  const [password, setPassword] = useState('');

  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithFacebook] = useSignInWithFacebook(auth);

  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate('SignIn');
  };

  const handleSignUp = async () => {


    try {
      navigation.navigate('HomePage');

      const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;
      if (!passwordRegex.test(password)) {
        alert("Password must contain at least one capital letter, one number, and one symbol (!@#$%^&*)");
        return;
      }
  
      const res = await createUserWithEmailAndPassword(email, password);
  
      if (!res || !res.user) {
        throw new Error("User creation failed. Please try again.");
      }
  
      const registerResponse = await axios.post('http:// 192.168.43.151:8000/users/register', {
        firstName,
        lastName,
        email,
        birth,
        password
      });
  
      console.log('Registration API response:', registerResponse);
  
      // Store the user's email in session storage
      sessionStorage.setItem('userEmail', email);
  
      setFirst('');
      setLast('');
      setEmail('');
      setPassword('');
      setBirth('');
      setFirst('');
      setLast('');

      navigation.navigate('HomePage');
      alert("Sign up successful");
    } catch (e) {
    console.error(e);
    alert(e.message || "Sign up failed. Please try again.");
    // Log the specific Firebase error
    if (e.code) {
      console.error("Firebase Error Code:", e.code);
    }
  }
  };
  
  const handleGoogleSignUp = async () => {
    try {
      const res = await signInWithGoogle(GoogleProvider);
      console.log('Google Sign-Up Response:', res);
    } catch (e) {
      console.error('Google Sign-Up Error:', e);
    }
  };
  
  const handleFacebookSignUp = async () => {
    try {
      const res = await signInWithFacebook(FacebookProvider);
      console.log('Facebook Sign-Up Response:', res);
    } catch (e) {
      console.error('Facebook Sign-Up Error:', e);
    }
  };
  
  

  return (
    <ImageBackground
      source={require("../assets/Rectangle-22061.png")}
      style={styles.backgroundImage}
      blurRadius={2}>
        
      <View style={styles.overlay} />
      <View style={styles.signup}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirst}
            placeholderTextColor="white"
          />
        </View>
        <View style={[styles.lineView, styles.iphone13ChildLayout1]} />
        <View style={styles.h1}>
          <Text style={styles.signup1}>SignUp</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLast}
            placeholderTextColor="white"
            colors={['rgb(76, 160, 252)', 'rgb(224, 47, 238)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          />
        </View>
        <View style={[styles.lineView1, styles.iphone13ChildLayout1]} />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="white"
          />
        </View>
        <View style={[styles.lineView1, styles.iphone13ChildLayout1]} />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Birth"
            value={birth}
            onChangeText={setBirth}
            placeholderTextColor="white"
          />
        </View>
        <View style={[styles.lineView1, styles.iphone13ChildLayout1]} />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="white"
          />
        </View>
        <View style={[styles.lineView1, styles.iphone13ChildLayout1]} />
        <View style={styles.btn}>
        <TouchableOpacity
          onPress={handleSignUp}
          style={styles.btn1}
          color={"#7D0C43"} >
          <Text style={{ color: '#fff', textAlign: 'center' }}>SignUp</Text>
          
        </TouchableOpacity>
      </View>
      <AntDesign name="user" size={20} color="white"style={styles.icon1} />
      <AntDesign name="user" size={20} color="white"style={styles.icon2} />
      <Feather name="mail" size={20} color="white" style={styles.icon3}/>
      <Fontisto name="date" size={20} color="white" style={styles.icon4}/>
      <FontAwesome6 name="unlock-keyhole" size={20} color="white"style={styles.icon5} />
      <Entypo name="eye-with-line" size={20} color="white" style={styles.eye}/>

        <View style={styles.frameParent}>
          <View style={styles.lineParent}>
            <View style={[styles.frameBorder]} />
            <Text style={styles.orSignupWith}>Or signup with</Text>
            <View style={[styles.frameItem, styles.frameBorder, ]} />
          </View>
        </View>

        <Image source={require('../assets/Google_Icons-09-512.webp')} style={styles.google} />
          <Image source={require('../assets/1657548367Facebook-logo.png')} style={styles.fb} />
          <Image source={require('../assets/png-apple-logo-9711.png')} style={styles.apple} />
        {/* <Button title="Sign In" onPress={handleSignIn} color="#7D0C43" /> */}
        <Text style={styles.alreadyHaveAnContainer}>
        <Text style={styles.alreadyHaveAn}>{`Already have an account! `}</Text>
        <Text style={styles.login} onPress={handleSignIn}>Login</Text>
      </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },

  
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Adjust the opacity as needed
    
  },
  signup2:{
    borderRadius: Border.br_31xl,
    maxWidth: 150,


  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 5,
    width: 250,
    marginLeft:40,
    top: 120,
  },

  icon1: {
   top:-236,
   marginLeft:20,
  },
  icon2: {
    top:-196,
    marginLeft:20,

   },
   icon3: {
    top:-153,
    marginLeft:20,

   },
   icon4: {
    top:-115,
    marginLeft:20,

   },
   icon5: {
    top:-75,
    marginLeft:20,

   },
   eye:{
    marginLeft:250,
    top:-92,
   },

  input: {
    // flex: 1,

    height: 40,
    padding: 10,
    color:"white",
    fontSize:18,

  },
  orSignupWith: {
    lineHeight: 21,
    marginLeft: 19,
    color: Color.primaryGrey2,
    fontFamily: FontFamily.latoRegular,
    fontSize: FontSize.size_base,
    textAlign: "center",
    top:100
  },
  frameItem: {
    marginLeft: 16,
  },
  lineParent: {
    justifyContent: "center",
    width: 260,
    flexDirection: "row",
    alignItems: "center",
    marginLeft:15,
  },

  iphone13ChildLayout1: {
    height: 1,
    width: 250,
    borderTopWidth: 1,
    borderColor: Color.shadesWhite,
    borderStyle: "solid",
    left: 20,
    top: 90,
  },
  btn: {
    top: 99,
    height: 59,
    shadowOpacity: 1,
   elevation: 10.02,
    maxWidth: 168,
    marginLeft:60,
   
  },
  frameBorder: {
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    borderColor:"white",
    flex: 1,
    top:100,
  },

  alreadyHaveAn: {
    fontFamily: FontFamily.robotoRegular,
    color: Color.primaryGrey2,
  },
  login: {
    fontFamily: FontFamily.robotoBold,
    color: Color.colorMediumvioletred_100,
    fontWeight: "700",
  },
  alreadyHaveAnContainer: {
    top: 720,
    left: 50,
    lineHeight: 26,
    letterSpacing: 0.2,
    fontSize: FontSize.size_base,
    textAlign: "center",
    position: "absolute",
  },
  h1: {
    top: -40,
    left: 100,
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
  google:{
    width: 60,
    height:60,
    borderRadius: 20,
    marginLeft:10,
    top:115,
    textAlign: "center",
    padding: 14,
  },
  fb:{
    width:60,
    height:50,
    borderRadius: 20,
    marginLeft: 215,
    top:59,
    textAlign: "center",
    padding: 14,
  },
  apple:{
    width: 50,
    height:50,
    borderRadius: 20,
    marginLeft: 120,
    top:8,
    textAlign: "center",
    padding: 14,
  },
  btn1: {
    top: 20,
    height: 39,
    shadowOpacity: 1,
     elevation: 10.02,
    maxWidth: 140,
    marginLeft:10,
    backgroundColor: "#7D0C43",
    borderRadius: Border.br_31xl,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
  },
  
});

export default SignUp;
