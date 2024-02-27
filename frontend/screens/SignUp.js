import React, { useState } from 'react';
import { View, TextInput, Button, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth, GoogleProvider } from '../firebase/config';
import { useNavigation } from '@react-navigation/native';
import { Image as RNImage } from 'react-native';
import axios from 'axios';

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
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="FirstName"
        value={firstName}
        onChangeText={setFirst}
      />
      <TextInput
        style={styles.input}
        placeholder="LastName"
        value={lastName}
        onChangeText={setLast}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Birth"
        value={birth}
        onChangeText={setBirth}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Sign Up" onPress={handleSignUp} />
      <TouchableOpacity onPress={handleGoogleSignUp}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/270/270014.png' }}
          style={styles.googleImage}
        />
      </TouchableOpacity>
      <Text>or</Text>
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
  googleImage: {
    width: 50,
    height: 50,
    margin: 10,
  },
});

export default SignUp;