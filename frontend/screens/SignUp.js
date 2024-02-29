import React, { useState } from 'react';
import { View, TextInput, Button, TouchableOpacity, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth, GoogleProvider } from '../firebase/config';
import LinearGradient from 'react-native-linear-gradient';

import { useSignInWithFacebook } from 'react-firebase-hooks/auth';
import { FacebookProvider } from '../firebase/config';

import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Color, FontFamily, FontSize } from "../GlobalStyles";

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

      navigation.navigate('home');

      const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;
      if (!passwordRegex.test(password)) {
        alert("Password must contain at least one capital letter, one number, and one symbol (!@#$%^&*)");
        return;
      }

      const res = await createUserWithEmailAndPassword(email, password);

      if (!res || !res.user) {
        alert("User creation failed. Please try again.");
        return;
      }

      const registerResponse = await axios.post('http://192.168.1.17:8000/users/register', {
        firstName,
        lastName,
        email,
        birth,
        password
      });

      console.log('Registration API response:', registerResponse);

      // Store the user's email in session storage
      sessionStorage.setItem('userEmail', email);

      setEmail('');
      setPassword('');
      setBirth('');
      setFirst('');
      setLast('');

      navigation.navigate('home');
      alert("Sign up successful");
    } catch (e) {
      console.error(e);
      alert("Sign up failed. Please try again.");
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
      source={require("../assets/360_F_434190838_3FCCIiag1LYlL1IA6pb0WPEEqxiZVfPO.jpeg")}
      style={styles.backgroundImage}
      blurRadius={2}
    >
      <View style={styles.overlay} />
      <View style={styles.signup}>
        <View style={styles.inputContainer}>
          <Image source={require("../assets/user.png")} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirst}
            placeholderTextColor="white"
          />
        </View>
        <View style={[styles.lineView, styles.iphone13ChildLayout1]} />


        <View style={styles.inputContainer}>
          <Image source={require("../assets/user.png")} style={styles.icon} />
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
          <Image source={require("../assets/mail.png")} style={styles.icon} />
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
          <Image source={require("../assets/calendar.png")} style={styles.icon} />
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
          <Image source={require("../assets/lock.png")} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="white"
          />
        </View>
        <View style={[styles.lineView1, styles.iphone13ChildLayout1]} />

        <Button title="Sign Up" onPress={handleSignUp} color="#7D0C43" /> 

        
        <View style={styles.frameParent}>
          <View style={styles.lineParent}>
            <View style={[styles.frameBorder, { backgroundColor: 'red' }]} />
            <Text style={styles.orSignupWith}>Or signup with</Text>
            <View style={[styles.frameItem, styles.frameBorder, { backgroundColor: 'blue' }]} />
          </View>
          <View style={styles.btnParent}>
          <TouchableOpacity onPress={handleGoogleSignUp}>
            <View style={[styles.btnShadowBox, { backgroundColor: '#484848' }]}>
              <Image
                style={styles.grommetIconsgoogle}
                resizeMode="cover"
                source={require("../assets/grommeticonsgoogle1.png")}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleFacebookSignUp}>
            <View style={[styles.btn2, styles.btnShadowBox, { backgroundColor: '#484848' }]}>
              <Image
                style={styles.vectorIcon}
                resizeMode="cover"
                source={require("../assets/fb.png")}
              />
            </View>
          </TouchableOpacity>
        </View>
        </View>
        <Button title="Sign In" onPress={handleSignIn} color="#7D0C43" />
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

  googleImage: {
    width: 50,
    height: 50,
    margin: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Adjust the opacity as needed
    
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 5,
    width: 250,
    marginLeft:50,
  },

  icon: {
    width: 24,
    height: 23.54,
    marginRight: 10,
  },

  input: {
    // flex: 1,

    height: 40,
    padding: 10,
    color: 'black',
    color:"white",
  },
  orSignupWith: {
    lineHeight: 21,
    marginLeft: 16,
    color: Color.primaryGrey2,
    fontFamily: FontFamily.latoRegular,
    fontSize: FontSize.size_base,
    textAlign: "center",
    top:20
  },
  frameItem: {
    marginLeft: 16,
  },
  lineParent: {
    justifyContent: "center",
    width: 336,
    flexDirection: "row",
    alignItems: "center",
  },

  grommetIconsgoogle: {
    width: 30,
    height: 30,
    overflow: "hidden",
    margin :5,
    
 
  },
  vectorIcon: {
    width: 36,
    height: 36,
  },
  btn2: {
    marginLeft: 190,
  },
  btnParent: {
    width: 335,
    marginTop: 15,
    flexDirection: "row",
  },
  lineView: {
    top: 40,
    left: 1,
    position: "absolute",
  },
  iphone13ChildLayout1: {
    height: 1,
    width: 220,
    borderTopWidth: 1,
    borderColor: Color.shadesWhite,
    borderStyle: "solid",
    left: 50,
  },
});

export default SignUp;
