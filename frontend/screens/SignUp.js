import React, { useState } from 'react';
import { View, TextInput, Button, TouchableOpacity, Text, Image, StyleSheet, ImageBackground} from 'react-native';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth, GoogleProvider } from '../firebase/config';
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
import { useDispatch } from 'react-redux';
import { signUp } from '../redux/action';
import { useSelector } from 'react-redux';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


const SignUp = () => {



  const [email, setEmail] = useState('');
  const [birth, setBirth] = useState('');
  const [firstName, setFirst] = useState('');
  const [lastName, setLast] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithFacebook] = useSignInWithFacebook(auth);
  const [userr, setUserr] = useState(null);


  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleSignIn = () => {
    navigation.navigate('SignIn');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }
  const handleSignUp = async () => {

    try {

      const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;
      if (!passwordRegex.test(password)) {
        alert("Password must contain at least one capital letter, one number, and one symbol (!@#$%^&*)");
        return;
      }

    navigation.navigate('HomePage');
      
      const res = await createUserWithEmailAndPassword(email, password);
  
      if (!res || !res.user) {
        throw new Error("Sign up successful");
      }
  
      const registerResponse = await axios.post('http://192.168.43.151:8000/users/register', {
        firstName,
        lastName,
        email,
        birth,
        password
      });
  
      console.log('Registration API response:', registerResponse);



      // Store the user's email in session storage
      sessionStorage.setItem('userEmail', email);
  
    setUserr(registerResponse.data);

      setFirst('');
      setLast('');
      setEmail('');
      setPassword('');
      setBirth('');


      navigation.navigate('HomePage');

      const userData = registerResponse.data;
      dispatch(signUp(userData));
      console.log(userData,"this is the usersss register");

      alert("Sign up successful");
    } catch (e) {
    console.error(e);
    alert(e.message || "Sign up successful. ");
    // Log the specific Firebase error
    if (e.code) {
      console.error("Firebase Error Code:", e.code);
    }
  }
  };
  
  const handleSignInWithGoogle = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      // You can access the user information with result.user
      console.log('Google Sign-In successful:', result.user);
    } catch (error) {
      console.error('Google Sign-In error:', error.message);
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
      source={require("../assets/hh.png")}
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
            secureTextEntry={!showPassword} // Toggle secureTextEntry based on showPassword state

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
      <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eye}>
        <Entypo name={showPassword ? "eye" : "eye-with-line"} size={20} color="white" />
      </TouchableOpacity>

        <View style={styles.frameParent}>
          <View style={styles.lineParent}>
            <View style={[styles.frameBorder]} />
            <Text style={styles.orSignupWith}>Or signup with</Text>
            <View style={[styles.frameItem, styles.frameBorder, ]} />
          </View>
        </View>
        <TouchableOpacity onPress={handleSignInWithGoogle}>
        <Image source={require('../assets/Google_Icons-09-512.webp')} style={styles.google} />
        </TouchableOpacity>
          <Image source={require('../assets/1657548367Facebook-logo.png')} style={styles.fb} onPress={handleFacebookSignUp}/>
          <AntDesign name="apple1" size={37} color="white" style={styles.apple} />
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
    top: -0,
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
    width: 60,
    height:80,
    borderRadius: 20,
    marginLeft: 110,
    top:2,
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
