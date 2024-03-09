import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator, StyleSheet } from 'react-native';
import emailjs from 'emailjs-com';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ContactUs = () => {
  const navigation = useNavigation();
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const sendMail = () => {
    // Basic form validation
    if (!fullname || !email || !message) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setLoading(true);

    const params = { name: fullname, email, message };
    const serviceID = "service_wy9hvhy";
    const templateID = "template_34p5rh7"; 
    const userID = "agzGZtxooPi9TYwL-";

    emailjs
      .send(serviceID, templateID, params, userID)
      .then((res) => {
        setFullname('');
        setEmail('');
        setMessage('');
        Alert.alert('Success', 'Your message sent successfully!!');
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert('Error', 'Failed to send message. Please try again.');
      })
      .finally(() => setLoading(false));
  };

  return (
    <View style={styles.container}>
      <View style={styles.notificationsWrapper}>
        <TouchableOpacity onPress={handleBackPress}>
          <Ionicons name="arrow-back" size={26} color="white" style={styles.back} />
        </TouchableOpacity>
        <Text style={styles.notifications}>ContactUs</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Your Name"
        placeholderTextColor="black"
        value={fullname}
        onChangeText={(text) => setFullname(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Email"
        placeholderTextColor="black"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.input, styles.messageInput]}
        placeholder="Tell me Your Story or Question For Us"
        placeholderTextColor="black"
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
    justifyContent: 'center',
    padding: 16,
  },
  notificationsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  back: {
    marginRight: 10,
  },
  notifications: {
    fontSize: 20,
    color: 'white',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
  messageInput: {
    height: 80,
  },
  sendButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default ContactUs;
