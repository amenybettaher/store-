import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator, StyleSheet } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer'; 

const ContactUs = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // Initialize loading state as false

  const handleBackPress = () => {
    // Handle navigation back
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
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <Ionicons name="arrow-back" size={24} color="white" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Contact Us</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Your Name"
        placeholderTextColor="#333"
        value={fullname}
        onChangeText={(text) => setFullname(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Email"
        placeholderTextColor="#333"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.input, styles.messageInput]}
        placeholder="Tell us Your Story or Ask a Question"
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
          <Text style={styles.buttonText}>Send Message</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 24,
    color: 'white',
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

    backgroundColor: '#0066cc',
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
