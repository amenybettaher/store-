import React, { useState } from 'react';
import { View, TextInput, Button, TouchableOpacity, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth, GoogleProvider } from '../firebase/config';
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

  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate('SignIn');
  };

  const handleSignUp = async () => {
    try {
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

      const registerResponse = await axios.post('http://192.168.137.1:8000/users/register', {
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
      console.log({ res });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <ImageBackground
      source={require("../assets/rectangle-22061.png")}
      style={styles.backgroundImage}
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
            placeholderTextColor="#000000"
          />
        </View>

        <View style={styles.inputContainer}>
          <Image source={require("../assets/user.png")} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLast}
            placeholderTextColor="#000000"
          />
        </View>

        <View style={styles.inputContainer}>
          <Image source={require("../assets/mail.png")} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="#000000"
          />
        </View>

        <View style={styles.inputContainer}>
          <Image source={require("../assets/calendar.png")} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Birth"
            value={birth}
            onChangeText={setBirth}
            placeholderTextColor="#000000"
          />
        </View>

        <View style={styles.inputContainer}>
          <Image source={require("../assets/lock.png")} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="#000000"
          />
        </View>

        <Button title="Sign Up" onPress={handleSignUp} color="#7D0C43" />
        <TouchableOpacity onPress={handleGoogleSignUp}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/270/270014.png' }}
            style={styles.googleImage}
          />
        </TouchableOpacity>
        <View style={styles.frameParent}>
        <View style={styles.lineParent}>
          <View style={styles.frameBorder} />
          <Text style={styles.orSignupWith}>Or signup with</Text>
          <View style={[styles.frameItem, styles.frameBorder]} />
        </View>
        <View style={styles.btnParent}>
          <View style={styles.btnShadowBox}>
            <Image
              style={styles.grommetIconsgoogle}
              resizeMode="cover"
              source={require("../assets/grommeticonsgoogle1.png")}
            />
          </View>
          <View style={[styles.btn2, styles.btnShadowBox]}>
            <Image
              style={styles.vectorIcon}
              resizeMode="cover"
              source={require("../assets/fb.png")}
            />
          </View>
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
    backgroundColor: 'rgba(255, 255, 255, 0.6)', // Adjust the background color and opacity as needed
    borderRadius: 5,
  },

  icon: {
    width: 24,
    height: 23.54,
    marginRight: 10,
  },

  input: {
    // flex: 1,
    width: 200,
    height: 40,
    padding: 10,
    color: 'black',
  },
  orSignupWith: {
    lineHeight: 21,
    marginLeft: 16,
    color: Color.primaryGrey2,
    fontFamily: FontFamily.latoRegular,
    fontSize: FontSize.size_base,
    textAlign: "center",
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
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  vectorIcon: {
    width: 10,
    height: 19,
  },
  btn2: {
    marginLeft: 10,
  },
  btnParent: {
    width: 335,
    marginTop: 15,
    flexDirection: "row",
  },
  frameParent: {
    top: 689,
    left: 39,
    position: "absolute",
  },
});

export default SignUp;
