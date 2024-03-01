import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert , StyleSheet} from 'react-native';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';
import { useNavigation } from '@react-navigation/native';
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";
import axios from 'axios';


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
      navigation.navigate('Article');
      
      Alert.alert("Sign in successful");
    } catch (e) {
      console.error(e);
      Alert.alert("Sign in failed. Please try again.");
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' }}>
   
      <View style={{ width: '80%' }}>
        <Text style={{ color: '#fff', fontSize: 24, marginBottom: 20 }}>Sign In</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={{ backgroundColor: '#333', padding: 10, marginBottom: 10, color: '#fff' }}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          style={{ backgroundColor: '#333', padding: 10, marginBottom: 20, color: '#fff' }}
        />
        <TouchableOpacity
          onPress={handleSignIn}
          style={{ backgroundColor: '#3f51b5', padding: 10, borderRadius: 5 }}
        >
          <Text style={{ color: '#fff', textAlign: 'center' }}>Sign In</Text>
        </TouchableOpacity>
        
        <Text style={{ color: '#fff', marginTop: 10 }}>
          Don't have an account? <Text style={{ color: '#2196f3' }} onPress={() => navigation.navigate('SignUp')}>Sign Up</Text>
        </Text>
        
        <Text style={{ color: '#fff', marginTop: 10 }}>
          By signing in, you agree to our <Text style={{ color: '#2196f3' }}>Terms of Service</Text> and <Text style={{ color: '#2196f3' }}>Privacy Policy</Text>.
        </Text>
      </View>



     
    </View>
  );
};
const styles = StyleSheet.create({
    loginChildPosition: {
      left: 0,
      top: 0,
    },
    h1Transform: {
      transform: [
        {
          rotate: "-180deg",
        },
      ],
      position: "absolute",
    },
    formLayout: {
      height: 84,
      width: 336,
      left: 0,
      position: "absolute",
    },
    childPosition: {
      top: "0%",
      height: "100%",
      left: "0%",
      bottom: "0%",
      right: "0%",
      width: "100%",
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
    frameBorder: {
      height: 1,
      borderTopWidth: 1,
      borderColor: Color.sthLightgrey,
      borderStyle: "solid",
      flex: 1,
    },
    btnShadowBox: {
      backgroundColor: Color.sthDarkgrey,
      borderRadius: Border.br_7xs,
      paddingVertical: Padding.p_3xs,
      paddingHorizontal: Padding.p_41xl,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      height: 55,
      shadowOpacity: 1,
      elevation: 10.02,
      shadowRadius: 10.02,
      shadowOffset: {
        width: 0,
        height: 12.521552085876465,
      },
      shadowColor: "rgba(0, 0, 0, 0.04)",
      overflow: "hidden",
      flex: 1,
    },
    loginChild: {
      width: 414,
      position: "absolute",
      height: 896,
    },
    login1: {
      fontSize: FontSize.size_lg,
      lineHeight: 27,
      textAlign: "left",
      color: Color.shadesWhite,
      fontFamily: FontFamily.latoBold,
      fontWeight: "700",
    },
    btn: {
      top: 390,
      borderRadius: Border.br_21xl,
      backgroundColor: "rgba(143, 5, 71, 0.82)",
      paddingVertical: Padding.p_3xs,
      paddingHorizontal: Padding.p_41xl,
      height: 55,
      elevation: 10.02,
      shadowRadius: 10.02,
      shadowColor: "rgba(0, 0, 0, 0.04)",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      width: 336,
      shadowOpacity: 1,
      shadowOffset: {
        width: 0,
        height: 12.521552085876465,
      },
      left: 375,
      transform: [
        {
          rotate: "-180deg",
        },
      ],
      position: "absolute",
      overflow: "hidden",
    },
    formChild: {
      height: "65.48%",
      top: "34.52%",
      borderRadius: Border.br_8xs,
      backgroundColor: Color.colorGainsboro_100,
      borderColor: Color.colorBlack,
      borderWidth: 1,
      borderStyle: "solid",
      left: "0%",
      bottom: "0%",
      right: "0%",
      position: "absolute",
      width: "100%",
    },
    emailAddress: {
      width: "77.38%",
      top: "51.19%",
      left: "5.95%",
      color: Color.colorGray_100,
      fontFamily: FontFamily.latoRegular,
      lineHeight: 26,
      letterSpacing: 0.2,
      fontSize: FontSize.size_base,
      textAlign: "left",
      position: "absolute",
    },
    form: {
      top: 0,
      height: 84,
    },
    iconvisibilityOffChild: {
      backgroundColor: "rgba(0, 0, 0, 0)",
      position: "absolute",
    },
    vectorIcon: {
      height: "79.17%",
      width: "83.4%",
      top: "8.33%",
      right: "8.3%",
      bottom: "12.5%",
      left: "8.3%",
      maxWidth: "100%",
      maxHeight: "100%",
      overflow: "hidden",
    },
    iconvisibilityOff: {
      height: "28.57%",
      width: "7.17%",
      top: "52.38%",
      right: "5.95%",
      bottom: "19.05%",
      left: "86.87%",
      position: "absolute",
    },
    form1: {
      top: 99,
    },
    forgotPassword: {
      left: 223,
      textDecoration: "underline",
      top: 198,
    },
    radioButtonChild: {
      backgroundColor: Color.sthLightgrey,
      top: "0%",
      height: "100%",
      left: "0%",
      bottom: "0%",
      right: "0%",
      width: "100%",
    },
    radioButtonItem: {
      height: "78.75%",
      width: "44.06%",
      top: "10.42%",
      right: "50.12%",
      bottom: "10.83%",
      left: "5.83%",
      backgroundColor: Color.shadesWhite,
      shadowColor: "rgba(0, 0, 0, 0.25)",
      shadowRadius: 2,
      elevation: 2,
      shadowOpacity: 1,
      shadowOffset: {
        width: 0,
        height: 12.521552085876465,
      },
      borderRadius: Border.br_31xl,
    },
    radioButton: {
      width: 43,
      height: 24,
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
    radioButtonParent: {
      top: 198,
      alignItems: "center",
      flexDirection: "row",
      left: 0,
      position: "absolute",
    },
    formParent: {
      top: 647,
      height: 222,
      width: 336,
      left: 375,
      transform: [
        {
          rotate: "-180deg",
        },
      ],
      position: "absolute",
    },
    login2: {
      fontSize: FontSize.size_17xl,
      textAlign: "center",
      color: Color.shadesWhite,
      fontFamily: FontFamily.latoBold,
      fontWeight: "700",
    },
    h1: {
      top: 856,
      left: 251,
      paddingHorizontal: 0,
      paddingVertical: Padding.p_11xs,
      flexDirection: "row",
    },
    bg1: {
      top: 896,
      left: 414,
      height: 471,
      backgroundColor: "transparent",
      width: 414,
    },
    dontHaveAn: {
      fontFamily: FontFamily.robotoRegular,
      color: Color.primaryGrey2,
    },
    signup: {
      fontFamily: FontFamily.robotoBold,
      color: Color.colorMediumvioletred_100,
      fontWeight: "700",
    },
    dontHaveAnContainer: {
      top: 824,
      left: 96,
      textAlign: "center",
      lineHeight: 26,
      letterSpacing: 0.2,
      fontSize: FontSize.size_base,
      position: "absolute",
    },
    orLoginWith: {
      marginLeft: 16,
      color: Color.primaryGrey2,
      textAlign: "center",
      lineHeight: 21,
      fontFamily: FontFamily.latoRegular,
      fontSize: FontSize.size_base,
    },
    frameItem: {
      marginLeft: 16,
    },
    lineParent: {
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      width: 336,
    },
    grommetIconsgoogle: {
      width: 18,
      height: 18,
      overflow: "hidden",
    },
    vectorIcon1: {
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
      top: 595,
      left: 39,
      position: "absolute",
    },
    rectangle: {
      bottom: 7,
      left: 139,
      borderRadius: Border.br_81xl,
      backgroundColor: Color.colorDarkslategray_100,
      width: 135,
      height: 5,
      position: "absolute",
    },
    login: {
      borderRadius: Border.br_11xl,
      backgroundColor: Color.sthDark,
      overflow: "hidden",
      height: 896,
      width: "100%",
      flex: 1,
    },
  });
export default SignIn;
