import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator, StyleSheet,Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';
import { useNavigation } from '@react-navigation/native';

const ContactUs = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // Initialize loading state as false

  const handleBackPress = () => {
    // Handle navigation back
  };
  const navigation = useNavigation(); // Initialize navigation using useNavigation hook

  const handleStartPress = () => {
    navigation.navigate('Profil'); // Navigate to 'Onbording2' screen
  };
  const sendMail = async () => {
    // Basic form validation
    if (!fullname || !email || !message) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setLoading(true);

    try {
      const emailBody = `Name: ${fullname}\nEmail: ${email}\nMessage: ${message}`;

      await MailComposer.composeAsync({
        recipients: ['amenibettaher2@gmail.com'],
        subject: 'Contact Us Form Submission',
        body: emailBody,
      });

      setFullname('');
      setEmail('');
      setMessage('');
      setLoading(false);
      Alert.alert('Success', 'Your message sent successfully!!');
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
      Alert.alert('Error', 'Failed to send message. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
                    <View style={[styles.settingChild, styles.settingPosition]} />

      <View style={styles.header}>
      <Pressable onPress={handleStartPress}>
          <Ionicons name="arrow-back" size={26} color="white" style={styles.backIcon} />
</Pressable>        
<Text style={styles.headerText}>Contactez-nous</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="votre nom"
        placeholderTextColor="#333"
        value={fullname}
        onChangeText={(text) => setFullname(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Votre e-mail"
        placeholderTextColor="#333"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.input, styles.messageInput]}
        placeholder="Racontez-nous votre histoire ou posez une question"
        placeholderTextColor="#333"
        multiline
        value={message}
        onChangeText={(text) => setMessage(text)}
      />

      <TouchableOpacity
        style={styles.sendButton}
        onPress={sendMail}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.buttonText}>Envoyer </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    top:130
  },

settingChild: {
  width: 450,
  height: 191,
  marginLeft:-30,
  top:-120,
  backgroundColor:"#7d0c42"
  
},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon:{
    marginLeft: 1,
    top: -290,
  },
  headerText: {
    fontSize: 24,
    lineHeight: 28,
    textAlign: "center",
    fontWeight: "600",
    width: 221,
    left: 60,
    top: -220,
    position: "absolute",
    color:"white"
  },
  input: {
    height: 40,
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
    padding: 10,
    fontSize: 16,
    color: '#333',
  },
  messageInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  sendButton: {

    backgroundColor: '#7d0c42',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,

    backgroundColor: '#7d0c42',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    backgroundColor:"#7d0c42"

  },
});

export default ContactUs;
