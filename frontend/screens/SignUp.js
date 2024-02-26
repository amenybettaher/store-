import React, { useState } from 'react';
import { View, TextInput, Button, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth, GoogleProvider } from '../firebase/config';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { LinearGradient } from "expo-linear-gradient";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

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
        alert("sign up successufully.");
        return;
      }

      const registerResponse = await axios.post('http://192.168.50.151:8000/users/register', {
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
    <View style={styles.signup}>
         <Image
        style={styles.signupChild}
        contentFit="cover"
        source={require("../assets/Rectangle-2206.png")}
      />
      <View style={styles.signupChild}>
        <View style={styles.h1}>
          <Text style={styles.signup1}>Signup</Text>
        </View>
        <View style={[styles.form, styles.formLayout]}>
          <View style={[styles.formChild, styles.childBorder]} />
          <Text style={[styles.userName, styles.nameTypo]}>{`firstName`}</Text>
          <Image
            style={[styles.userIcon, styles.userIconLayout]}
            contentFit="cover"
            source={require("../assets/user.png")}
          />
        </View>
      </View>
      <LinearGradient
        style={[styles.bg1, styles.iconTransform]}
        locations={[0, 1]}
        colors={["rgba(17, 17, 16, 0.79)", "rgba(45, 46, 50, 0)"]}
      >
        <View style={[styles.formParent, styles.iconTransform]}>
          <View style={styles.formLayout}>
            <View style={[styles.formChild, styles.childBorder]} />
            <Text style={[styles.lastName, styles.nameTypo]}>lastName</Text>
            <Image
              style={[styles.userIcon1, styles.iconTransform]}
              contentFit="cover"
              source={require("../assets/user.png")}
            />
          </View>
          <View style={[styles.form2, styles.formLayout]}>
            <View style={[styles.formChild, styles.childBorder]} />
            <Text style={[styles.email, styles.passwordTypo]}>
              email
            </Text>
          </View>
          <View style={[styles.form2, styles.formLayout]}>
            <View style={[styles.formChild, styles.childBorder]} />
            <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
            <View style={styles.iconvisibilityOff}>
              <View
                style={[styles.iconvisibilityOffChild, styles.childPosition]}
              />
              <Image
                style={[styles.vectorIcon, styles.iconTransform]}
                contentFit="cover"
                source={require("../assets/vector (2).png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.bgChild, styles.iconTransform]} />
        <Text style={[styles.birth, styles.iconTransform]}>birth</Text>
      </LinearGradient>
      <View style={styles.btn}>
        <Text style={styles.signup2}>Signup</Text>
      </View>
      <Text style={styles.alreadyHaveAnContainer}>
        <Text style={styles.alreadyHaveAn}>{`Already have an account! `}</Text>
        <Text style={styles.login}>Login</Text>
      </Text>
      <View style={[styles.frameParent, styles.formPosition]}>
        <View style={styles.lineParent}>
          <View style={styles.frameBorder} />
          <Text style={styles.orSignupWith}>Or signup with</Text>
          <View style={[styles.frameItem, styles.frameBorder]} />
        </View>
        <View style={styles.btnParent}>
          <View style={styles.btnShadowBox}>
            <Image
              style={styles.grommetIconsgoogle}
              contentFit="cover"
              source={require("../assets/grommeticonsgoogle1.png")}
            />
          </View>
          <View style={[styles.btn2, styles.btnShadowBox]}>
            <Image
              style={styles.vectorIcon1}
              contentFit="cover"
              source={require("../assets/Vector (1).png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.rectangle} />
    </View>
  );
};

const styles = StyleSheet.create({
  formLayout: {
    height: 84,
    width: 336,
  },
  childBorder: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_7xs,
  },
  nameTypo: {
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.latoRegular,
    lineHeight: 26,
    letterSpacing: 0.2,
    fontSize: FontSize.size_base,
  },
  userIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconTransform: {
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    position: "absolute",
  },
  passwordTypo: {
    top: "51.19%",
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.latoRegular,
    lineHeight: 26,
    letterSpacing: 0.2,
    fontSize: FontSize.size_base,
    width: "77.38%",
    position: "absolute",
  },
  childPosition: {
    left: "0%",
    position: "absolute",
  },
  formPosition: {
    left: 39,
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
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_41xl,
    justifyContent: "center",
    alignItems: "center",
    height: 55,
    shadowOpacity: 1,
    elevation: 10.02,
    shadowRadius: 10.02,
    shadowOffset: {
      width: 0,
      height: 12.521552085876465,
    },
    shadowColor: "rgba(0, 0, 0, 0.04)",
    borderRadius: Border.br_7xs,
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
  },
  signupChild: {
    top: 0,
    left: 0,
    width: 414,
    position: "absolute",
    height: 896,
  },
  signup1: {
    fontSize: FontSize.size_17xl,
    textAlign: "center",
    color: Color.shadesWhite,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
  },
  h1: {
    top: 34,
    left: 152,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_11xs,
    flexDirection: "row",
    position: "absolute",
  },
  formChild: {
    height: "65.48%",
    top: "34.52%",
    left: "0%",
    position: "absolute",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  userName: {
    left: "7.74%",
    textAlign: "left",
    top: "52.38%",
    width: "77.38%",
    color: Color.colorGray_100,
    position: "absolute",
  },
  userIcon: {
    right: "92.86%",
    bottom: "21.43%",
    top: "50%",
    width: "7.14%",
    maxHeight: "100%",
    maxWidth: "100%",
    height: "28.57%",
    left: "0%",
    position: "absolute",
  },
  form: {
    top: 113,
    left: 39,
    position: "absolute",
  },
  lastName: {
    left: "7.44%",
    textAlign: "left",
    top: "52.38%",
    width: "77.38%",
    color: Color.colorGray_100,
    position: "absolute",
  },
  userIcon1: {
    right: "93.15%",
    left: "-0.3%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    bottom: "21.43%",
    top: "50%",
    width: "7.14%",
    height: "28.57%",
  },
  emailAddress: {
    left: "6.85%",
  },
  form2: {
    marginTop: 15,
  },
  password: {
    left: "5.95%",
  },
  iconvisibilityOffChild: {
    height: "100%",
    top: "0%",
    backgroundColor: Color.colorSilver_300,
    bottom: "0%",
    right: "0%",
    left: "0%",
    width: "100%",
  },
  vectorIcon: {
    height: "79.17%",
    width: "83.4%",
    top: "8.33%",
    right: "8.3%",
    bottom: "12.5%",
    left: "8.3%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconvisibilityOff: {
    width: "7.17%",
    right: "5.95%",
    bottom: "19.05%",
    left: "86.87%",
    height: "28.57%",
    top: "52.38%",
    position: "absolute",
  },
  formParent: {
    top: 691,
    left: 375,
  },
  bgChild: {
    height: "11.68%",
    width: "81.16%",
    top: "76.43%",
    right: "-71.74%",
    bottom: "11.89%",
    left: "90.58%",
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_7xs,
  },
  cin: {
    height: "5.52%",
    width: "62.8%",
    top: "73.46%",
    left: "85.99%",
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.latoRegular,
    lineHeight: 26,
    letterSpacing: 0.2,
    fontSize: FontSize.size_base,
  },
  bg1: {
    top: 896,
    left: 414,
    height: 471,
    backgroundColor: "transparent",
    width: 414,
  },
  signup2: {
    fontSize: FontSize.size_lg,
    lineHeight: 27,
    textAlign: "left",
    color: Color.shadesWhite,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
  },
  btn: {
    top: 604,
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorMediumvioletred_200,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_41xl,
    height: 55,
    shadowOpacity: 1,
    elevation: 10.02,
    shadowRadius: 10.02,
    shadowOffset: {
      width: 0,
      height: 12.521552085876465,
    },
    shadowColor: "rgba(0, 0, 0, 0.04)",
    justifyContent: "center",
    alignItems: "center",
    width: 336,
    left: 39,
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
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
    top: 824,
    left: 94,
    lineHeight: 26,
    letterSpacing: 0.2,
    fontSize: FontSize.size_base,
    textAlign: "center",
    position: "absolute",
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
    alignItems: "center",
    width: 336,
    flexDirection: "row",
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
    top: 689,
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
  signup: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.sthDark,
    overflow: "hidden",
    height: 896,
    width: "100%",
    flex: 1,
  },
});

export default SignUp;